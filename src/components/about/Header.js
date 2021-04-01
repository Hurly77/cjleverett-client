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
	}, 
	p: {
		fontSize: '20px',
	}
})

export const Header = (prop) => {
	const classes = useStyle()
	return (
		<Container maxWidth="sm" align={'center'} component="section" className={classes.root}>
			<div className={prop.prop} />
			<Typography component="h1" variant={'h2'}></Typography>
			<Image src="/images/LOGO.png" height={100} width={100}/>
			<Typography className={classes.p}>I Build a Full-Stack web application and, I always push myself to learn more every day.</Typography>
		</Container>
	);
};

export default Header;
