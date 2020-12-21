import { Container, Typography } from '@material-ui/core'
import React from 'react'

const Bio = () => {
  return (
   <Container component="section" align={'center'}>
     <Typography component="h2" variant={'h5'}>
        Hi, I'm Cameron
     </Typography>
     <Typography component="p">
     I love Computers, whether I'm building one, developing web applications, or just reading about NVIDIA's new Ampere architecture. Whatever the case may be. The point is I love what I do.
     </Typography>
   </Container>
  )
}

export default Bio
