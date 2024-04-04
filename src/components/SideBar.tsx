import React from "react";
import Search from "./Search";

interface Props {
  handleSearch: (query: string) => void;
  handleSortChange: (sortQuery: string) => void;
  uniqueColors: string[];
  handleColorGroupClick: (color: string) => void;
}

const SideBar: React.FC<Props> = ({
  handleSearch,
  handleSortChange,
  uniqueColors,
  handleColorGroupClick,
}) => {
  return (
    <div className="side">
      <Search onSearch={handleSearch} onSortChange={handleSortChange} />

      <div className="tags">
        <p className="tags__p">Sort by color</p>
        {uniqueColors.map((color) => (
          <span
            key={color}
            className="tag"
            onClick={() => handleColorGroupClick(color)}
          >
            {color}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
