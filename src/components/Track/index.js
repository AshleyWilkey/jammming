import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Track.module.css";
import { truncate } from "../../utils";

function Track(props) {
  return (
    <div className={styles.Track}>
      <img src={props.track.album.images[2].url} />
      <div className={styles["Track-info"]}>
        <h3>{truncate(props.track.name, 28)}</h3>
        <h4>
          {props.track.artists[0].name} | {props.track.album.name}
        </h4>
        <h5>{new Date(props.track.album.release_date).getFullYear()}</h5>
      </div>
      <button
        className={styles["Track-button"]}
        onClick={() => props.handleAction(props.track)}
      >
        <FontAwesomeIcon icon={props.faActionIcon} />
      </button>
    </div>
  );
}
export default Track;
