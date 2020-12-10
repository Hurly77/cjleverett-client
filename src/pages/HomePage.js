import React from 'react'
import SiteBar from '../containers/SiteBar'
import About from '../containers/About'
import { Container, makeStyles, withStyles } from '@material-ui/core';
import Skills from '../containers/Skills';
import Projects from '../components/projects/Projects'

const useStyles = makeStyles({
  root: {
    zIndex: 1000,
    borderRadius: '5px',
    position: 'relative',
    backgroundColor: '#fbfbff'
  }
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
      <Container className={obj.root}>
      <About prop={classes.toolbar} />
      </Container>
      <Skills />
      <Projects prop={classes.toolbar}/>
    </div>
  )
}

export default withStyles(styles)(HomePage)
