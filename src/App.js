import React from 'react';
import './App.css';
import GlobalHeader from './components/globalHeader';
import Poll from './components/Poll';
import Tabset from './components/tabset';
import Post from './components/post';
import Question from './components/question';
import FeedItem from './components/feedItem';

function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <div className="width-tabs center-horz">
        <Tabset 
          tabs={[
          <Post label="Post" />,
          <Question label="Question" />,
          <Poll label="Poll" />
          ]}
        />
        <ul className="pvl phm list-plain list-horz bg-white">
          <li><FeedItem /></li>
          <li><FeedItem /></li>
          <li><FeedItem /></li>
          <li><FeedItem /></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
