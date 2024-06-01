import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '../../assets/icon.png';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="bar">
      <img src={SearchIcon} alt="Search" className="icon" />
      <input
        type="text"
        className="input"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;

