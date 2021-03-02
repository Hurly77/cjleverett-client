import { Container, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root : {
		color : theme.primary,
	},
	p    : {
		fontSize : '20px',
    '& > span': {
      fontSize: '23px',
      fontWeight: 'bold',
    }
	},
  
}));

const Bio = () => {
	const classes = useStyles();
	return (
		<Container
			className={classes.root}
			component='section'
			align={'left'}
      maxWidth="md"
      >
			<Typography align={'center'} className={classes.root} component='h2' variant={'h3'}>
				Hi, I'm Cameron
			</Typography>
			<Typography position="left" className={classes.p} component='p'>
				<span>I love Computers</span>, whether I'm building one, developing web
				applications, or just reading about NVIDIA's new Ampere
				architecture. Whatever the case may be. The point is I love what I
				do. It has always been My goal to go above and beyond to make a
				difference; I want to contribute as much as I can to innovating and
				creating new ideas that will change how we view technology.
			</Typography>
		</Container>
	);
};

export default Bio;
