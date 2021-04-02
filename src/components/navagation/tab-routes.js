import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import NavTab from './NavTab';
import routes from '@/data/routes';

const TabRoutes = () => {
	const buttons = routes();
	return (
		<Tabs
			indicatorColor='secondary'
			textColor='primary'
			centered>
			{buttons.map((btn) => <NavTab key={btn.id} link={btn.link} name={btn.name}/>)}
		</Tabs>
	);
};

export default TabRoutes;
