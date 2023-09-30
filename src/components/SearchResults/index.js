import React, { useState } from "react";
import TrackList from "../TrackList";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function SearchResults(props) {
  return (
    <div>
      <h2>Results</h2>
      <TrackList
        tracks={props.results}
        faActionIcon={faPlus}
        handleAction={props.addTrack}
      />
    </div>
  );
}

export default SearchResults;
