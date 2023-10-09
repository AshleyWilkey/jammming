import React, { useState } from "react";
import TrackList from "../TrackList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSubtract } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import styles from "../Playlist/Playlist.module.css";

function Playlist(props) {
  return (
    <div>
      <h2>Playlist</h2>
      <TrackList
        tracks={props.playlist}
        faActionIcon={faSubtract}
        handleAction={props.removeTrack}
      />
      <button className={styles["Playlist-button"]} onClick={props.handleSave}>
        Save to Spotify{" "}
        <FontAwesomeIcon icon={faSpotify} style={{ color: "#07da31" }} />
      </button>
    </div>
  );
}

export default Playlist;
