const xValues_2 = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart_2", {
  type: "line",
  data: {
    labels: xValues_2,
    datasets: [{ 
      data: [4860,1140,960,1060,4070,1210,1330,8110,4830,1478],
      borderColor: "red",
      borderWidth: 2,
      pointRadius: 2, // Set point radius to 0 for no dots
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,4830,4000],
      borderColor: "green",
      borderWidth: 2,
      pointRadius: 2, // Set point radius to 0 for no dots
    }]
  },
  options: {
    legend: {display: true}
  }
});