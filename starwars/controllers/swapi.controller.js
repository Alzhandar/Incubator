const axios = require('axios');
const SWAPI_BASE_URL='https://swapi.dev/api';

const getPlanets = async (req,res) =>{
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/planets`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching planets" });
  }
};

const getCharacters = async (req,res) =>{
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/people`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching characters" });
  }
};

const getStarships = async (req,res) =>{
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/starships`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching starships" });
  }
};

const Favorite = require('../models/Favorite');

const addFavorite = async (req,res) =>{
  const { userId, characterUrl } = req.body;
  try {
    let favorite = await Favorite.findOne({ userId });
    if (!favorite) {
      favorite = new Favorite({ userId, characterUrls: [characterUrl] });
    } else {
      favorite.characterUrls.push(characterUrl);
    }
    await favorite.save();
    res.status(200).json(favorite);
  } catch (error) {
    res.status(500).json({ message: "Error saving favorite" });
  }
};

const getFavorites = async (req,res) =>{
  const { userId } = req.query;
  try {
    const favorites = await Favorite.findOne({ userId });
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorites" });
  }
};

module.exports ={
  getPlanets,
  getCharacters,
  getStarships,
  addFavorite,
  getFavorites
};

