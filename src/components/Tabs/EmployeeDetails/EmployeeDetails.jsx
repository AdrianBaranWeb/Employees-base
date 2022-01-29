import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {
	Container,
	Card,
	Typography,
	TextField,
	FormControl,
	MenuItem,
	Checkbox,
	ListItemText,
	Select,
	InputLabel,
	OutlinedInput,
	Button,
} from '@mui/material';
import {connect} from 'react-redux';

import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DateRangeIcon from '@mui/icons-material/DateRange';

const EmployeeDetails = ({employees, updateData}) => {
	const {id} = useParams();

	const employee = employees.find((employee) => employee.id === id);

	const [empName, setEmpName] = useState(id && employee ? employee.name : '');
	const [surname, setSurname] = useState(id && employee ? employee.surname : '');
	const [age, setAge] = useState(id && employee ? employee.age : '');
	const [positions, setPositions] = useState(
		id && employee ? employee.positions : []
	);
	const [departments, setDepartments] = useState(
		id && employee ? employee.departments : []
	);
	const [phone, setPhone] = useState(id && employee ? employee.phone : '');
	const [email, setEmail] = useState(id && employee ? employee.email : '');
	const [earnings, setEarnings] = useState(
		id && employee ? employee.earnings : ''
	);
	const [bonus, setBonus] = useState(id && employee ? employee.bonus : '');
	const [satisfaction, setSatisfaction] = useState(
		id && employee ? employee.satisfaction : ''
	);
	const [seniority, setSeniotity] = useState(
		id && employee ? employee.seniority : ''
	);

	useEffect(() => {
		if (!employee) return;

		setEmpName(employee.name);
		setSurname(employee.surname);
		setAge(employee.age);
		setPositions(employee.positions);
		setDepartments(employee.departments);
		setPhone(employee.phone);
		setEmail(employee.email);
		setEarnings(employee.earnings);
		setBonus(employee.bonus);
		setSatisfaction(employee.satisfaction);
		setSeniotity(employee.seniority);
	}, [employee]);

	const [departmentsList, setDepartmentsList] = useState(null);
	const [positionsList, setPositionsList] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8000/departments')
			.then((e) => e.json())
			.then((data) => setDepartmentsList(data))
			.catch((err) => new Error(err.message));
		fetch('http://localhost:8000/positions')
			.then((e) => e.json())
			.then((data) => setPositionsList(data))
			.catch((err) => new Error(err.message));
	}, []);

	const handleChange = (event, setFor) => {
		const {
			target: {value},
		} = event;
		setFor(typeof value === 'string' ? value.split(',') : value);
	};

	const createNewEmployee = () => {};

	const udpdateEmployeeData = () => {
		fetch('http://localhost:8000/employees/'+id, {
			method: 'PUT',
      mode: 'cors',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: empName,
				surname: surname,
				positions: positions,
				phone: phone,
				email: email,
				age: +age,
				departments: departments,
				seniority: seniority,
				earnings: +earnings,
				bonus: +bonus,
				satisfaction: +satisfaction,
			}),
		})
			.then((res) => res.json())
			.then((data) => alert('Successfully changed data!'))
			.catch((err) => alert(err.message));
	};

  return (
		<Container maxWidth='xl'>
			<Card style={{marginTop: '30px', padding: '16px'}}>
				<Typography variant='h4' component='h2' sx={{textAlign: 'center', mb: 3}}>
					{id ? 'Edit employee data' : 'Add new employee'}
				</Typography>
				<div className='fields__container'>
					<TextField
						id='name'
						value={empName}
						onChange={(e) => setEmpName(e.target.value)}
						label={
							<div className='label-with-icon'>
								<PersonIcon />
								Name
							</div>
						}
						variant='outlined'
						type='text'
					/>
					<TextField
						id='surname'
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						label={
							<div className='label-with-icon'>
								<PersonIcon />
								Surname
							</div>
						}
						variant='outlined'
						type='text'
					/>
					<TextField
						id='age'
						value={age}
						onChange={(e) => setAge(e.target.value)}
						label={
							<div className='label-with-icon'>
								<TodayIcon />
								Age
							</div>
						}
						variant='outlined'
						type='number'
					/>
					<TextField
						id='phone'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						label={
							<div className='label-with-icon'>
								<PhoneIcon />
								Phone
							</div>
						}
						variant='outlined'
						type='phone'
					/>
					<TextField
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						label={
							<div className='label-with-icon'>
								<EmailIcon />
								Email
							</div>
						}
						variant='outlined'
						type='email'
					/>
					<TextField
						id='earnings'
						value={earnings}
						onChange={(e) => setEarnings(e.target.value)}
						label={
							<div className='label-with-icon'>
								<MonetizationOnIcon />
								Earnings
							</div>
						}
						variant='outlined'
						type='number'
					/>
					<TextField
						id='bonus'
						value={bonus}
						onChange={(e) => setBonus(e.target.value)}
						label={
							<div className='label-with-icon'>
								<MonetizationOnIcon />
								Bonus
							</div>
						}
						variant='outlined'
						type='number'
					/>
					<TextField
						id='satisfaction'
						value={satisfaction}
						onChange={(e) => setSatisfaction(e.target.value)}
						label={
							<div className='label-with-icon'>
								<EmojiEmotionsIcon />
								Satisfaction
							</div>
						}
						variant='outlined'
						type='number'
					/>
					<TextField
						id='seniority'
						value={seniority}
						onChange={(e) => setSeniotity(e.target.value)}
						label={
							<div className='label-with-icon'>
								<DateRangeIcon />
								Seniority
							</div>
						}
						variant='outlined'
						type='text'
					/>

					<FormControl sx={{m: 1, width: 200}}>
						<InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
						<Select
							labelId='demo-multiple-checkbox-label'
							id='demo-multiple-checkbox'
							multiple
							value={departments}
							onChange={(e) => handleChange(e, setDepartments)}
							input={<OutlinedInput label='Tag' />}
							renderValue={(selected) => selected.join(', ')}>
							{departmentsList &&
								departmentsList.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox checked={departments.includes(name)} />
										<ListItemText primary={name} />
									</MenuItem>
								))}
						</Select>
					</FormControl>
					<FormControl sx={{m: 1, width: 200}}>
						<InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
						<Select
							labelId='demo-multiple-checkbox-label'
							id='demo-multiple-checkbox'
							multiple
							value={positions}
							onChange={(e) => handleChange(e, setPositions)}
							input={<OutlinedInput label='Tag' />}
							renderValue={(selected) => selected.join(', ')}>
							{positionsList &&
								positionsList.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox checked={positions.includes(name)} />
										<ListItemText primary={name} />
									</MenuItem>
								))}
						</Select>
					</FormControl>
				</div>
				<Button
					variant='contained'
					onClick={id ? udpdateEmployeeData : createNewEmployee}>
					{id ? 'Accept changes' : 'Add new employee'}
				</Button>
			</Card>
		</Container>
	);
};

const mapStateToProps = (state) => ({employees: state.data.employeeList});

export default connect(mapStateToProps, {})(EmployeeDetails);
