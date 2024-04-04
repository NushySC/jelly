import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import Side from "./components/Side";
import Beans from "./components/Beans";
import { ReactComponent as CloseIcon } from "./img/close.svg";

interface BeanItem {
  beanId: number;
  imageUrl: string;
  description: string;
  flavorName: string;
  colorGroup: string;
  ingredients: string[];
  seasonal: boolean;
  glutenFree: boolean;
  sugarFree: boolean;
  backgroundColor: string;
  kosher: boolean;
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortQuery, setSortQuery] = useState<string>("");
  const [jellys, setJellys] = useState<BeanItem[] | null>(null);
  const [colors, setColors] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans?pageSize=80`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setJellys(data.items);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBeans();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (sortQuery: string) => {
    setSortQuery(sortQuery);
  };

  const clearQuery = () => {
    setSearchQuery("");
  };

  if (jellys === null) {
    return <div>Loading...</div>;
  }

  const allColors = jellys.flatMap((jelly) => jelly.colorGroup);
  const uniqueColors = Array.from(new Set(allColors));

  const handleColorGroupClick = (color: string) => {
    setColors(color);
  };
// console.log(jellys)

  const filteredJellys = colors
    ? jellys.filter((jelly) => jelly.colorGroup.includes(colors))
    : jellys;

  const lengthResults = filteredJellys.length;

  return (
    <div className="app">
      <Side
        handleSearch={handleSearch}
        handleSortChange={handleSortChange}
        uniqueColors={uniqueColors}
        handleColorGroupClick={handleColorGroupClick}
      />
      <div className="main">
        {searchQuery && (
          <div className="results">
            <p>
              Your search on <span>{searchQuery}</span> has provided{" "}
              {lengthResults} results
            </p>
            <button className="results__clear" onClick={clearQuery}>
              Clear Search
              <CloseIcon className="results__icon" />
            </button>
          </div>
        )}
        <div className="beans">
          <Beans searchQuery={searchQuery} sortQuery={sortQuery} jellys={filteredJellys} />
        </div>
      </div>
    </div>
  );
};

export default App;
