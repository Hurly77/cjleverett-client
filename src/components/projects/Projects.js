import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Container, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root : {
		display  : 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    paddingLeft: '',
    alignItems: 'center',
    backgroundColor: '#20bf55',
    paddingTop: '60px',
		'& > *'  : {
      backgroundColor: '#01baef',
			margin : theme.spacing(3),
			width  : theme.spacing(50),
			height : theme.spacing(60),
		},
	},
}));

const Projects = (prop) => {
  const classes = useStyle();
  console.log(prop.prop)
	return (
    <>
		<Container maxWidth="xl" className={classes.root} align="center">
			<Paper elevation={20} />
			<Paper elevation={20}/>
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
		</Container>
    </>
	);
};

export default Projects;