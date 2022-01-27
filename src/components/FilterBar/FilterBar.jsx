import React, {useEffect, useState} from 'react';

import { connect } from 'react-redux';
import { updateFilters } from '../../actions';

import {
	Card,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FilterBar = ({updateFilters}) => {
	const [departments, setDepartments] = useState(null);
	const [positions, setPositions] = useState(null);
	const [chosedDeparment, setChosedDepartment] = useState('');
	const [chosedPosition, setChosedPosition] = useState('');
	const [employeeName, setEmployeeName] = useState('');

	useEffect(() => {
		fetch('http://localhost:8000/departments')
			.then((e) => e.json())
			.then((data) => setDepartments(data))
			.catch((err) => new Error(err.message));
		fetch('http://localhost:8000/positions')
			.then((e) => e.json())
			.then((data) => setPositions(data))
			.catch((err) => new Error(err.message));
	}, []);

	const departmentElements =
		departments &&
		departments.map((item, index) => (
			<MenuItem key={item.slice(0, 1) + index + item.substr(-1)} value={item}>
				{item}
			</MenuItem>
		));

	const positionElements =
		positions &&
		positions.map((item, index) => (
			<MenuItem key={item.slice(0, 1) + index + item.substr(-1)} value={item}>
				{item}
			</MenuItem>
		));


		const filter = () => {
			updateFilters({departments: chosedDeparment, positions: chosedPosition, employeeName})
		}

	return (
		<Card
			style={{
				marginTop: '30px',
			}}>
			<Typography
				variant='h6'
				component='p'
				sx={{textAlign: 'center', my: 1, fontWeight: 'bold'}}>
				Filter
			</Typography>
			<div
				style={{
					padding: 8,
					display: 'flex',
					justifyContent: 'space-around',
				}}>
				<FormControl sx={{minWidth: 180}}>
					<InputLabel id='positions-label'>Positions</InputLabel>
					<Select
						labelId='positions-label'
						id='positions'
						value={chosedPosition}
						onChange={(e) => setChosedPosition(e.target.value)}
						label='Positions'>
						<MenuItem value={''}>All</MenuItem>
						{positionElements}
					</Select>
				</FormControl>
				<FormControl sx={{minWidth: 180}}>
					<InputLabel id='departments-label'>Departments</InputLabel>
					<Select
						labelId='departments-label'
						id='departments'
						value={chosedDeparment}
						onChange={(e) => setChosedDepartment(e.target.value)}
						label='Departments'>
						<MenuItem value={''}>All</MenuItem>
						{departmentElements}
					</Select>
				</FormControl>
				<TextField
					id='employee-data'
					label='Employee'
					variant='outlined'
					value={employeeName}
					onChange={(e) => setEmployeeName(e.target.value)}
				/>
				<Button variant='outlined' onClick={filter}>
					<SearchIcon />
				</Button>
			</div>
		</Card>
	);
};

const mapStateToProps = (state) => {
	return {data: state.data.filters};
};

export default connect(mapStateToProps, {updateFilters})(FilterBar);