import {Fragment} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Tabs/Home/Home';

import {Router, Route, Routes} from 'react-router-dom';

const {createMemoryHistory} = require('history');
function App() {
	const history = createMemoryHistory();

	return (
		<Router location={history.location} navigator={history}>
			<Fragment>
				<div className='App'>
					<Navbar />
					<div className='wrapper'>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</div>
				</div>
			</Fragment>
		</Router>
	);
}

export default App;
