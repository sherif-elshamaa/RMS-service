import React from 'react';
import { Doughnut } from 'react-chartjs-2'

const doughnut: React.FC = () => {

    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <div className="h-full flex justify-center">
            <div className="w-52 h-52 "> 
                <h2>Doughnut Example</h2>
                <Doughnut
                    data={data}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}

export default doughnut