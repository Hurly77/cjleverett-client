import React from 'react';
import Project from './project';
import {Container, makeStyles} from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
	root     : {
		maxWidth: 375,
		marginLeft: '2%',
		marginBottom: 15,
		boxShadow: '-3px 3px 10px 0px rgba(0, 0, 0, .4)',
		'& > *'     : {
			backgroundColor : '#01baef',
		},
		'& img'  : {
			maxWidth: 375,
			maxHieght: 221,
		},
	},
	div      : {
		height : '300px',
	},
	sectionA : {
		'& img'  : {
			display     : 'block',
			marginLeft  : 'auto',
			marginRight : 'auto',
			width       : '100%',
		},
	},
	sectionB : {
		display     : 'flex',
		flexWrap: 'wrap',
		marginTop: 15,
		justifyContent: 'center',
	},
}));

const Projects = (prop) => {
	const classes = useStyle();
	const props = prop;
	
	console.log(props);
	return (
		<>
			<div className={classes.div} />
			<a id="projects"/>
			<Container align="center" className={classes.sectionA}>
				<img width="800px" src={process.env.PUBLIC_URL + 'Projects.png'} alt="1" />
			</Container>
			<Container align="center" className={classes.sectionB}>
				<Project
				video={"https://youtu.be/qa3dJBueHgk"}
				repo={"https://github.com/Hurly77/next-connect-front"}
					style={classes.root}
					link={'https://nextconnect.surge.sh/'}
					img={process.env.PUBLIC_URL + 'NextConnect.PNG'}
					head={'Next Connect'}
					textBody={'Next Connect is a social media platform built using a Rails api, css, React and redux'}
				/>
				
				<Project
				video={'https://www.youtube.com/watch?v=WJfSvcJnieY'}
				repo={"https://github.com/Hurly77/game-of-cards"} 
				style={classes.root} 
				link={null} 
				img={process.env.PUBLIC_URL + 'Capture.PNG'} 
				head={'Card Game'} 
				textBody={'Stranger Things themed black jack using Vanilla JavaScript & Rails api'} />
				
				<Project
				video={'https://www.youtube.com/watch?v=MoNZkSBqgfY&t=176s'}
				repo={"https://github.com/Hurly77/TriviaNight"} 
				style={classes.root} 
				link={null}
				img={process.env.PUBLIC_URL + 'Trivia.PNG'} 
				head={'Trivia Night'} 
				textBody={'Simple Trivia game useing Ruby on Rails full fetured application'} />
			</Container>
		</>
	);
};

export default Projects;
