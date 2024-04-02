import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import Side from "./components/Side";
import Search from "./components/Search";
import Beans from "./components/Beans";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortQuery, setSortQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (sortQuery: string) => {
    setSortQuery(sortQuery);
  };
  const clearQuery = () => {
    setSearchQuery("");
  };
  return (
    <div className="app">
      <Side />
      <div className="main">
        <Search onSearch={handleSearch} onSortChange={handleSortChange} />
        {searchQuery && (
          <div className="results">
            <p
              dangerouslySetInnerHTML={{
                __html: `Your search on <span> ${searchQuery} </span> has provided " " results`,
              }}
            ></p>
            <button className="results__clear" onClick={clearQuery}>
              Clear Search
              {/* <CloseIcon className='results__icon' /> */}
            </button>
          </div>
        )}
        <div className="beans">
          <Beans searchQuery={searchQuery} sortQuery={sortQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
