import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '80%', fontSize: '2rem', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}
				>
					<Tab
						label='Expertise haut de gamme'
						sx={{ color: 'white' }}
						{...a11yProps(0)}
					/>
					<Tab
						label='Item Two'
						sx={{ color: 'white' }}
						{...a11yProps(1)}
					/>
					<Tab
						label='Item Three'
						sx={{ color: 'white' }}
						{...a11yProps(2)}
					/>
				</Tabs>
			</Box>
			<CustomTabPanel
				value={value}
				index={0}
			>
				Notre équipe se spécialise dans les constructions haut de gamme, donnant vie avec passion à la vision du designer que vous avez choisi.
				Bénéficiez de nos relations établies avec des sociétés de conception de premier plan, garantissant une collaboration transparente pour
				votre projet.
			</CustomTabPanel>
			<CustomTabPanel
				value={value}
				index={1}
			>
				Item Two
			</CustomTabPanel>
			<CustomTabPanel
				value={value}
				index={2}
			>
				Item Three
			</CustomTabPanel>
		</Box>
	);
}
