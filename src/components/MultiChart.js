import React from 'react'
import ReactApexChart from 'react-apexcharts'

const MultiChart = () => {
    const series = [{
        name: 'Covid cases',
        type: 'column',
        data: [41523320,46693111,21897025,34388579,3831259,8727817,2207890,4248843,9412185,4818705,5019158,6004460,7334332,5299418,4857463,2924317,5032056,3253327,3125179,8290135,1718726,2806694,1713188,519560,914586,1828440]
      }, {
        name: 'Covid deaths per million',
        type: 'line',
        data: [1812,2274,2849,331,2227,1676,6009,519,2090,2194,2489,1500,1760,2547,1155,1488,1873,1794,2063,852,2691,401,1971,1844,3271,2906]
      }]
    

      const options = {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Global Covid Statistcs'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: [],
        xaxis: {
          categories: ["EU","US","Brazil","India","Mexico","Russia","Peru","Indonesia","UK","Italy","Colombia","Iran","France","Argentina","Germany","South Africa","Spain","Ukraine","Poland","Turkey","Romania","Philippines","Chile","Ecuador","Hungary","Czechia"]
        },
        yaxis: [{
          title: {
            text: 'Covid Cases',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Deaths per Million'
          }
        }]
      }
    return (
        <div id='multichart'>
            <ReactApexChart 
                options={options} 
                series={series} 
                type="bar" 
                height='450'
                width='90%'
             />
        </div>
    )
}

export default MultiChart
