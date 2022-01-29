import React, {useState} from 'react';

import { loginAdmin } from '../../../actions';
import { connect } from 'react-redux';
import {Container, Paper, TextField, Button, Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = ({loginAdmin}) => {
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const navigate = useNavigate()

 	const loginToAdmin = () => {
		setUsername('')
		setPassword('')
		navigate('/', {replace: true})
		loginAdmin()
	}
	
	const incorrectLogin = () => {
		alert('Incorrect login details!')
		setPassword('')
 }

	const login = () => {
		fetch('http://localhost:8000/admins')
			.then((e) => e.json())
			.then((data) => data.find(item => item.username === username && item.password === password) ? loginToAdmin() : incorrectLogin())
			.catch((err) => alert(err.message));
	};

	const handlerKeyDown = e => {
		if(e.key !== 'Enter') return
		login() 	
	}

	return (
		<Container maxWidth='xs' className='action__wrapper'>
			<Paper variant='outlined' className='action__panel'>
				<Typography variant='h5' sx={{fontWeight: 'bold'}} color='text'>
					Admin Login
				</Typography>
				<TextField
					id='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					label={
						<div className='label-with-icon'>
							<PersonIcon />
							Username
						</div>
					}
					variant='outlined'
					onKeyDown={handlerKeyDown}
				/>
				<TextField
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label={
						<div className='label-with-icon'>
							<LockIcon />
							Password
						</div>
					}
					variant='outlined'
					type='password'
					onKeyDown={handlerKeyDown}
				/>
				<Button onClick={login} variant='contained' onKeyDown={handlerKeyDown}>
					Log in
				</Button>
			</Paper>
		</Container>
	);
};

export default connect(false, {loginAdmin})(Login);
