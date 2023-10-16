import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  const topicItems = sampleDataForTopicList.map((item) => {
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
