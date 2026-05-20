// charts.js

// Wait for page to load
document.addEventListener("DOMContentLoaded", function(){

const chartCanvas = document.getElementById("riskChart");

if(chartCanvas){

// Example data (can later come from backend)
const data = {
    labels: ["Social Media", "Public Data", "Forums", "Other"],
    datasets: [{
        label: "Digital Footprint Sources",
        data: [40, 25, 20, 15],
        backgroundColor: [
            "#3498db",
            "#e74c3c",
            "#f1c40f",
            "#2ecc71"
        ]
    }]
};

// Chart configuration
const config = {
    type: "pie",
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
};

// Create chart
new Chart(chartCanvas, config);

}

});