import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Starships.css';

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/starships');
        setStarships(response.data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };
    fetchStarships();
  }, []);
  return (
    <div>
      <h1 className="title">Starships</h1>
      <div className="container">
        {starships.map((starship, index) => (
          <div key={index} className="card">
            <h3 className="name">{starship.name}</h3>
            <div className="details">
              <p><span className="label">Model:</span> {starship.model}</p>
              <p><span className="label">Manufacturer:</span> {starship.manufacturer}</p>
              <p><span className="label">Cost in Credits:</span> {starship.cost_in_credits}</p>
              <p><span className="label">Length:</span> {starship.length} meters</p>
              <p><span className="label">Max Atmosphering Speed:</span> {starship.max_atmosphering_speed}</p>
              <p><span className="label">Crew:</span> {starship.crew}</p>
              <p><span className="label">Passengers:</span> {starship.passengers}</p>
              <p><span className="label">Cargo Capacity:</span> {starship.cargo_capacity}</p>
              <p><span className="label">Consumables:</span> {starship.consumables}</p>
              <p><span className="label">Hyperdrive Rating:</span> {starship.hyperdrive_rating}</p>
              <p><span className="label">MGLT:</span> {starship.MGLT}</p>
              <p><span className="label">Starship Class:</span> {starship.starship_class}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Starships;
