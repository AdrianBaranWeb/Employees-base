import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import {Container, Paper, Typography, TextField, Button} from '@mui/material';

const EmployeeDelete = ({employees}) => {
  const [confirmCode, setConfirmCode] = useState('')
  const [confirm, setConfirm] = useState('')
  const {id} = useParams()
  const employee = employees && employees.find(emp => emp.id === id)

  const deleteUser = () => {
		if(confirmCode !== confirm) return alert('Incorrect confirm code!')

		fetch('http://localhost:8000/employees/'+id, {
			method: 'DELETE',
      mode: 'cors',
			headers: {'Content-Type': 'application/json'},
		})
			.then((res) => res.json())
			.then((data) => alert('Employee has been deleted.'))
			.catch((err) => alert(err.message));
  }

  const handlerKeyDown = e => {
		if(e.key !== 'Enter') return
		deleteUser() 	
  }

  useEffect(() => {
    if(!employee) return
    const codeGenerator = () => {
      const numbers = String(Math.random()).slice(2, -2)
      return id.slice(0,1) + numbers
    }

    setConfirmCode(codeGenerator())
  }, [employee, id])

	return (
		<Container maxWidth='xs' className='action__wrapper'>
			<Paper variant='outlined' className='action__panel'>
				<Typography variant='h5' sx={{fontWeight: 'bold'}} color='text'>
					Are you sure?
				</Typography>
				<Typography variant='p' color='text'>
					You are trying to delete employee: {employee && employee.name + ' ' + employee.surname}
				</Typography>
				<Typography variant='p' color='text'>
					Confirm code: {confirmCode}
				</Typography>
				<TextField
					id='confirm'
					value={confirm}
					onChange={(e) => setConfirm(e.target.value)}
					label='Confirm code'
					variant='outlined'
					onKeyDown={handlerKeyDown}
				/>
				<Button onClick={deleteUser} variant='contained' color='error' onKeyDown={handlerKeyDown}>
					Confirm
				</Button>
			</Paper>
		</Container>
	);
};

const mapStateToProps = state => ({employees: state.data.employeeList})

export default connect(mapStateToProps, {})(EmployeeDelete);
