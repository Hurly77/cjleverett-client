import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
	root: {
		backgroundColor: '',
		'& img': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '80%'
    },
	}
})

export const Header = (prop) => {
	const classes = useStyle()
	return (
		<Container maxWidth="sm" align={'center'} component="section" className={classes.root}>
			<div className={prop.prop} />
			<Typography component="h1" variant={'h2'}>Full Stack Developer</Typography>
			<img src={process.env.PUBLIC_URL + "LOGO3.png"} alt="1"/>
			<Typography component="p">I Build Full Stack application, I love what I do and, I always push myself to learn more evey day</Typography>
		</Container>
	);
};

export default Header;
