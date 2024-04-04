import React from "react";
import Search from "./Search"; // Assuming Search component is located in the same directory

interface Props {
  handleSearch: (query: string) => void; // Define the type for handleSearch function
  handleSortChange: (sortQuery: string) => void; // Define the type for handleSortChange function
}

const Side: React.FC<Props> = ({ handleSearch, handleSortChange }) => {
  return (
    <div className="side">
      <Search onSearch={handleSearch} onSortChange={handleSortChange} />
    </div>
  );
};

export default Side;
