const QuickChart = require("quickchart-js");

function generateDougnut(data) {
    const qChart = new QuickChart();
    qChart.setConfig({
        type: 'doughnut',
        data: {
            labels: ["Logrado", "Restante"],
            datasets: [{
                label: "Label",
                data: data,

                borderWidth: 1,
                backgroundColor: ['rgba(83, 255, 120, 0.75)',
                                'rgba(50, 150, 50, 0.35)'],
                borderColor: 'rgba(0, 0, 0, 0.45)',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            
            legend: {
                display: true
            },

            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)',
                        drawOnCharArea: false,
                        zeroLineColor: 'rgba(0, 0, 0, 0)'
                    },
                    ticks: {
                        beginAtZero: false,
                        display: false
                    },
                }],
                yAxes: [{
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)',
                        zeroLineColor: 'rgba(0, 0, 0, 0)'
                    },
                    
                    ticks: {
                        beginAtZero: false,
                        display: false,
                    },
                }]
            }
        }
    })
    .setWidth(800)
    .setHeight(400)
    .setBackgroundColor('#E0E0E0');

    return qChart.getUrl();
}

module.exports.generateDougnut = generateDougnut;