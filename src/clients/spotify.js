import axios from "axios";

class Spotify {
  constructor(clientId) {
    this.clientId = clientId;
  }

  redirectToAccessTokenFlow() {
    const verifier = this.generateCodeVerifier(16);

    localStorage.setItem("spotifyState", verifier);

    const params = new URLSearchParams();
    params.append("client_id", this.clientId);
    params.append("response_type", "token");
    params.append("redirect_uri", document.location.origin);
    params.append(
      "scope",
      "playlist-modify-public user-read-private user-read-email"
    );
    params.append("state", verifier);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  generateCodeVerifier(length) {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  async search(query) {
    try {
      const params = new URLSearchParams();
      params.append("q", query);
      params.append("type", ["album", "artist", "track"]);

      const res = await axios.get(
        `https://api.spotify.com/v1/search?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "spotifyAccessToken"
            )}`,
          },
        }
      );
      return res.data.tracks ? res.data.tracks.items : [];
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.setItem("lastSearch", query);
        this.redirectToAccessTokenFlow();
      }
      console.error(error);
      return [];
    }
  }
  async me() {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("spotifyAccessToken")}`,
        },
      });
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        this.redirectToAccessTokenFlow();
      }
      console.error(error);
    }
  }
  async createPlaylist(userId, name = "My New Playlist") {
    try {
      const res = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "spotifyAccessToken"
            )}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        this.redirectToAccessTokenFlow();
      }
      console.error(error);
    }
  }

  async addItemsToPlaylist(playlistId, uris) {
    try {
      const res = await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          uris,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "spotifyAccessToken"
            )}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        this.redirectToAccessTokenFlow();
      }
      console.error(error);
    }
  }
}
export default Spotify;
