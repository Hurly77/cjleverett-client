import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import WebFont from 'webfontloader'
import {makeStyles} from '@material-ui/core/styles'

WebFont.load({
  google: {
    families: ['MuseoModerno', 'cursive']
  }
})

const useStyle = makeStyles({
  root: {
    background: '#0b4f6c',
  },
  MenuIcon: { 
    color: '#fbfbff',
  },
  Home: {
    fontFamily: 'MuseoModerno, cursive', 
    color: 'inherit',
  }
})


const SiteBar = () => {
  const classes = useStyle()
  return (
    <AppBar position="absolute" className={classes.root}>
    <Toolbar>
      <IconButton className={classes.Home}>
        CJL
      </IconButton>

      <IconButton className={classes.MenuIcon}>
      <MenuIcon />
      </IconButton>

    </Toolbar>
  </AppBar>
  )
}

export default SiteBar