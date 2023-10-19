import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favoritedCount }) => {
  return (
    <>
      <div className="fav-badge">
        <FavIcon 
          displayAlert={!!isFavPhotoExist}
          selected={favoritedCount > 0}
        />
        {favoritedCount > 0 && <span>{favoritedCount}</span>}
      </div>
    </>
  );

};

export default FavBadge;