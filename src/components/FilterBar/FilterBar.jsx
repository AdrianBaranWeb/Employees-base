import React from 'react';

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
	return (
		<Card style={{marginTop: 30, padding: 8, display: 'flex', justifyContent: 'space-around'}}>
			<FormControl sx={{minWidth: 150}}>
				<InputLabel id='demo-simple-select-label'>Position</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					label='Position'>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{minWidth: 150}}>
				<InputLabel id='demo-simple-select-label'>Department</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					label='Department'>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<TextField id='outlined-basic' label='Employee' variant='outlined' />
      <Button variant='outlined'><SearchIcon/></Button>
		</Card>
	);
};

export default FilterBar;
