import React from 'react';
import './App.scss';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation

const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
