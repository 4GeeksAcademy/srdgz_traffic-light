import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState('red');
	return (
		<div className='trafficTop d-flex flex-column flex-wrap align-content-center justify-content-center align-items-center bg-dark m-auto'>
			<div className='main d-inline-block bg-dark p-3 rounded'>
				<div onClick={() => setSelectedColor('red')} className={'red light'+((selectedColor === 'red') ? ' glow' : '')}></div>
				<div onClick={() => setSelectedColor('yellow')} className={'yellow light' +((selectedColor === 'yellow') ? ' glow' : '')}></div>
				<div onClick={() => setSelectedColor('green')} className={'green light' +((selectedColor === 'green') ? ' glow' : '')}></div>
			</div>
		</div>
	);
};

export default Home;
