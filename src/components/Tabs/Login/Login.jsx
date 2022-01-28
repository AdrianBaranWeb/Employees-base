import React, {useState} from 'react';

import { loginAdmin } from '../../../actions';
import { connect } from 'react-redux';
import {Container, Paper, TextField, Button, Typography} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import './Login.css';

const Login = ({loginAdmin}) => {
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

 	const loginToAdmin = () => {
		loginAdmin()
	 }

	const login = () => {
		fetch('http://localhost:8000/admins')
			.then((e) => e.json())
			.then((data) => data.find(item => item.username === username && item.password === password) ? loginToAdmin() : alert('Incorrect login details!'))
			.catch((err) => new Error(err.message));
	};

	return (
		<Container maxWidth='xs' className='login__wrapper'>
			<Paper variant='outlined' className='login__panel'>
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
				/>
				<Button onClick={login} variant='contained'>
					Log in
				</Button>
			</Paper>
		</Container>
	);
};

export default connect(false, {loginAdmin})(Login);
