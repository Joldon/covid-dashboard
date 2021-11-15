import React from 'react'
import ReactApexChart from 'react-apexcharts'

const BarChart = () => {
    const series = [
        {
          name: 'Deaths',
          data: [
            {
              x: 'US',
              y: 757000,
              goals: [
                {
                  name: 'Lockdown',
                  value: 433000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'Brasil',
              y: 610000,
              goals: [
                {
                  name: 'Lockdown',
                  value: 540000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'India',
              y: 462000,
              goals: [
                {
                  name: 'Lockdown',
                  value: 520000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'Mexico',
              y: 290000,
              goals: [
                {
                  name: 'Lockdown',
                  value: 200000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'Russia',
              y: 245000,
              goals: [
                {
                  name: 'Lockdown',
                  value: 230000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: 'Peru',
              y: 200000,
              goals: [
                {
                  name: 'Lockdown',
                  value: 200000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
                x: 'Indonesia',
                y: 143000,
                goals: [
                  {
                    name: 'Lockdown',
                    value: 90000,
                    strokeWidth: 5,
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: 'UK',
                y: 142000,
                goals: [
                  {
                    name: 'Lockdown',
                    value: 140000,
                    strokeWidth: 5,
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: 'Italy',
                y: 132000,
                goals: [
                  {
                    // name: 'Expected',
                    value: 70000,
                    strokeWidth: 5,
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: 'Colombia',
                y: 127000,
                goals: [
                  {
                    // name: 'Expected',
                    value: 23000,
                    strokeWidth: 5,
                    strokeColor: '#775DD0'
                  }
                ]
              }
              
          ]
        }
      ]

    // const series = [{
    //     name: 'Covid cases (in thousands)',
    //     data: [46693,
    //         21897,
    //         34388,
    //         3831,
    //         8727,
    //         2207,
    //         4248,
    //         9412,
    //         4818,
    //         5019]
    //   }]
      const options = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            }
          }
        },
        title: {
            text: 'Ten Most Affected Countries'
          },
        subtitle: {
            text: 'Covid deaths and lockdown decisions per country'
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ["US","Brazil ","India","Mexico","Russia","Peru","Indonesia","UK","Italy","Colombia"
          ],
        },
        colors: ['#00E396'],
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Covid Deaths', 'Threshold Decision for Lockdown'],
            markers: {
              fillColors: ['#00E396', '#775DD0']
            }
        }
      }
    
    return (
        <div id='barchart'>
            <ReactApexChart 
            options={options} 
            series={series} 
            type="bar" 
            height={350} />
        </div>
    )
}

export default BarChart
