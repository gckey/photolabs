import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  // Define a state called 'isFavorited' and a function to update it named 'setIsFavorited'
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavClick = useCallback(() => {
    setIsFavorited(prevState => !prevState);// Toggle the state using the 'setIsFavorited' and the previous state value
    console.log(`Image is now ${isFavorited ? 'unfavorited' : 'favorited'}`);
  }, [isFavorited]);

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon
          selected={isFavorited}
          onClick={handleFavClick}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;