import { useEffect, useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spotify from "./clients/spotify";
import { spotifyClientId } from "./config";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const url = new URL(window.location.href.replace("/#", "/?"));
  const queryParams = url.searchParams;
  const spotifyAccessToken = queryParams.get("access_token");
  const spotifyState = queryParams.get("state");
  const spotify = new Spotify(spotifyClientId);

  useEffect(() => {
    if (spotifyState && spotifyState === localStorage.getItem("spotifyState")) {
      localStorage.setItem("spotifyAccessToken", spotifyAccessToken);
    }
    if (!localStorage.getItem("spotifyAccessToken")) {
      spotify.redirectToAccessTokenFlow();
    }
  }, []);

  async function handleSearch(searchTerm) {
    // make api call to spotify using search term
    const tracks = await spotify.search(searchTerm);
    // set the search results state variable to the data coming back from spotify

    setSearchResults(tracks);
  }

  function addTrackToPlaylist(track) {
    setPlaylist((prev) => {
      if (prev.some((el) => el.id === track.id)) return prev;
      return [...prev, track];
    });
  }

  function removeTrackFromPlaylist(track) {
    setPlaylist((prev) => prev.filter((el) => el.id !== track.id));
  }

  async function handlePlaylistSave() {
    const me = await spotify.me();
    const spotifyPlaylist = await spotify.createPlaylist(me.id);
    const trackUris = playlist.map((track) => track.uri);
    await spotify.addItemsToPlaylist(spotifyPlaylist.id, trackUris);
  }
  return (
    <div className="App">
      <h1 className="App-logo">
        Ja<span>mmm</span>ing
      </h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="App-columns">
        <div className="App-column">
          <SearchResults
            results={searchResults}
            addTrack={addTrackToPlaylist}
          />
        </div>
        <div className="App-column">
          <Playlist
            playlist={playlist}
            removeTrack={removeTrackFromPlaylist}
            handleSave={handlePlaylistSave}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
