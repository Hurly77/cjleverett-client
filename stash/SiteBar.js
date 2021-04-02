import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import PageLinks from '../components/nav/PageLinks'

export default class SiteBar extends Component {  
  render() {
    return (
      <AppBar position="fixed">
      <Toolbar>
        <PageLinks />
      </Toolbar>
    </AppBar>
    )
  }
}
