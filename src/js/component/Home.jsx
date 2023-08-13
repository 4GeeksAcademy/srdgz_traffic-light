import React, { useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState();

	return (
		<>
			<div className='trafficTop d-flex flex-column flex-wrap align-content-center justify-content-center align-items-center bg-dark m-auto'>
				<div className='main d-inline-block bg-dark p-3 rounded'>
					<div id='red' onClick={() => setSelectedColor('red')}  className={'red light' + ((selectedColor === 'red') ? ' glow' : '')}></div>
					<div id='yellow' onClick={() => setSelectedColor('yellow')} className={'yellow light' + ((selectedColor === 'yellow') ? ' glow' : '')}></div>
					<div id='green' onClick={() => setSelectedColor('green')} className={'green light' + ((selectedColor === 'green') ? ' glow' : '')}></div>
					<div id='purple' className="purple light glow"></div>
				</div>
			</div>
			<button className="btn btn-outline-secondary btn-lg d-grid col-2 my-5 mx-auto fs-4" onClick={() => {
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
			<button className="btn btn-outline-secondary btn-lg d-grid col-2 mx-auto fs-4" onClick={() => {
				let purpleLight = document.getElementById('purple');
				if (purpleLight.style.display === 'block') {
					purpleLight.style.display = 'none';
				} else {
					purpleLight.style.display = 'block';
					document.getElementById('red').classList.remove('glow');
					document.getElementById('yellow').classList.remove('glow');
					document.getElementById('green').classList.remove('glow');
				  }
			}}>
				Purple color
			</button>
		</>
	);
}

export default Home;
