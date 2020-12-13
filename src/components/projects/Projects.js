import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Container, makeStyles} from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
	root : {
		display  : 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
		'& > *'  : {
      backgroundColor: '#01baef',
			margin : theme.spacing(3),
			width  : theme.spacing(50),
			height : theme.spacing(50),
		},
	},
	div: {
		height: '300px'
	},
	sectionA: {
	'& img': {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%'
	},
		
	}
}));

const Projects = (prop) => {
	const classes = useStyle();
	const props = prop
  console.log(props)
	return (
    <>
		<div className={classes.div}>
		</div>
		<Container align="center" className={classes.sectionA}>
		<img width="800px" src={process.env.PUBLIC_URL + "Projects.png"} alt="1"/>
		</Container>
		<div className={classes.root}>
			<Paper elevation={20} ></Paper>
			<Paper elevation={20}/>
      <Paper elevation={20} />
      <Paper elevation={20} />
		</div>
    </>
	);
};

export default Projects;