import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core/styles'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

export default class SiteBar extends Component {  
  render() {
    const classes = makeStyles({
      root: {
        background: '#0b4f6c',
      },
    })

    return (
      <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Logo />
        <Menu />
      </Toolbar>
    </AppBar>
    )
  }
}
