import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button, ClickAwayListener } from '@mui/material'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Profile from '@/components/Profile'
import Education from '@/components/Education'

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const Home = () => {
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openEducation, setOpenEducation] = React.useState(false);
  const [openSkill, setOpenSkill] = React.useState(false);
  const [openExperience, setOpenExperience] = React.useState(false);

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
                <LightTooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={() => setOpenProfile(false)}
                  open={openProfile}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={(<Profile/>)}
                  placement="top"
                >
                  <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenProfile(!openProfile)}>Profile</Button>
                </LightTooltip>
              </div>
            </ClickAwayListener>
          </div>
          <div style={{textAlign: 'center', padding: '5px'}}>
            <ClickAwayListener onClickAway={() => setOpenEducation(false)}>
              <div>
                <LightTooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={() => setOpenEducation(false)}
                  open={openEducation}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={(<Education/>)}
                  placement="top"
                >
                <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenEducation(!openEducation)}>Education</Button>
                </LightTooltip>
              </div>
            </ClickAwayListener>
          </div>
          <div style={{textAlign: 'center', padding: '5px'}}>
            <ClickAwayListener onClickAway={() => setOpenSkill(false)}>
              <div>
                <LightTooltip
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
                <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenSkill(!openSkill)}>Skill</Button>
                </LightTooltip>
              </div>
            </ClickAwayListener>
          </div>
          <div style={{textAlign: 'center', padding: '5px'}}>
            <ClickAwayListener onClickAway={() => setOpenExperience(false)}>
              <div>
                <LightTooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={() => setOpenExperience(false)}
                  open={openExperience}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={experience}
                  placement="top"
                >
                <Button className={styles.code} style={{minWidth: '200px'}} variant="outlined" onClick={() => setOpenExperience(!openExperience)}>Experience</Button>
                </LightTooltip>
              </div>
            </ClickAwayListener>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home