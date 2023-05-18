export const data = {
    labels: ['виплачено', 'залишилося'],
    datasets: [
      {
        backgroundColor: [                
          'rgba(204, 163, 59, 0.5)',
          'rgba(204, 163, 59, 0.0)'],
        data: [0.75, 0.25],
        borderColor: '#CCA43B',
        borderWidth: 1,
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
         display: false
      }
  }
  }
  