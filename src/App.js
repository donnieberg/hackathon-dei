import React from 'react';
import './App.css';

import GlobalHeader from './components/globalHeader';
import SidePanel from './components/sidePanel';

import Poll from './components/poll';
import Tabset from './components/tabset';
import Post from './components/post';
import Question from './components/question';
import FeedItem from './components/feedItem';

function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <div className="width-main center-horz cf">
        <div className="fl width-tabs prl">
          <Tabset 
            tabs={[
            <Post label="Post" />,
            <Question label="Question" />,
            <Poll label="Poll" />
            ]}
          />

          <div className="brt-s pam fw-bold slds-text-title_caps bg-white">Feed</div>
          <ul className="brb-s pvl phm list-plain list-horz bg-white">
            <li><FeedItem /></li>
            <li><FeedItem /></li>
            <li><FeedItem /></li>
            <li><FeedItem /></li>
          </ul>
        </div>
        <SidePanel />
      </div>
    </div>
  );
}

export default App;
