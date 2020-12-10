import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export const Header = (prop) => {
	return (
		<Container maxWidth="sm" align={'center'} component="section">
			<div className={prop.prop} />
			<Typography component="h1" variant={'h2'}>Full Stack Developer</Typography>
			<Typography component="p">I Build Full Stack application, I love what I do and, I always push myself to learn more evey day</Typography>
		</Container>
	);
};

export default Header;
