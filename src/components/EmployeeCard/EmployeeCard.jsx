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

const EmployeeCard = () => {
	return (
		<Card sx={{minWidth: 275, mt: 5}}>
			<Box>
				<CardContent sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4}}>
					{/* Employee Data */}
          <Box>
						<Box
							sx={{
								display: 'flex',
                alignItems: 'center'
							}}>
							<Avatar alt='Adrian Baran' src='/static/images/avatar/1.jpg' sx={{mr: 2, width: 60, height: 60}} />
							<Typography variant='h5' component='div'>
								Adrian Baran, 20
								<Typography color='text.secondary'>
									Frontend Developer
								</Typography>
							</Typography>
						</Box>
						<Typography sx={{mb: 1, mt: 2}} color='text'>
							Departments: Development
						</Typography>
						<Typography sx={{mb: 1}} color='text'>
							Seniority: 1 Year
						</Typography>
						<Typography sx={{mb: 1}} color='text'>
							Phone: +48-572-713-510
						</Typography>
						<Typography color='text'>
							E-mail: adrianbaranweb@gmail.com
						</Typography>
					</Box>
					{/* Progress */}
          <Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}>
						<CircularProgress variant='determinate' value={50} sx={{mr: 3}} />
						<Typography variant='h5' component='div'>
							50%
							<Typography color='text.secondary'>Customers satisfaction</Typography>
						</Typography>
					</Box>
          {/* Employee earnings */}
          <Box sx={{borderLeft: '2px solid rgba(0, 0, 0, .3)', pl: 3, py: 1}}>
            <Typography sx={{mb: 1}} color='text'>
              Earnings: 2000 $
						</Typography>
            <Typography color='text'>
              Bonus: 100 $
						</Typography>
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
