import React, { Component } from 'react';
import './meter.css';
import './meterData'; 
import './App.css';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {SeoModel} from './SeoModel';
import {ProgressBar} from 'react-bootstrap';

export default class Meter extends Component{
	constructor(props)
	{
		super(props);
		this.state={addModelShow:false}
	}
	render(){
		let addModelClose=()=>this.setState({addModelShow:false});
		const now = 60;

const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
		
    return (
		


		<div id="maindiv">
        <div className="gauge">
				<h1>Seo</h1>
			<ul className="meter">
				<li className="low"></li>
				<li className="normal"></li>
				<li className="high"></li>
			</ul>
		

			<div className="dial" >
					<div className="inner">
						<div className="arrow">
						</div>
					</div>
			</div>

			<div className="value" >
				0%
			</div>

	</div>

	<div className="gauge1">
				<h1>Aoda</h1>
			<ul className="meter">
				<li className="low"></li>
				<li className="normal"></li>
				<li className="high"></li>
			</ul>
		

			<div className="dial1" >
					<div className="inner">
						<div className="arrow">
						</div>
					</div>
			</div>

			<div className="value1" >
				0%
			</div>

	</div>
   
	<progressInstance/>
       <ButtonToolbar>
		   <Button
		   variate='primary'
		   onClick={()=>this.setState({addModelShow:true})}
		   
		   > Points1.. </Button>
		   <SeoModel
		   show={this.state.addModelShow}
		   onHide={addModelClose}
		   />
	   </ButtonToolbar>
	  
	   </div>

		
	);
	}
}

