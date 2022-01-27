import React from 'react';

import FilterBar from '../../FilterBar/FilterBar';
import EmployeeCard from '../../EmployeeCard/EmployeeCard';

import {Container} from '@mui/material';

const Home = () => {
	return (
		<Container maxWidth='xl'>
			<FilterBar />
			<EmployeeCard />
			<EmployeeCard />
		</Container>
	);
};

export default Home;
