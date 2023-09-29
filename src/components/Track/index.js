import React, { useState } from "react";
import styles from "./Track.module.css";

function Track(props) {
  return (
    <div className={styles.Track}>
      <img src={props.track.album.images[2].url} />
      <div className={styles["Track-info"]}>
        <h3>{props.track.name}</h3>
        <h4>
          {props.track.artists[0].name} | {props.track.album.name}
        </h4>
        <h5>{new Date(props.track.album.release_date).getFullYear()}</h5>
      </div>
    </div>
  );
}
export default Track;
