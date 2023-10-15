import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation

const App = () => {
  //create an array with 3 elements and populate the array
  const photos = new Array(3).fill(sampleDataForPhotoListItem);
  return (
    <div className="App">
      {photos.map((data, index) => ( //map to iterate each elts in photos
        <div key={index}>
          <PhotoFavButton />
          <PhotoListItem
            id={data.id}
            city={data.location.city}
            country={data.location.country}
            imageSource={data.imageSource}
            username={data.username}
            profile={data.profile}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
