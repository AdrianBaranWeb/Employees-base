import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {updateData} from '../../../actions';

import FilterBar from '../../FilterBar/FilterBar';
import EmployeeCard from '../../EmployeeCard/EmployeeCard';

import {Container} from '@mui/material';

const Home = ({data, updateData}) => {
	useEffect(() => {
		fetch('http://localhost:8000/employees')
			.then((e) => e.json())
			.then((data) => updateData(data))
			.catch((err) => new Error(err.message));
	}, [updateData]);

	const employeeCardElements =
		data && data.map((item) => <EmployeeCard key={item.id} {...item} />);

	return (
		<Container maxWidth='xl'>
			<FilterBar />
			{employeeCardElements}
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {data: state.data.employeeList};
};

export default connect(mapStateToProps, {updateData})(Home);
