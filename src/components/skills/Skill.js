import {Container, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
const useStyle = makeStyles({
	root : {
		backgroundColor : '#01baef',
		paddingTop      : '30px',
		height          : '300px',
		'& h1'          : {
			color         : '#20bf55',
			marginBottom  : 0,
			paddingBottom : 0,
		},
		'& section'     : {
			transform       : 'translate(0, 40px)',
			color           : '#fbfbfb',
			border          : 'solid 3px #01baef',
			borderRadius    : '10px',
			backgroundColor : '#0b4f6c',
			marginBottom    : '30px',
			'& h1'          : {},
			'& p'           : {
				fontSize : '20px',
			},
		},
		'& li'          : {
			listStyleType : 'none',
			listStyle     : 'none',
		},
		'& img'         : {
			backgroundColor : 'transparent',
		},
	},
});

const Skill = () => {
	const classes = useStyle();
	return (
		<Container align="center" className={classes.root} maxWidth="xl">
			<Container  component="section" maxWidth="sm">
				<Typography component="h1" variant="h3">
					Front-end:
				</Typography>
				<Typography display="inline" component="p">
					<li>Material-UI,</li>
					<li>JavaScript,</li>
					<li>React,</li>
					<li>Redux,</li>
					<li>Thunk,</li>
				</Typography>

				<Typography component="h1" variant="h3">
					Back-end:
				</Typography>
				<Typography component="p">
					<li>Ruby on Rails,</li>
					<li>Rest,</li>
					<li>
						Validation,<br />Authentication,
					</li>
					<li>APIs,</li>
					<li>SQL,</li>
				</Typography>
			</Container>
		</Container>
	);
};

export default Skill;
