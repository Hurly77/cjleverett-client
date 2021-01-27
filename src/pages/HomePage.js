import React from 'react'
import SiteBar from '../containers/SiteBar'
import About from '../containers/About'
import { Container, makeStyles, withStyles } from '@material-ui/core';
import Skills from '../containers/Skills';
import Projects from '../components/projects/Projects'
import ContactForm from '../components/contact/ContactForm'

const useStyles = makeStyles({
  root: {
    zIndex: 1000,
    borderRadius: '5px',
    position: 'relative',
    backgroundColor: '#fbfbff',
    '& img': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '80%'
    },
  },
 
})

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});


const HomePage = (props) => {
  const obj = useStyles()
  const { classes } = props;
console.log(props)
  return (
    <div>
      <SiteBar />
      <About prop={classes.toolbar} />
      <Container className={obj.root}>
      <img src={process.env.PUBLIC_URL + "Skills.png"} alt="1"/>
      </Container>
      <Skills />
      <Projects prop={classes.toolbar}/>
      <ContactForm />
    </div>
  )
}

export default withStyles(styles)(HomePage)
