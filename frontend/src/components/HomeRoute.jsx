import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ toggleModal, closeToggleModal, toggleFavorite, favoritedPhotos }) => { //pass down props to HomeRoute.jsx
  
  return (
    <>
      <TopNavigation 
        favoritedCount={favoritedPhotos.length}
      />
      <div className="home-route">
        <PhotoList
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
          toggleModal={toggleModal} //Pass down the func
          closeToggleModal={closeToggleModal}
        />
      </div>
    </>
  );

};

export default HomeRoute;