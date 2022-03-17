import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';


const pie: React.FC = () => {
  // const [legend, setLegend] = useState();
  // const { value, setValue } = useState();
  // useEffect(() => {

  //     try {
  //       const opts = JSON.parse(value);
  //       setLegend({
  //         legend: opts
  //       });
  //     } catch(e) {
  //       alert(e.message);
  //       throw Error(e);
  //     }

  // },[])

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
  // const legendOpts = {
  //   onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
  //   onHover: (e, item) => alert(`Item with text ${item.text} and index ${item.index} hovered`),
  // };


  const dataHorBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#EC932F',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My First dataset 2',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <div className="h-full flex justify-center">
      <div className="w-52 h-52 ">
        <h2>Legend Handlers Example</h2>
        <p>Hover over label and click</p>
        <Pie data={data} />
      </div>
    </div >

  )
}

export default pie