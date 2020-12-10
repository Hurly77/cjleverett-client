import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  root: {

  }
})

const Bio = () => {
  const classes = useStyle()
  return (
   <Container component="section" align={'center'} className={classes.root}>
     <Typography component="h2" variant={'h5'}>
        Hi, I'm Cameron
     </Typography>
     <Typography component="p">
       I love Computer weather, I'm build one, Designing web applications or just reading about NVIDIA's Ampere architecture, whatever the case maybe the point is I love what I do.
     </Typography>
   </Container>
  )
}

export default Bio
