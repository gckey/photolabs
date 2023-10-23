import React from "react";

import "../styles/TopicList.scss";
import topicData from "../mocks/topics.js";
import TopicListItem from "./TopicListItem";

const TopicList = () => {
  const topicItems = topicData.map((item) => {
    return (
      <TopicListItem
        key={item.id}
        id={item.id}
        slug={item.slug}
        title={item.title}
      />
    );

  });
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topicItems}
    </div>
  );
};

export default TopicList;
