// src/App.js
import React, { useState } from 'react';
import './App.css';
import Projects from './Projects';
import Users from './Users';
import ChatsTags from './ChatsTags';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <div className="blue-half">
        <h1 className="header">vretail</h1>
        <div className="button-container">
          <button
            className={`oval-button ${activeTab === 'projects' && 'active'}`}
            onClick={() => handleTabClick('projects')}
          >
            Projects
          </button>
          <button
            className={`oval-button ${activeTab === 'users' && 'active'}`}
            onClick={() => handleTabClick('users')}
          >
            Users
          </button>
          <button
            className={`oval-button ${activeTab === 'chatsTags' && 'active'}`}
            onClick={() => handleTabClick('chatsTags')}
          >
            Chats & Tags
          </button>
        </div>
      </div>
      <div className="white-half">
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'users' && <Users />}
        {activeTab === 'chatsTags' && <ChatsTags />}
      </div>
    </div>
  );
}

export default App;
