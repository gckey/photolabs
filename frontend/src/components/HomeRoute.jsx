import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

const HomeRoute = ({ toggleModal, closeToggleModal, toggleFavorite, favoritedPhotos, photoData, fetchPhotosByTopic, topicData }) => { //pass down props to HomeRoute.jsx
  return (
    <>
      <TopNavigation
        favoritedCount={favoritedPhotos.length}
        fetchPhotosByTopic={fetchPhotosByTopic}
        topicData={topicData}
      />
      <div className="home-route">
        <PhotoList
          photoData={photoData}
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