import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <span>{props.username}</span>
          <br />
          <span className="photo-list__user-location">{` ${props.city}, ${props.country}`}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
