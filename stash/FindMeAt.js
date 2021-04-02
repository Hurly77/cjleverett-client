import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
   '& > svg': {
     color: '#fbfbfb',
     margin: theme.spacing(2)
   },
   marginTop: '15px'
  },
}));

const FindMeAt = () => {
 const classes = useStyles()
  return (
    <div className={classes.root}>
      <IconButton onClick={() => window.open("https://github.com/Hurly77", "_blank")}>
        <GitHubIcon  fontSize="large" />
      </IconButton>
      <IconButton onClick={() => window.open("https://twitter.com/CameronLeveret2", "_blank")} >
        <TwitterIcon fontSize="large" />
      </IconButton>
      
      <IconButton onClick={() => window.open("https://www.linkedin.com/in/cameron-leverett-a8810b18a/", "_blank")}>
        <LinkedInIcon fontSize="large" />
      </IconButton>
     
      <IconButton onClick={() => window.open("https://www.instagram.com/cjaylevey/", "_blank")}>
        <InstagramIcon fontSize="large" />
      </IconButton>
      
      <IconButton onClick={() => window.open("https://www.youtube.com/channel/UC7Y4AILqcwLaYTOB5PNSxpA", "_blank")}>
        <YouTubeIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default FindMeAt