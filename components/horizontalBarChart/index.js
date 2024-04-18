import styles from "@/components/barCharts/barchart.module.css"
import {Bar} from "react-chartjs-2"

import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)
export default function HorizontalBarchart() {
const [chartData, setChartData] = useState({
    datasets: []
})
const [chartOptions, setChartOptions] = useState({});

useEffect(() =>{
    setChartData({
        labels: ["Sun", "Mon", "tuesday", "Wed", "thu", "fri", "sat", ],
        datasets:[
            {
                label: 'Data 1', 
                data: [10, 6, 15, 20, 12, 4, 5],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
            },
            {
                label: 'Data 2', 
                data: [2, 6, 4, 20, 20, 4, 14],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
            },
            {
                label: 'Data 3', 
                data: [20, 6, 4, 25, 3, 4, 5],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)'
            }
        ]
    })
    setChartOptions({
        indexAxis: 'y',
        plugins:{
            legend:{
                position: 'top'
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            },
            maintainAspectRatio: false,
            responsive: true
        }
    })
})
return(
    <>
    <div> 
        <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "500px"}}/>
    </div>
    </>
)
}