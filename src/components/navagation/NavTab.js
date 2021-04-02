import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavTab = (props) => {
	return (
		<Link href={props.link}>
			<Tab textColor='primary' variant='outlind' label={<a>{props.name}</a>} />
		</Link>
	);
};

export default NavTab;
