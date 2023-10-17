import React from 'react';
import './App.scss';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

// Note: Rendering a single component to build components in isolation

const App = () => {
  return (
    <>
      <div className="App">
        <div className="top-nav-bar">
          <TopNavigation />
          <TopicList />
          <FavBadge />
        </div>
      </div>
      <PhotoList />
    </>
  );
};

export default App;
