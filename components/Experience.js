import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ExpandMore } from '@mui/icons-material';

const Experience = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1000, maxHeight: '450px', overflowY: 'auto' }}>
      <List>
        <ListItem>
          <ListItemText
            primary="Full Stack Engineer"
            primaryTypographyProps={{
              fontStyle: "italic"
            }}
            secondary={
              <React.Fragment>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Pusat Komando <br/> Dinas Ketahanan Pangan Jabar
                </Typography>
                <Typography
                  color="text.primary"
                  variant="body2"
                >
                  Jul 2022 - Present
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Software Engineer"
            primaryTypographyProps={{
              fontStyle: "italic"
            }}
            secondary={
              <React.Fragment>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  PT Sinergi Intra Giat · Freelance
                </Typography>
                <Typography
                  color="text.primary"
                  variant="body2"
                >
                  Apr 2021 - Dec 2022
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Frontend Developer"
            primaryTypographyProps={{
              fontStyle: "italic"
            }}
            secondary={
              <React.Fragment>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  PT Barrans Global Mandiri · Freelance
                </Typography>
                <Typography
                  color="text.primary"
                  variant="body2"
                >
                  Dec 2021 - Sep 2022
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Web Developer"
            primaryTypographyProps={{
              fontStyle: "italic"
            }}
            secondary={
              <React.Fragment>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  PT. Smooets Teknologi Outsourcing
                </Typography>
                <Typography
                  color="text.primary"
                  variant="body2"
                >
                  Dec 2019 - Jun 2022
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Staff Export"
            primaryTypographyProps={{
              fontStyle: "italic"
            }}
            secondary={
              <React.Fragment>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  PT. Sinergi Cargo Indonesia
                </Typography>
                <Typography
                  color="text.primary"
                  variant="body2"
                >
                  Jul 2013 - Jun 2017
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Staff Koperasi"
            primaryTypographyProps={{
              fontStyle: "italic"
            }}
            secondary={
              <React.Fragment>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  PT. Kwarsa Hexagon
                </Typography>
                <Typography
                  color="text.primary"
                  variant="body2"
                >
                  May 2010 - May 2013
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default Experience;