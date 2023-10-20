import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {
  //state that manages modal visibility
  const [modal, setModal] = useState(false);//false we need to see only when image is clicked i.e true

  const toggleModal = () => {
    setModal(!modal);
  }

  const closeToggleModal = () => {
    setModal(false); 
   
  }

  return (
    <div className="App">
      <HomeRoute 
        toggleModal={toggleModal}
        closeToggleModal={closeToggleModal}
      />
      {/* {modal && <PhotoDetailsModal modal={modal} />} short circuit opp, render the modal conditionally, if it's true return modal */}
      
      {modal && <PhotoDetailsModal closeToggleModal={closeToggleModal} />} 
      {/*render the modal conditionally*/}
    </div>
  );
};

export default App;
