import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Search/Search'; 
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/characters');
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchCharacters();
  },[]);

  const handleSearch = (searchTerm) =>{
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };
  return (
    <div>
      <h1 className="title">Characters</h1>
      <Search onSearch={handleSearch} />
      <div className="container">
        {filteredCharacters.map((character, index) => (
          <div key={index} className="card">
            <h3 className="name">{character.name}</h3>
            <div className="details">
              <p><span className="label">Height:</span> {character.height} cm</p>
              <p><span className="label">Mass:</span> {character.mass} kg</p>
              <p><span className="label">Hair Color:</span> {character.hair_color}</p>
              <p><span className="label">Skin Color:</span> {character.skin_color}</p>
              <p><span className="label">Birth Year:</span> {character.birth_year}</p>
              <p><span className="label">Gender:</span> {character.gender}</p>
              <p><span className="label">Homeworld:</span> <a href={character.homeworld} className="link">Link</a></p>
              <p><span className="label">Films:</span> {character.films.map((film, i) =>(
                <a key={i} href={film} className="link">Film {i + 1}</a>
              ))}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Characters;
