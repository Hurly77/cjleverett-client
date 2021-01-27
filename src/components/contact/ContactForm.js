import React from 'react';
import emailjs from 'emailjs-com';
import {
	Button,
	Container,
	makeStyles,
	TextField,
	FormControl,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	div    : {
    backgroundColor : '#01baef',
    margin: 'auto',
	},
	root   : {
    backgroundColor : '#20bf55',
    margin: 'auto',
	},
	form   : {
    maxWidth        : "1000px",
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
  button: {
    width: '100%'
  },
	space  : {
		margin : 'auto',
		height : 10,
	},
}));

const sendEmail = (e) => {
	e.preventDefault();

	emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID').then(
		(result) => {
			console.log(result.text);
		},
		(error) => {
			console.log(error.text);
		},
	);
};

const ContactForm = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.div}>
				<Container align="center" maxWidth='md'>
					<h1 style={{color: '#fbfbfb', paddingTop: '15px', fontSize: '75px'}}>Contact</h1>
					<FormControl className={classes.form} onSubmit={sendEmail}>
						<Grid container spacing={10}>
							<Grid item xs={6}>
								<TextField
                  label="Name"
									color="primary"
									className={classes.input1}
									type="text"
									name="user_name"
									variant="filled"
								/>
							</Grid>

							<Grid item xs={6}>
                <TextField 
                label="Email"
                className={classes.input1} 
                type="email" 
                name="user_email" 
                variant="filled" />
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
							<Button type="submit" value="Send" onClick={() => alert("not yet active, but will be shortly")}>
								Send
							</Button>
              </Grid> 

						</Grid>
					</FormControl>
				</Container>
			</div>
		</div>
	);
};

export default ContactForm;
