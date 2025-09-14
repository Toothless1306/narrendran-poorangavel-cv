import React from 'react';
import './App.css';
import Resume from './pages/CV';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import DynamicFavicon from './component/DynamicFavicon';
// import NPLogo from './component/logo';

function App() {
	return (
		<div className='App'>
			{/* <DynamicFavicon /> */}
			{/* <NPLogo /> */}
			<Resume />
		</div>
	);
}

export default App;
