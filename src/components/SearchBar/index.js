import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

function SearchBar({ handleSearch }) {
  const [active, setActive] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={styles["SearchBar-container"]}
        style={
          active
            ? { border: "solid 2px white" }
            : { border: "solid 2px var(--secondary-bg-color)" }
        }
      >
        <FontAwesomeIcon className={styles["SearchBar-icon"]} icon={faSearch} />
        <input
          onBlur={(e) => setActive(false)}
          onClick={(e) => setActive(true)}
          type="text"
          placeholder="Search Artist, song or album..."
          className={styles.SearchBar}
        />
        <button className={styles["SearchBar-submit"]} type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
