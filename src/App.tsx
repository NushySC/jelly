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
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortQuery, setSortQuery] = useState<string>("");
  const [jellys, setJellys] = useState<BeanItem[] | null>(null);


  // State to store the selected ingredient
  // const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);


  // Flatten the ingredients from all jellys into a single array
  const allIngredients = jellys?.flatMap(jelly => jelly.ingredients) ?? [];


  // Remove duplicates to get unique ingredients
  const uniqueIngredients = Array.from(new Set(allIngredients));

  // Function to filter jellys based on the selected ingredient
  const handleIngredientClick = (ingredient: string) => {
    setSelectedIngredient(ingredient);
  };

  // Filter jellys based on the selected ingredient, or show all jellys if no ingredient is selected
  const filteredJellys = selectedIngredient
  ? jellys?.filter(jelly => jelly.ingredients.includes(selectedIngredient)) ?? []
  : jellys ?? [];


    useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans?pageSize=50`,
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
  

  // console.log(jellys[1].ingredients)
  const filteredProducts = jellys.filter((jelly) =>
    jelly.flavorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    jelly.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase()))
    )

  const lengthResults = filteredProducts.length;

  return (
    <div className="app">

      <Side handleSearch={handleSearch} handleSortChange={handleSortChange} />
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
        <div className="tags">
        {/* Render tags for unique ingredients */}
        {uniqueIngredients.map(ingredient => (
          <span
            key={ingredient}
            className={`tag ${selectedIngredient === ingredient ? 'selected' : ''}`}
            onClick={() => handleIngredientClick(ingredient)}
          >
            {ingredient}
          </span>
        ))}
      </div>
          <Beans
            searchQuery={searchQuery}
            sortQuery={sortQuery}
            jellys={filteredJellys}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
