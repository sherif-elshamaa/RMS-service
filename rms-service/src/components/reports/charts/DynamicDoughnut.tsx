import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    BarElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const dynamicdoughnut: React.FC = () => {
    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getState = () => ({
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
            backgroundColor: [
                '#CCC',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    });
    const [data, setData] = useState(getState)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setData(getState)
        },1000)

        return () => clearInterval(interval)
    },[])
    
    return (
        <div className="h-full flex justify-center">
            <div className="w-52 h-52 ">
                <h2>Dynamic Doughnut Example</h2>
                <Doughnut
                    data={data}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}

export default dynamicdoughnut