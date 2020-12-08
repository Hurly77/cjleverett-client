import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    color: 'inherit'
  }
})

const Menu = () => {
  const classes = useStyle()
  return (
    <IconButton className={classes.root}>
      <MenuIcon />
    </IconButton>
  )
}

export default Menu