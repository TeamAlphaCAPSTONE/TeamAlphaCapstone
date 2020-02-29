import GaugeChart from 'react-gauge-chart'
import React from 'react';
 import  './App.css';
const chartStyle = {
    height: 250,
    width:500
  }
   
const NewMeter = (props) => {
	
    return (
	
             <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <br>
                        </br>
                        <h1 className="textcolor"> SEO </h1>
                                <GaugeChart id="gauge-chart2" style={chartStyle}
                        nrOfLevels={20} 
                        percent={0.86} 
                        arcWidth={0.3}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        animDelay={2000}
                        />
                    </div>
                    <div class="col-sm">
                        <br>
                        </br>
                        <h1 className="textcolor"> AODA</h1>
                            <GaugeChart id="gauge-chart3" style={chartStyle}
                    nrOfLevels={20} 
                    percent={0.40} 
                    arcWidth={0.3}
                    animDelay={2000}
/>
                    </div>
</div>
</div>
    );
}

export default NewMeter;