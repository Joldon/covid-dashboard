import React from 'react'
import ReactApexChart from 'react-apexcharts'

const LineChart = () => {
    const series = [{
        name: 'Covid deaths per million',
        type: 'line',
        data: [1812,2274,2849,331,2227,1676,6009,519,2090,2194,2489,1500,1760,2547,1155,1488,1873,1794,2063,852,2691,401,1971,1844,3271,2906]
      }, 
            // name: 'Covid cases',
            // type: 'column',
            // data: [41523320,46693111,21897025,34388579,3831259,8727817,2207890,4248843,9412185,4818705,5019158,6004460,7334332,5299418,4857463,2924317,5032056,3253327,3125179,8290135,1718726,2806694,1713188,519560,914586,1828440]
          ]
      const options = {
        chart: {
          height: 350,
          type: 'line',
          id: 'areachart-2'
        },
        annotations: {
          yaxis: [{
            y: 2200,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'Support',
            }
          }, {
            y: 600,
            y2: 1100,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
              borderColor: '#333',
              style: {
                fontSize: '10px',
                color: '#333',
                background: '#FEB019',
              },
              text: 'Y-axis range',
            }
          }],
          xaxis: [{
            x: new Date('23 Aug 2021').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: 'Anno Test',
            }
          }, {
            x: new Date('26 Oct 2021').getTime(),
            x2: new Date('28 Oct 2021').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
              borderColor: '#B3F7CA',
              style: {
                fontSize: '10px',
                color: '#fff',
                background: '#00E396',
              },
              offsetY: -10,
              text: 'X-axis range',
            }
          }],
          points: [{
            x: new Date('01 Dec 2021').getTime(),
            y: 607.55,
            marker: {
              size: 8,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            },
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },
        
              text: 'Point Annotation',
            }
          }, {
            x: new Date('08 Sep 2021').getTime(),
            y: 940.85,
            marker: {
              size: 0
            },
            image: {
              path: '../../assets/images/ico-instagram.png'
            }
          }]
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },
        title: {
          text: 'Line with Annotations',
          align: 'left'
        },
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        xaxis: {
        //   type: 'datetime',
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
      }
    return (
        <div>
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    )
}

export default LineChart
