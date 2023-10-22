import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from '../mocks/photos';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photo, closeToggleModal, favoritedPhotos, toggleFavorite, toggleModal } = props;

  const handleCloseModalClick = () => {
    closeToggleModal();
    props.closeToggleModal();
    console.log("Modal close btn clicked");
  }

  console.log("Selected Photo:", photo);//Get selected all the details of the photo

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"
          onClick={handleCloseModalClick}
        />
      </button>
      <div className="photo-details-modal__images">

      {/* render PhotoFavButton component, passing it props */}
        <PhotoFavButton
          // "isFavorited" is set to true if the photo.id is included in favoritedPhotos, indicating that this photo is liked by user
          isFavorited={favoritedPhotos.includes(photo.id)} 
          toggleFavorite={() => toggleFavorite(photo.id)}//pass func that toggles the favoriting of the current photo
          favoritedPhotos={favoritedPhotos}
        />

        <img className="photo-details-modal__image"
          src={photo.urls.full}
        />
        <section className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile"
            src={photo.user.profile} />
          <div className="photo-details-modal__photographer-info">
            <span>{photo.user.name}</span>
            <br />
            <span className="photo-details-modal__photographer-location">
              {` ${photo.location.city}, ${photo.location.country}`}
            </span>
          </div>
        </section>
        <div className="photo-details-modal__header"><h3>Similar Photos</h3></div>
      </div>

      {/* render the PhotoList component, passing it the props */}
      <PhotoList
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        toggleModal={toggleModal}
      />
    </div>
  )
};

export default PhotoDetailsModal;
