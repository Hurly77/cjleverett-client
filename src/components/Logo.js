import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
  Menu: {
      fontFamily: 'MuseoModerno, cursive', 
      color: 'inherit',
  }
})

const handleClick = (e) => {
  
}

const Logo = () => {
  const classes = useStyle()
  return (
    <IconButton className={classes.Menu}>
      CJL
    </IconButton>
  )
}

export default Logo