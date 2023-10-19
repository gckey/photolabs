import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = () => {
  //Global state to track favorited photoIDs
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    console.log(photoId);
    //check if favoritedPhotos array already contains the given photo id
    if (favoritedPhotos.includes(photoId)) {
      //create a new array that filters out the photoId
      const favoritedPhotosTemp = [...favoritedPhotos].filter(id => id !== -photoId);
      //update the state
      setFavoritedPhotos(favoritedPhotosTemp);
      return;
    }
    setFavoritedPhotos(prev => [...prev, photoId]);
  }

  return (
    <>
      <TopNavigation 
        favoritedCount={favoritedPhotos.length}
      />
      <div className="home-route">
        <PhotoList
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </>
  );

};

export default HomeRoute;