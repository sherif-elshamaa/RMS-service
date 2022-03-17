import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'

const crazyline: React.FC = () => {
    const [data, setData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    })

    useEffect(() => {
        const interval = setInterval(() => {
            var oldDataSet = data.datasets[0];
            var newData = [];

            for(var x=0; x<data.labels.length; x++) {
                newData.push(Math.floor(Math.random() * 100));
            }

            var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;
			newDataSet.backgroundColor = 'red';
			newDataSet.borderColor = 'blue';
			newDataSet.hoverBackgroundColor = 'green';
			newDataSet.hoverBorderColor = 'yellow';
            setData({
                ...data,
                datasets: [newDataSet]
            })
        },5000)

        return () => clearInterval(interval)

    },[])
    return (
        <div className="h-full flex justify-center">
            <div className="w-96 h-56 ">
                <h2>Bar Example (custom size)</h2>
                <Bar
                    data={data}
                />
            </div>
        </div>
    )
}

export default crazyline