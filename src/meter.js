import React from 'react';
import './meter.css';
import './meterData'; 
import './App.css';

const Meter = (props) => {
	
    return (
		
        <div className="gauge">
			<ul className="meter">
				<li className="low"></li>
				<li className="normal"></li>
				<li className="high"></li>
			</ul>

			<div className="dial" >
					<div className="inner" id="xyz">
						<div className="arrow">
						</div>
					</div>
			</div>

			<div className="value" >
				0%
			</div>

		</div>
    );
}

export default Meter;