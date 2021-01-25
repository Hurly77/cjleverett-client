import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const project = (props) => {
  const [open, setOpen] = React.useState(false)

   const handleClick = () => {
     setOpen(true)
   }

   const handleClose = (q) = () => {
    if (q === 'clickaway') {
      return
    }
    setOpen(false)
   }


  return (
    <Card className={props.style} postion="center"> 
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image={props.img}
        title="Contemplative Reptile"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.head}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.textBody}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button href={props.link}>
        Demo
      </Button>
        <Button href={props.video}>
          video
      </Button>
        <Button href={props.video}>
          Repo
      </Button>
    </CardActions>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
  </Card>
  )
}
export default project