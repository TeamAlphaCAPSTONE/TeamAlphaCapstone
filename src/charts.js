import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import DonutChart from 'react-donut-chart';

class PieChart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            labels: ['Your Score','To be 100'],
            datasets: [{
                data: [78,22],
                backgroundColor: ['green','red']
            }],
            datasetsseo: [{
                data: [88,12],
                backgroundColor: ['blue','yellow']
            }]
        }
    }


render() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <Doughnut 
                                data={{
                                    labels : this.state.labels,
                                    datasets: this.state.datasets
                                }}
                                height = '100%'
                                // width = '20px'
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                  }}

                        />
                        <h5>SEO General Grades</h5>
                    </div>
                    <div class="col-sm">
                        <Doughnut 
                            data={{
                                labels : this.state.labels,
                                datasets: this.state.datasetsseo
                            }}
                             height = '100%'
                            // options={{
                            //     responsive: true,
                            //     maintainAspectRatio: true,
                            //   }}
                        />
                        <h5>AODA General Grades</h5>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PieChart;