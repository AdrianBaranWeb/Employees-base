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

const EmployeeCard = ({
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
}) => {
	return (
		<Card sx={{minWidth: 275, mt: 5, display: isVisible ? 'block' : 'none'}}>
			<Box>
				<CardContent
					sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4}}>
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
								<Typography color='text.secondary'>{positions}</Typography>
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
			<CardActions>
				<Button size='small' color='info'>
					Edit
				</Button>
				<Button size='small' color='error'>
					Delete
				</Button>
				<Button variant='contained' style={{marginLeft: 'auto'}}>
					Submit Month
				</Button>
			</CardActions>
		</Card>
	);
};

export default EmployeeCard;
