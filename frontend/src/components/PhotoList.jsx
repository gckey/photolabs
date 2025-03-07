import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ favoritedPhotos, toggleFavorite, toggleModal, photoData }) => {

  // mapping over an array of objects to produce an array of components.
  const photoItems = photoData.map((photo) => {
    
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo} //pass all the photo obj
        isFavorited={favoritedPhotos.includes(photo.id)}
        toggleFavorite={() => toggleFavorite(photo.id)}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        username={photo.user.username}
        city={photo.location.city}
        country={photo.location.country}
        toggleModal={toggleModal} //pass down the func
      />
    );
  });

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photoItems}
    </ul>
  );
};

export default PhotoList;
