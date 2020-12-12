import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
  Menu: {
      fontFamily: 'MuseoModerno, cursive', 
      color: 'inherit',
      '& img': {
        width: '35px',
        height: '35px'
      }
  }
})

const Logo = () => {
  const classes = useStyle()
  return (
    <IconButton className={classes.Menu}>
       <img src={process.env.PUBLIC_URL + "LOGO2.png"} alt="1"/>
    </IconButton>
  )
}

export default Logo