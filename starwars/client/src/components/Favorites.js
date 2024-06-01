// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/favorites');
//         setFavorites(response.data.characterUrls);  // Пример для персонажей
//       } catch (error) {
//         console.error('Error fetching favorites:', error);
//       }
//     };

//     fetchFavorites();
//   }, []);

//   return (
//     <div>
//       <h1>Favorites</h1>
//       {favorites.map((url, index) => (
//         <div key={index}>
//           <p>{url}</p>  // Просто отображаем URL, нужно доработать для получения деталей по URL
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;
