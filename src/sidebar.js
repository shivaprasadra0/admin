import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, People, Layers, Message } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Message />
        </ListItemIcon>
        <ListItemText primary="Chats & Tags" />
      </ListItem>
    </List>
  );
};

export default Sidebar;