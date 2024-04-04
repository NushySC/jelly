import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../img/search.svg";
import Sort from "./Sort";

interface SearchProps {
  onSearch: (query: string) => void;
  onSortChange: (sortQuery: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, onSortChange }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="header">
      <div className="search">
        <SearchIcon className="search__icon" />
        <input
          className="search__input"
          type="text"
          value={query}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Search products..."
        />
        <button className="search__btn" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <Sort onChange={onSortChange} />
    </div>
  );
};

export default Search;
