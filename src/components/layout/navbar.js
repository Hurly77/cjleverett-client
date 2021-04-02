import AppBar from '@material-ui/core/AppBar'
import TabRoutes from '../navagation/tab-routes'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    '& button > span > a': {
      color: theme.palette.text.primary,
      textDecoration: 'none'
    }
    
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} position="fixed" display="flex">
      <TabRoutes />
    </AppBar>
  )
}

export default Navbar