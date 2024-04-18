import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Black", "White", "Gray"],
            datasets: [
                {
                    label: 'Best Colour',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: [
                        'rgb(53,162,235)',
                        'rgb(34,198,234)',
                        'rgb(89,234,198)',
                        'rgb(17,222,123)',
                        'rgb(1,2,235)',
                        'rgb(78,45,58)',
                        'rgb(222,111,212)'
                    ],
                    backgroundColor: [
                        'rgb(53,162,235)',
                        'rgb(34,198,234)',
                        'rgb(89,234,198)',
                        'rgb(17,222,123)',
                        'rgb(1,2,235)',
                        'rgb(78,45,58)',
                        'rgb(222,111,212)'
                    ],
                    borderWidth: 1,
                }
            ]
        })
setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
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
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "500px"}}/>
                </div>
                </>

    )
}