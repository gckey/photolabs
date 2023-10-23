import { useReducer } from 'react';

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
  //When the action FAV_PHOTO_ADDED is dispatched, we take the current list of favorite photos (stored in state.favPhotos) and add the new favorite photo (action.payload) to the end of the array.Then, we create a new state object that's the same as the current state, but with the favPhotos array replaced by our new array of favorite photos.
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        /* insert logic */
        /* insert all relevant actions as case statements*/
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, action.payload.id]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(id => id !== action.payload.id)
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.selectedPhoto
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        modal: action.payload.modal
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  //The dispatch function from useReducer is used to dispatch actions, which are then handled by the reducer function
  const [state, dispatch] = useReducer(reducer, {
    //initial states
    modal: false, //state that manages modal visibility
    selectedPhoto: null, //state to track the currently selected photo
    favoritedPhotos: [] //state to manage an array of photo IDs that have been liked
  });

  //Func that updates the selectedPhoto state and toggles the value of modal
  const toggleModal = (selectedPhoto) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modal: !state.modal } });
  };

  const closeToggleModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modal: false } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto: null } });
  };

  //Func that toggles the favoriting of a photo
  const toggleFavorite = (photoId) => {
    dispatch({ 
      type: state.favoritedPhotos.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      payload: { id: photoId }
  });
};

  return {
    state,
    toggleModal,
    closeToggleModal,
    toggleFavorite
  };
};

export default useApplicationData;