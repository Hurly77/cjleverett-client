import { default as Btn } from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Link from 'next/link';

const Button = (props) => {
	if (props.link) {
		return (
			<Link href={props.link}>
				<a>
					<Tab value={props.value} variant='outlind' label={props.name} />
				</a>
			</Link>
		);
	}
	return <Btn>{props.name}</Btn>;
};

export default Button;
