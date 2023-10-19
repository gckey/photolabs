import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

const HomeRoute = () => {
  //Global state to track favorited photoIDs
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  
  const toggleFavorite = (photoId) => {
    console.log(photoId);
    //check if favoritedPhotos array already contains the given photo id
    if (favoritedPhotos.includes(photoId)) {
      //create a new array that filters out the photoId
      const favoritedPhotosTemp = [...favoritedPhotos].filter(id => id !== photoId);
      //update the state
      setFavoritedPhotos(favoritedPhotosTemp);
      return;
    }
    setFavoritedPhotos(prev => [...prev, photoId]);
  }

  return (
    <>
      {/* <div className="home-route"> */}
      <div className="top-nav-bar">
        <TopNavigation />
        <TopicList />
        <FavBadge />
      </div>
      <div className="home-route">
        <PhotoList
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
        />
      </div>
      {/* <PhotoList /> */}
    </>
  );

};

export default HomeRoute;