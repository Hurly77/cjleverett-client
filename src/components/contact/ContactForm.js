import React from 'react';
import emailjs from 'emailjs-com';
import {Button, Container, makeStyles, TextField, Snackbar} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	div    : {
		backgroundColor : '#01baef',
		margin          : 'auto',
	},
	root   : {
		backgroundColor : '#20bf55',
		margin          : 'auto',
	},
	form   : {
		maxWidth        : '1000px',
		backgroundColor : '#0b4f6c',
		borderRadius    : 10,
		flexGrow        : 1,
		color           : '#20bf55',
		padding         : '3%',
	},
	input1 : {
		backgroundColor : 'fbfbfb',
		color           : '#20bf55',
		width           : '100%',
		padding         : theme.spacing(2),
		textAlign       : 'center',
	},
	button : {
		width : '100%',
	},
	space  : {
		margin : 'auto',
		height : 10,
	},
}));

const ContactForm = () => {
	const userId = process.env.REACT_APP_EMAIL_JS_ID
	const template = process.env.REACT_APP_EMAIL_JS_TEMPLATE

	const sendEmail = (e) => {
		e.preventDefault();
		console.log("sent")
		emailjs.sendForm('default_service', template, e.target, userId).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			},
		);
		e.target.reset();
	};

	const [state, setState] = React.useState({
		open       : false,
		vertical   : 'bottom',
		horizontal : 'center',
	});

	const {open, vertical, horizontal} = state;

	const handleClick = () => () => {
		setState({...state, open: true});
		}

	const handleClose = () => {
		setState({...state, open: false});
	};

	const classes = useStyles();
	return (
		<>
			<div className={classes.div}>
				<Container id="contact" align="center" maxWidth="md">
					<h2 style={{color: '#fbfbfb', paddingTop: '10px', fontSize: '60px', fontWeight: '15'}}>Say Hello <br></br></h2>
					<form className={classes.form} onSubmit={sendEmail}>
						<Grid container spacing={10}>
							<Grid item xs={6}>
								<TextField
									label="Name"
									color="primary"
									className={classes.input1}
									type="text"
									name="name"
									variant="filled"
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField label="Email" className={classes.input1} type="email" name="from" variant="filled" />
							</Grid>

							<Grid item xs={12}>
								<TextField
									label="Message"
									placeholder="what would you like to talk about"
									className={classes.input1}
									name="message"
									variant="filled"
									multiline
								/>
							</Grid>
							<br />

							<Grid item xs={12}>
								<Button type="submit" value="Send" onClick={handleClick()}>
									Send
								</Button>
							</Grid>
						</Grid>
					</form>
				</Container>
				<Snackbar
				anchorOrigin={{vertical, horizontal}}
				open={open}
				onClose={handleClose}
				message="message has been sent an I'll be In touch ASAP"
				key={vertical + horizontal}
			/>
			</div>
		</>
	);
}
export default ContactForm;
