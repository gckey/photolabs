import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ favoritedCount, fetchPhotosByTopic, topicData }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topicData={topicData}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <FavBadge 
        favoritedCount={favoritedCount} 
      />
    </div>
  )
}

export default TopNavigation;