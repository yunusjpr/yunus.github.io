import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Avatar, Button, ClickAwayListener, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import { BeachAccess, Email, GitHub, LinkedIn, MapsHomeWork, Phone, WhatsApp, Work } from '@mui/icons-material'
import Router from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openEducation, setOpenEducation] = React.useState(false);
  const [openSkill, setOpenSkill] = React.useState(false);
  const [openExperience, setOpenExperience] = React.useState(false);

  const profile = (
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
      <ListItemButton onClick={() => window.open('https://wa.me/6289666406065', '_blank')}>
        <ListItemIcon>
          <WhatsApp />
        </ListItemIcon>
        <ListItemText secondary="089666406065" />
      </ListItemButton>
      <ListItemButton onClick={() => window.open('https://linkedin.com/in/mohyunus', '_blank')}>
        <ListItemIcon>
          <LinkedIn />
        </ListItemIcon>
        <ListItemText secondary="Moh Yunus" />
      </ListItemButton>
      <ListItemButton onClick={() => window.open('https://github.com/yunusjpr', '_blank')}>
        <ListItemIcon>
          <GitHub />
        </ListItemIcon>
        <ListItemText secondary="yunusjpr" />
      </ListItemButton>
    </List>
  );
  const education = (
    <></>
  );
  const skill = (
    <></>
  );
  const experience = (
    <></>
  );

  return (
    <>
      <Head>
        <title>Moh Yunus</title>
        <meta name="description" content="Curiculum Vitae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/digitalin.png" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
          <div className={styles.grid}>
            <div></div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div className={styles.profilePicture}>
                <Image
                  src="/img/yunus.png"
                  alt="yunus"
                  width={150}
                  height={150}
                  priority
                />
              </div>
            </div>
            <div style={{padding: "30px"}}>
              <h1>
                MOH YUNUS
              </h1>
              <h3>
                Software Engineer
              </h3>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <div style={{textAlign: 'center', padding: '5px'}}>
            <ClickAwayListener onClickAway={() => setOpenProfile(false)}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={() => setOpenProfile(false)}
                  open={openProfile}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={profile}
                  placement="top-start"
                >
                  <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenProfile(!openProfile)}>Profile</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </div>
          <div style={{textAlign: 'center', padding: '5px'}}>
            <ClickAwayListener onClickAway={() => setOpenEducation(false)}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={() => setOpenEducation(false)}
                  open={openEducation}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={education}
                  placement="top"
                >
                <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenEducation(true)}>Education</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </div>
          <div style={{textAlign: 'center', padding: '5px'}}>
            <ClickAwayListener onClickAway={() => setOpenSkill(false)}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={() => setOpenSkill(false)}
                  open={openSkill}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={skill}
                  placement="top"
                >
                <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenSkill(true)}>Skill</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </div>
          <div style={{textAlign: 'center', padding: '5px'}}>
            <ClickAwayListener onClickAway={() => setOpenExperience(false)}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={() => setOpenExperience(false)}
                  open={openExperience}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={experience}
                  placement="top-end"
                >
                <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenExperience(true)}>Experience</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </div>
        </div>
      </main>
    </>
  )
}
