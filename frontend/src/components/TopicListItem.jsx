import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const handleTopicClick = () => {
    props.fetchPhotosByTopic(props.id);
  }

  return (
    <div className="topic-list__item top-nav-bar__topic-list" onClick={handleTopicClick}>
      {/* Insert React */}
      <span className="topic-list__item">{props.title}</span>
      <i className="&:hover"></i>
    </div>
  );
};

export default TopicListItem;
