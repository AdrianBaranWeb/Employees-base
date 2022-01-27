import React, {useEffect, useState} from 'react';

import FilterBar from '../../FilterBar/FilterBar';
import EmployeeCard from '../../EmployeeCard/EmployeeCard';

import {Container} from '@mui/material';

const Home = () => {
  const [employees, setEmployees] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/employees').then(e => e.json()).then(data => setEmployees(data)).catch(err => new Error(err.message))
  }, [])

  const employeeCardElements = employees && employees.map(item => (
    <EmployeeCard key={item.id} {...item}/>
  ))

	return (
		<Container maxWidth='xl'>
			<FilterBar />
      {employeeCardElements}
		</Container>
	);
};

export default Home;
