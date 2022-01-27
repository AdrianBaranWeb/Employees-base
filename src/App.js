import {Fragment} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Tabs/Home/Home';
import Login from './components/Tabs/Login/Login';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
	return (
		<Router >
			<Fragment>
				<div className='App'>
					<Navbar />
					<div className='wrapper'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</div>
				</div>
			</Fragment>
		</Router>
	);
}

export default App;
