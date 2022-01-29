import {Fragment, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Tabs/Home/Home';
import Login from './components/Tabs/Login/Login';
import EmployeeDetails from './components/Tabs/EmployeeDetails/EmployeeDetails';
import EmployeeDelete from './components/Tabs/EmployeeDelete/EmployeeDelete';
import {updateData} from './actions';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App({updateData}) {
	useEffect(() => {
		fetch('http://localhost:8000/employees')
			.then((e) => e.json())
			.then((newData) => updateData(newData))
			.catch((err) => new Error(err.message));
	}, [updateData]);

	return (
		<Router >
			<Fragment>
				<div className='App'>
					<Navbar />
					<div className='wrapper'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
							<Route path='/details' element={<EmployeeDetails />} />
							<Route path='/details/:id' element={<EmployeeDetails />} />
							<Route path='/employee-delete/:id' element={<EmployeeDelete />} />
						</Routes>
					</div>
				</div>
			</Fragment>
		</Router>
	);
}
const mapStateToProps = (state) => {
	return {data: state.data};
};
export default connect(mapStateToProps, {updateData})(App);
