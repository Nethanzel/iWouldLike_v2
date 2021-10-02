const doughnutChart = require("./doughnut");
const barsChart = require("./bars");

function Generate(data) {
    let doughnut = doughnutChart.generateDougnut(data[0]);
    let bars = barsChart.generateBars(data[1])
    return {
        doughnut,
        bars
    }
}

module.exports.Generate = Generate;