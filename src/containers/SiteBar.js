import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

export default class SiteBar extends Component {  
  render() {
    return (
      <AppBar position="fixed">
      <Toolbar>
        <Logo />
        <Menu />
      </Toolbar>
    </AppBar>
    )
  }
}
