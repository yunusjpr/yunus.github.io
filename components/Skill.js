import React from 'react'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

const Skill = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 1000, maxHeight: '450px', overflowY: 'auto' }}>
      <ListItem>
        <ListItemText primary="NodeJs Framework" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Next Js" src="/icons/next-js-icon.png" />
        </ListItemAvatar>
        <ListItemText primary="Next Js" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="React Js" src="/icons/react-js-icon.png" />
        </ListItemAvatar>
        <ListItemText primary="React Js" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Express Js" src="/icons/express-js-icon.png" />
        </ListItemAvatar>
        <ListItemText primary="Express Js" />
      </ListItem>
      <ListItem></ListItem>
      <Divider/>
      <ListItem></ListItem>
      <ListItem>
        <ListItemText primary="PHP Framework" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Laravel" src="/icons/laravel-icon.jpeg" />
        </ListItemAvatar>
        <ListItemText primary="Laravel" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Codeigniter" src="/icons/codeigniter-icon.svg" />
        </ListItemAvatar>
        <ListItemText primary="Codeigniter" />
      </ListItem>
      <ListItem></ListItem>
      <Divider/>
      <ListItem></ListItem>
      <ListItem>
        <ListItemText primary="Database" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="MongoDB" src="/icons/mongodb-icon.png" />
        </ListItemAvatar>
        <ListItemText primary="MongoDB" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="PostgreSQL" src="/icons/postgres-icon.png" />
        </ListItemAvatar>
        <ListItemText primary="PostgreSQL" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="MySQL" src="/icons/mysql-icon.png" />
        </ListItemAvatar>
        <ListItemText primary="MySQL" />
      </ListItem>
    </List>
  )
}

export default Skill;