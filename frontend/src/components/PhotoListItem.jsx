import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  /* Insert React */
  return (
    <div className="PhotoListItem">
      <img className="photoURL" src={sampleDataForPhotoListItem.imageSource} />
      <img className="profile_image" src={sampleDataForPhotoListItem.profile} />
      <h3 className="photographer_username">{sampleDataForPhotoListItem.username}</h3>
      <h3 className="photo_location">{sampleDataForPhotoListItem.location.city} {sampleDataForPhotoListItem.location.country}</h3>
    </div>
  );
};

export default PhotoListItem;
