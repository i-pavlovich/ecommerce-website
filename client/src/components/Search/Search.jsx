import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import "./Search.scss";

const Search = ({ setSearchModal }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input autoFocus type="text" placeholder="Search for products" />
        <CloseIcon
          className="close-button"
          onClick={() => setSearchModal(false)}
        />
      </div>
      <div className="search-result-content">
        <div className="search-results"></div>
      </div>
    </div>
  );
};

export default Search;
