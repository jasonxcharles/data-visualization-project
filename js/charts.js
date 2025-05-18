const foodData = {
  labels: ['Pizza - Jason', 'Bagels', 'Bacon Egg & Cheese', 'Halal', 'Dumplings', 'Hot Dogs'],
  datasets: [{
    label: 'Votes',
    data: [25, 20, 18, 15, 12, 10],
    backgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
    ],
  }]
};

const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(doughnutCtx, {
  type: 'doughnut',
  data: foodData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Jason A. Charles - Favorite NYC Foods (Doughnut Chart)'
      }
    }
  }
});

const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: foodData,
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Jason A. Charles - Favorite NYC Foods (Horizontal Bar Chart)'
      },
      legend: {
        display: false
      }
    }
  }
});
