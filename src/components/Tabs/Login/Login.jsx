import React from 'react';

import {
	Container,
	Paper,
	TextField,
	Button,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import './Login.css';

const Login = () => {
	return (
		<Container maxWidth='xs' className='login__wrapper'>
			<Paper variant='outlined' className='login__panel'>
				<TextField
					id='outlined-basic'
					label={
						<div className='label-with-icon'>
							<PersonIcon />
							Username
						</div>
					}
					variant='outlined'
				/>
				<TextField
					id='outlined-basic'
					label={
						<div className='label-with-icon'>
							<LockIcon />
							Password
						</div>
					}
					variant='outlined'
					type='password'
				/>
				<Button variant='contained'>Log in</Button>
			</Paper>
		</Container>
	);
};

export default Login;
