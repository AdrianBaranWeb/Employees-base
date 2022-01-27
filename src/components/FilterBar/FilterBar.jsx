import React, {useEffect, useState} from 'react';

import {
  Card,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FilterBar = () => {
  const [departments, setDepartments] = useState(null)
  const [positions, setPositions] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:8000/departments').then(e => e.json()).then(data => setDepartments(data)).catch(err => new Error(err.message))
    fetch('http://localhost:8000/positions').then(e => e.json()).then(data => setPositions(data)).catch(err => new Error(err.message))
  }, [])

  const departmentElements = departments && departments.map((item, index) => (
    <MenuItem key={item.slice(0, 1)+index+item.substr(-1)} value={item}>{item}</MenuItem>
  ))
  
  const positionElements = positions && positions.map((item, index) => (
    <MenuItem key={item.slice(0, 1)+index+item.substr(-1)} value={item}>{item}</MenuItem>
  ))

	return (
		<Card style={{marginTop: 30, padding: 8, display: 'flex', justifyContent: 'space-around'}}>
			<FormControl sx={{minWidth: 180}}>
				<InputLabel id='positions-label'>Positions</InputLabel>
				<Select
					labelId='positions-label'
					id='positions'
          value={''}
					label='Positions'>
					{positionElements}
				</Select>
			</FormControl>
			<FormControl sx={{minWidth: 180}}>
				<InputLabel id='departments-label'>Departments</InputLabel>
				<Select
					labelId='departments-label'
					id='departments'
          value={''}
					label='Departments'>
					{departmentElements}
				</Select>
			</FormControl>
			<TextField id='outlined-basic' label='Employee' variant='outlined' />
      <Button variant='outlined'><SearchIcon/></Button>
		</Card>
	);
};

export default FilterBar;
