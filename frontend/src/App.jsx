import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {

  //state that manages modal visibility
  const [modal, setModal] = useState(false);//false we need to see only when image is clicked i.e true
  const [selectedPhoto, setSelectedPhoto] = useState(null); //state to track the currently selected photo
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);//state to manage an array of photo IDs that have been liked

  //Func that updates the selectedPhoto state and toggles the value of modal
  const toggleModal = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);
    setModal(!modal);
  }

  const closeToggleModal = () => {
    setModal(false);//closes the modal by setting modal to false
    setSelectedPhoto(null); //reset selected photo
  }
  //Func that toggles the favoriting of a photo
  const toggleFavorite = (photoId) => {
    // If the photoId is already in favoritedPhotos, it filters it down and effectively un-favoriting it
    if (favoritedPhotos.includes(photoId)) {
      const favoritedPhotosTemp = favoritedPhotos.filter(id => id !== photoId);
      setFavoritedPhotos(favoritedPhotosTemp);
    } else {
      setFavoritedPhotos(prev => [...prev, photoId]);//add the photo to the list of favorited photos
    }
  }

  return (
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal} //func passed down to HomeRoute
        closeToggleModal={closeToggleModal} //func passed down to HomeRoute
        favoritedPhotos={favoritedPhotos}//array of favorited photo IDs passed down to HomeRoute.jsx
        toggleFavorite={toggleFavorite}//func passed down to HomeRoute
      />
      {/* {modal && <PhotoDetailsModal modal={modal} />} short circuit opp, render the modal conditionally, if it's true return modal */}

      {/*render PhotoDetailsModal with various props */}
      {modal && <PhotoDetailsModal
        photo={selectedPhoto}
        closeToggleModal={closeToggleModal}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
      />}{/*render the modal conditionally */}
    </div>
  );
};

export default App;
