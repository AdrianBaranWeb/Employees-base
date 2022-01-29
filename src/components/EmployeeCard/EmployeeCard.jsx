import React from 'react';
import {
	Box,
	Avatar,
	Typography,
	Button,
	CardContent,
	CardActions,
	Card,
	CircularProgress,
} from '@mui/material';
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const EmployeeCard = ({
	id,
	name,
	surname,
	age,
	email,
	phone,
	seniority,
	departments,
	positions,
	earnings,
	bonus,
	satisfaction,
	isVisible,
	isAdmin
}) => {
	const navigate = useNavigate()

	return (
		<Card sx={{minWidth: 275, mt: 5, display: isVisible ? 'block' : 'none'}}>
			<Box>
				<CardContent
					sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 4}}>
					{/* Employee Data */}
					<Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}>
							<Avatar
								alt='Adrian Baran'
								src='/static/images/avatar/1.jpg'
								sx={{mr: 2, width: 60, height: 60}}
							/>
							<Typography variant='h5' component='div'>
								{name} {surname}, {age}
								<Typography color='text.secondary'>{positions.map((item, index) => (index === 0 ? item : ' / ' + item))}</Typography>
							</Typography>
						</Box>
						<Typography sx={{mb: 1, mt: 2}} color='text'>
							Departments:{' '}
							{departments.map((item, index) => (index === 0 ? item : ' / ' + item))}
						</Typography>
						<Typography sx={{mb: 1}} color='text'>
							Seniority: {seniority}
						</Typography>
						<Typography sx={{mb: 1}} color='text'>
							Phone: {phone}
						</Typography>
						<Typography color='text'>E-mail: {email}</Typography>
					</Box>
					{/* Progress */}
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<CircularProgress
							variant='determinate'
							value={satisfaction}
							sx={{mr: 3}}
						/>
						<Typography variant='h5' component='div'>
							{satisfaction}%
							<Typography color='text.secondary'>Customers satisfaction</Typography>
						</Typography>
					</Box>
					{/* Employee earnings */}
					<Box sx={{borderLeft: '2px solid rgba(0, 0, 0, .3)', pl: 3, py: 1}}>
						<Typography sx={{mb: 1}} color='text'>
							Earnings: {earnings} $
						</Typography>
						<Typography color='text'>Bonus: {bonus} $</Typography>
					</Box>
				</CardContent>
			</Box>
			{/* Card options */}
			{isAdmin && (
				<CardActions>
				<Button size='small' color='info' onClick={() => navigate(`/details/${id}`, {replace: true})}>
					Edit
				</Button>
				<Button size='small' color='error' onClick={() => navigate(`/employee-delete/${id}`, {replace: true})}>
					Delete
				</Button>
				<Button variant='contained' style={{marginLeft: 'auto'}}>
					Submit Month
				</Button>
			</CardActions>
			)}
		</Card>
	);
};

const mapStateToProps = (state) => ({isAdmin: state.data.isAdmin})

export default connect(mapStateToProps, {})(EmployeeCard);
