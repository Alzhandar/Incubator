import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import './Planets.css';  

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/planets');
        setPlanets(response.data.results);
        setFilteredPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = planets.filter(planet =>
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlanets(filtered);
  };

  return(
    <div>
      <h1 className="title">Planets</h1>
      <Search onSearch={handleSearch} />
      <div className="container">
        {filteredPlanets.map((planet, index) => (
          <div key={index} className="card">
            <h3 className="name">{planet.name}</h3>
            <p className="rotation">Rotation Period: {planet.rotation_period} hours</p>
            <p className="population">Population: {planet.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Planets;

