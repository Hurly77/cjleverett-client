import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const footer = (props) => {
	return (
		<Box bgcolor='primary.light' className={props.styles}>
			<Typography>cjleverett © 2021 Released under the MIT License.</Typography>
		</Box>
	);
};

export default footer;
