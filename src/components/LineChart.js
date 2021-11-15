import React from 'react'
import ReactApexChart from 'react-apexcharts'

const LineChart = () => {
    const series = [
        {
          name: "US",
          data: [366, 469, 529, 558, 577, 592, 601, 610, 643, 696, 739]
        },
        {
          name: "Brasil",
          data: [193, 223, 254, 317, 401, 461, 515, 555, 579, 596, 607]
        },
        {
          name: "India",
          data: [148, 154, 157, 162, 211, 331, 399, 424, 439, 448, 458]
        },
        {
          name: "Mexico",
          data: [148, 186, 210, 223, 230, 234, 237, 245, 266, 281, 288]
        },
        {
          name: "Russia",
          data: [57, 73, 86, 99, 110, 121, 135, 159, 184, 208, 239]
        }
      ]
      const options = {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 200
            }
          }
        },
        colors: ['#77B6EA', '#545454', '#DE3163', '#FFBF00', '#FF7F50'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Cumulative COVID deaths ',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          title: {
            text: 'Month'
          },
          
        },
        yaxis: {
          title: {
            text: 'cumulative deaths (in thousands)'
          },
          min: 60,
          max: 800
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        },
        annotations: {
            xaxis: [
              {
                x: 'Mar',
                borderColor: '#664411',
                label: {
                  borderColor: '#0b0b0b',
                  style: {
                    color: '#fff',
                    background: '#664411'
                  },
                  text: 'Onset of Delta variant'
                }
              }
            ]
          },
      }
    return (
        <div>
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    )
}

export default LineChart
