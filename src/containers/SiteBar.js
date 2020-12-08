import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core/styles'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

const useStyle = makeStyles({
  root: {
    background: '#0b4f6c',
  },
})


const SiteBar = () => {
  const classes = useStyle()
  return (
    <AppBar position="absolute" className={classes.root}>
    <Toolbar>
      <Logo />
      <Menu />
    </Toolbar>
  </AppBar>
  )
}

export default SiteBar