import React from "react";
import "../styles/HomeRoute.scss";
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

const HomeRoute = () => {

  return (
    <>
      {/* <div className="home-route"> */}
      <div className="top-nav-bar">
        <TopNavigation />
        <TopicList />
        <FavBadge />
      </div>
      <div className="home-route">
      {/* <PhotoList /> */}
      </div>
      <PhotoList />
    </>
  );

};

export default HomeRoute;