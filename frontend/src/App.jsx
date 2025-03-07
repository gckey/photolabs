import React from "react";
import "./App.scss";
import HomeRoute from "components/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state,
    toggleModal,
    closeToggleModal,
    toggleFavorite,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal} //func passed down to HomeRoute
        closeToggleModal={closeToggleModal} //func passed down to HomeRoute
        favoritedPhotos={state.favoritedPhotos}//array of favorited photo IDs passed down to HomeRoute.jsx
        photoData={state.photoData}
        topicData={state.topicData}
        toggleFavorite={toggleFavorite}//func passed down to HomeRoute
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {/* {modal && <PhotoDetailsModal modal={modal} />} short circuit opp, render the modal conditionally, if it's true return modal */}

      {/*render PhotoDetailsModal with various props */}
      {state.modal && <PhotoDetailsModal
        state={state}
        photo={state.selectedPhoto}
        closeToggleModal={closeToggleModal}
        favoritedPhotos={state.favoritedPhotos}
        toggleFavorite={toggleFavorite}
        toggleModal={toggleModal}
      />}{/*render the modal conditionally */}
    </div>
  );
};

export default App;
