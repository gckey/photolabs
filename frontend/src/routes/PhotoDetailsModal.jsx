import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const handleCloseModalClick = () => {
    props.closeToggleModal();
    console.log("Modal close btn clicked");
  }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleCloseModalClick}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
