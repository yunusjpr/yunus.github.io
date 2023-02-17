import React from 'react'
import { Email, GitHub, LinkedIn, MapsHomeWork, OpenInNew, WhatsApp } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const Profile = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 1000 }}>
      <ListItem>
        <ListItemText
          classes={{
            secondary: {
              color: '#ffffff'
            }
          }}
          // primary="Resume"
          secondary="I am a software engineer with strong passion to learn new things, familiar with a few Node JS and PHP frameworks, and I have developed a production system using Next Js, React JS and Laravel. I enjoy gardening on my spare time."
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <MapsHomeWork />
        </ListItemIcon>
        <ListItemText secondary="Cluster Seroja II No.2, Graha Rancamanyar, Kec. Baleendah, Kab. Bandung" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Email />
        </ListItemIcon>
        <ListItemText secondary="jpryunus@gmail.com" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="open" onClick={() => window.open('https://wa.me/6281322447244', '_blank')}>
            <OpenInNew />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton onClick={() => window.open('https://wa.me/6281322447244', '_blank')}>
          <ListItemIcon>
            <WhatsApp />
          </ListItemIcon>
          <ListItemText secondary="081322447244" />
        </ListItemButton>
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="open" onClick={() => window.open('https://linkedin.com/in/mohyunus', '_blank')}>
            <OpenInNew />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton onClick={() => window.open('https://linkedin.com/in/mohyunus', '_blank')}>
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
          <ListItemText secondary="Moh Yunus" />
        </ListItemButton>
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="open" onClick={() => window.open('https://github.com/yunusjpr', '_blank')}>
            <OpenInNew />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton onClick={() => window.open('https://github.com/yunusjpr', '_blank')}>
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
          <ListItemText secondary="yunusjpr" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default Profile;