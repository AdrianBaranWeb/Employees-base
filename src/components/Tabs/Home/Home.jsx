import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import FilterBar from '../../FilterBar/FilterBar';
import EmployeeCard from '../../EmployeeCard/EmployeeCard';

import {Container} from '@mui/material';

import { updateData } from '../../../actions';

const Home = ({data, updateData}) => {
	useEffect(() => {
		fetch('http://localhost:8000/employees')
			.then((e) => e.json())
			.then((newData) => updateData(newData))
			.catch((err) => new Error(err.message));
	}, [updateData]);

	const employeeCardElements =
		data && data.employeeList.map((item) => {
		const filters = data.filters
		const {positions, departments, employeeName} = filters
		const hasPositions = positions !== '' ? item.positions.includes(positions): true
		const hasDepartments = departments !== '' ? item.departments.includes(departments) : true
		const hasName = employeeName !== '' ? item.name.includes(employeeName) : true
		return <EmployeeCard key={item.id} {...item} isVisible={hasPositions && hasDepartments && hasName}/>
	});

	return (
		<Container maxWidth='xl'>
			<FilterBar />
			{employeeCardElements}
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {data: state.data};
};

export default connect(mapStateToProps, {updateData})(Home);
