import { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import data from "./data.json";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function handleSearch(searchTerm) {
    // make api call to spotify using search term
    // set the search results state variable to the data coming back from spotify
    setSearchResults(data.tracks.items);
  }

  return (
    <div className="App">
      <h1 className="App-logo">
        Ja<span>mmm</span>ing
      </h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="App-columns">
        <div className="App-column">
          <SearchResults results={searchResults} />
        </div>
        <div className="App-column">
          <Playlist playlist={playlist} />
        </div>
      </div>
    </div>
  );
}

export default App;
