import Chart from 'chart.js/auto';


(async function() {
  const data = [
    { year: null, count: null },
    { year: 2015, count: 38 },
    { year: 2016, count: 43 },
    { year: 2017, count: 49 },
    { year: 2018, count: 52 },
    { year: 2019, count: 53 },
    { year: 2020, count: 56 },
    { year: null, count: null }
  ];

  new Chart(
    document.getElementById('chart'),
    {
      type: 'line',
      options: {
        tension: 0.4,
        maintainAspectRatio: false,
        responsive: true,
        animation: false,
        elements: {
          point: {
            pointBackgroundColor: '#e01e2e',
            pointBorderColor: '#e01e2e'
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#666666',
              padding: 20
            }
          },
          y: {
            min: 30,
            max: 60,
            grid: {
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              callback: (value) => `${value}%`,
              color: '#999999',
              padding: 20
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            borderColor: '#e01e2e',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
