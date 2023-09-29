import React, { useState } from "react";
import TrackList from "../TrackList";
function SearchResults(props) {
  return (
    <div>
      <h2>Results</h2>
      <TrackList tracks={props.results} />
    </div>
  );
}
export default SearchResults;
