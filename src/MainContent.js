import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Users from './Users';
import ChatsTags from './ChatsTags';

const MainContent = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/projects" component={Projects} />
            <Route path="/users" component={Users} />
            <Route path="/chats-tags" component={ChatsTags} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MainContent;