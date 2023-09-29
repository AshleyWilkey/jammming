import React, { useState } from "react";
import Track from "../Track";
import styles from "../TrackList/TrackList.module.css";

function TrackList(props) {
  return (
    <div className={styles["TrackList"]}>
      {props.tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default TrackList;
