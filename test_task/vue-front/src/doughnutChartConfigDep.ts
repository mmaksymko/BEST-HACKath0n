export const data = {
    labels: ['виплачено', 'залишилося'],
    datasets: [
      {
        backgroundColor: [                
          'rgba(36, 47, 64, 0.5)',
          'rgba(36, 47, 64, 0.0)'],
        data: [0.75, 0.25],
        borderColor: '#242F40',
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
  