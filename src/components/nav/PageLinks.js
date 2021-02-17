import { React, useState } from 'react';
import FirebaseTabs from './FirebaseTabs';

const PageLinks = () => {
	const [index, setIndex] = useState(0);
	return (
		<div>
			<FirebaseTabs
				tabs={[
					{ label: 'About' , location: '#about'},
					{ label: 'Skills' , location: '#skills'},
					{ label: 'Projects' , location: '#projects'},
					{ label: 'Contact' , location: '#contact'},
				]}
				value={index}
				onChange={(e, i) => setIndex(i)}
			/>
		</div>
	);
};

export default PageLinks;
