import React from "react";

import "../styles/TopicListItem.scss";
// import topics from '../mocks/topics';
import { TopicList } from 'components/TopicList';

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  title: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item top-nav-bar__topic-list">
      {/* Insert React */}
      <span className="topic-list__item">{props.title}</span>
      <i className="&:hover"></i>
    </div>
  );
};

export default TopicListItem;
