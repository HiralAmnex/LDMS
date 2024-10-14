const xValues_1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// Initial chart setup
const chart = new Chart("myChart_1", {
    type: "line",
    data: {
        labels: xValues_1,
        datasets: [{
                data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 8478],
                borderColor: "red",
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                label: 'Voltage' // Correct property name for dataset label
            },
            {
                data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                borderColor: "green",
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                label: 'Current' // Correct property name for dataset label
            },
            {
                data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
                borderColor: "blue",
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                label: 'Frequency' // Correct property name for dataset label
            }
        ]
    },
    options: {
        legend: {
            display: true
        }
    }
});

// Function to update chart data
function updateChartData() {
    // Shift the first element of each dataset to the end
    chart.data.datasets.forEach(dataset => {
        const firstElement = dataset.data.shift();
        dataset.data.push(firstElement);
    });
    // Update chart
    chart.update();
}

// Update chart data every second
setInterval(updateChartData, 1000);
