import React from 'react';
import Card from '@material-ui/core/Card';
import {CardActionArea, CardContent, CardMedia, CardActions, Snackbar, Button} from '@material-ui/core/';

import Typography from '@material-ui/core/Typography';

const Project = (props) => {
	const [state, setState] = React.useState({
		open       : false,
		vertical   : 'bottom',
		horizontal : 'center',
	});

	const {open, vertical, horizontal} = state;

	const handleClick = (prop) => () => {
		console.log(prop);
		if (!prop) {
			return setState({...state, open: true});
		} else {
			return;
		}
	};

	const handleClose = () => {
		setState({...state, open: false});
	};

	return (
		<>
			<Card className={props.style} postion="center">
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Project IMG"
            height="221"
						image={props.img}
						title="Project"
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
					<Button href={props.link} target={"_blank"} onClick={handleClick(props.link)}>Demo</Button>
					<Button href={props.video} target={"_blank"} onClick={handleClick(props.video)}>video</Button>
					<Button href={props.repo} target={"_blank"} onClick={handleClick(props.repo)}>Repo</Button>
				</CardActions>
			</Card>
			<Snackbar
				anchorOrigin={{vertical, horizontal}}
				open={open}
				onClose={handleClose}
				message="Sorry, not yet availble"
				key={vertical + horizontal}
			/>
		</>
	);
};
export default Project;
