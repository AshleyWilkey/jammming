import React from "react";
import Track from "../Track";
import styles from "../TrackList/TrackList.module.css";

function TrackList(props) {
  return (
    <div className={styles["TrackList"]}>
      {props.tracks.map((track, idx) => (
        <Track
          key={track.id + idx}
          track={track}
          faActionIcon={props.faActionIcon}
          handleAction={props.handleAction}
        />
      ))}
    </div>
  );
}

export default TrackList;
