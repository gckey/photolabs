import React, { useCallback, useState } from 'react';

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorited, toggleFavorite }) {

  const handleFavClick = () => {
    toggleFavorite();
    console.log(`Image is now ${isFavorited ? 'unfavorited' : 'favorited'}`);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon
          selected={isFavorited}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;