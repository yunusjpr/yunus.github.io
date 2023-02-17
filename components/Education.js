import React from 'react'
import { Email, GitHub, LinkedIn, MapsHomeWork, WhatsApp } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

const Education = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 1000 }}>
      <ListItemButton>
        <ListItemText 
          primary={
            <React.Fragment>
              <Typography
                component="p"
              >
                Universitas Komputer Indonesia
              </Typography>
              {"Bandung"}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              {"Teknik Informatika"}
              <Typography
                component="p"
                variant="body2"
                color="text.primary"
              >
                2015 - 2019
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText 
          primary={
            <React.Fragment>
              <Typography
                component="p"
              >
                SMK N 1 Lemahabang
              </Typography>
              {"Cirebon"}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              {"Teknik Komputer dan Jaringan"}
              <Typography
                component="p"
                variant="body2"
                color="text.primary"
              >
                2007 - 2010
              </Typography>
            </React.Fragment>
          } />
      </ListItemButton>
    </List>
  )
}

export default Education;