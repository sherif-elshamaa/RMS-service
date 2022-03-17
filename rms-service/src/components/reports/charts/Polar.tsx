import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const borizontalbar: React.FC = () => {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    };

    return (
        <div className="h-full flex justify-center">
            <div className="w-72 h-72 ">
                <h2>Polar Example</h2>
                <PolarArea
                    data={data}
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}

export default borizontalbar
