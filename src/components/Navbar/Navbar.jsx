import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import {connect} from 'react-redux';
import {logOutAdmin} from '../../actions';

const Navbar = ({logOutAdmin, isAdmin}) => {
	const navigate = useNavigate()

	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{flexGrow: 1}}>
						<Link to='/'>EmployeeBase</Link>
					</Typography>
					{!isAdmin && (
						<Link to='/login'>
							<Button color='inherit'>Admin Panel</Button>
						</Link>
					)}
					{isAdmin && (
						<Button color='inherit' onClick={() => {
							logOutAdmin()
							navigate('/', {replace: true})
							}}>
							Log out
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

const mapStateToProps = (state) => ({isAdmin: state.data.isAdmin});

export default connect(mapStateToProps, {logOutAdmin})(Navbar);
