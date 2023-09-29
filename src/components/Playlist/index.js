import React, { useState } from "react";
import TrackList from "../TrackList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import styles from "../Playlist/Playlist.module.css";

function Playlist(props) {
  return (
    <div>
      <h2>Playlist</h2>

      <TrackList tracks={props.playlist} />
      <button className={styles["Playlist-button"]}>
        Save to Spotify{" "}
        <FontAwesomeIcon icon={faSpotify} style={{ color: "#07da31" }} />
      </button>
    </div>
  );
}

export default Playlist;