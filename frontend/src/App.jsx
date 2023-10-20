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

  return (
    <div className="App">
      <HomeRoute 
        toggleModal={toggleModal}
      />
      {modal && <PhotoDetailsModal modal={modal} />} {/*short circuit opp, render the modal conditionally, if it's true return modal*/}
    </div>
  );
};

export default App;
