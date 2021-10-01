const QuickChart = require("quickchart-js");

function generateBars(data) {
    const qChart = new QuickChart();

    let max = () => {
        try {
            if(data[1][1] > 1) {
                return (parseInt(data[1][0]) * parseInt(data[1][1])) / data[0].length;
            }
            return parseInt(data[1][0]);
        } catch (error) {
            return 0;
        }
    }

    qChart.setConfig({
        type: 'horizontalBar',
        data: {
            labels: ["Azua", "Bahoruco", "Barahona", "Dajabón", "D. N.", "Duarte", "Elias Piña", "El Seibo",
            "Espaillat", "Hato Mayor", "Hnas. Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega",
            "M. T. Sanchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", 
            "Puerto Plata", "Samaná", "San Cristóbal", "San J. de Ocoa", "San Juan", "S. P. de Macorís",
            "S. Ramírez", "Santiago", "Stgo. Rodríguez", "Santo Domingo", "Valverde"],
            datasets: [{
                label: "Participantes",
                data: data[0],
                borderWidth: 1,
                backgroundColor: 'rgba(83, 255, 120, 0.65)',
                borderColor: "rgba(0, 0, 0, 0.8)",
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)',
                        drawOnCharArea: false,
                        zeroLineColor: 'rgba(0, 0, 0, 0)'
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        max: max()
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)',
                        zeroLineColor: 'rgba(0, 0, 0, 0)'
                    },
                    ticks: {
                        display: true,
                        fontColor: '#000',
                    }
                }]
            }
        }
    })
    .setWidth(1100)
    .setHeight(600)
    .setBackgroundColor('#E0E0E0');

    return qChart.getUrl();
}

module.exports.generateBars = generateBars;