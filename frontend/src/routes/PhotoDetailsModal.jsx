import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, closeToggleModal } = props;

  const handleCloseModalClick = () => {
    closeToggleModal();
    props.closeToggleModal();
    console.log("Modal close btn clicked");
  }

  console.log("Selected Photo:", photo);//Get selected all the details of the photo

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleCloseModalClick}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
