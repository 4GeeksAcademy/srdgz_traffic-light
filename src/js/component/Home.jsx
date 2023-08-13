import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState();
	return (
		<>
			<div className='trafficTop d-flex flex-column flex-wrap align-content-center justify-content-center align-items-center bg-dark m-auto'>
				<div className='main d-inline-block bg-dark p-3 rounded'>
					<div onClick={() => setSelectedColor('red')} className={'red light' + ((selectedColor === 'red') ? ' glow' : '')}></div>
					<div onClick={() => setSelectedColor('yellow')} className={'yellow light' + ((selectedColor === 'yellow') ? ' glow' : '')}></div>
					<div onClick={() => setSelectedColor('green')} className={'green light' + ((selectedColor === 'green') ? ' glow' : '')}></div>
				</div>
			</div>
			<button className="btn btn-secondary btn-lg mt-5 ms-5 fs-4" onClick={() => {
				if (selectedColor === 'red') {
					setSelectedColor('yellow');
				} else if (selectedColor === 'yellow') {
					setSelectedColor('green');
				} else {
					setSelectedColor('red');
				}
			}}>
				Change Color
			</button>
		</>
	);
}

export default Home;
