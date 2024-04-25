import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

class MyChart extends React.Component{
    render(){
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                labels: 'Sales',
                data: [65,59,80,81,56,55],
                backgroundColor: 'rgba(75,192,192,0.6)',
                },
            ],
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        return(
            <div>
                <Bar data = {data} options = {options} />
            </div>
        )
    }
}

export default MyChart;