import { Container, Typography, makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.primary
  }
}))

const Bio = () => {
  const classes = useStyles()
  return (
   <Container className={classes.root} component="section" align={'center'}>
     <Typography className={classes.root} component="h2" variant={'h5'}>
        Hi, I'm Cameron
     </Typography>
     <Typography className={classes.root} component="p">
     I love Computers, whether I'm building one, developing web applications, or just reading about NVIDIA's new Ampere architecture. Whatever the case may be. The point is I love what I do.
     </Typography>
   </Container>
  )
}

export default Bio
