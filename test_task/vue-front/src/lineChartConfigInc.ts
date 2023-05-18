export const data = {
    labels: ['вересень', 'жовтень', 'листопад', 'грудень'],
    datasets: [
      {
        backgroundColor: '#33673B',
        borderColor: '#33673B',
        data: [18000, 16000, 15672, 17200]
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
  