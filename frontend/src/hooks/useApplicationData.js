const { useState } = require("react");
const useApplicationData = () => {
  const [state, setState] = useState({
    //initial states
    modal: false, //state that manages modal visibility
    selectedPhoto: null, //state to track the currently selected photo
    favoritedPhotos: [], //state to manage an array of photo IDs that have been liked
  });

  //Func that updates the selectedPhoto state and toggles the value of modal
  const toggleModal = (selectedPhoto) => {
    setState(prevState => ({
      ...prevState,
      selectedPhoto,
      modal: !prevState.modal,
    }));
  };

  const closeToggleModal = () => {
    setState(prevState => ({
      ...prevState,
      modal: false,
      selectedPhoto: null,
    }));
  };

  //Func that toggles the favoriting of a photo
  const toggleFavorite = (photoId) => {
    setState(prevState => ({
      ...prevState,
      favoritedPhotos: prevState.favoritedPhotos.includes(photoId)
        ? prevState.favoritedPhotos.filter(id => id !== photoId)
        : [...prevState.favoritedPhotos, photoId],
    }));
  };

  return {
    state,
    toggleModal,
    closeToggleModal,
    toggleFavorite
  };
};

export default useApplicationData;