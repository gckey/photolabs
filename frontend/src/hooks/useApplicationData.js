import { useReducer, useEffect } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS"
}

const initialState = {
  favoritedPhotos: [],
  selectedPhoto: null,
  modal: false, 
  photoData: [],
  topicData: []
};

const useApplicationData = () => {
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => // console.log(data); // Log the response
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })); // Dispatch the photo data to state
  }, []); // Empty dependency array means this effect runs once on component mount

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

function reducer(state, action) {
  switch (action.type) {
  //When the action FAV_PHOTO_ADDED is dispatched, we take the current list of favorite photos (stored in state.favPhotos) and add the new favorite photo (action.payload) to the end of the array.Then, we create a new state object that's the same as the current state, but with the favPhotos array replaced by our new array of favorite photos
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
    
    case ACTIONS.SET_PHOTO_DATA:
    return { 
      ...state, 
      photoData: action.payload 
    };
    case ACTIONS.SET_TOPIC_DATA:
      return { 
        ...state, 
        topicData: action.payload 
    };
  default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

//The dispatch function from useReducer is used to dispatch actions, which are then handled by the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  //Func that updates the selectedPhoto state and toggles the value of modal
  const toggleModal = (selectedPhoto) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modal: true }});
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