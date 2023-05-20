export const data = {
  labels: ['вересень', 'жовтень', 'листопад', 'грудень'],
  datasets: [
    {
      backgroundColor: '#CC3F0C',
      borderColor: '#CC3F0C',
      data: [5678, 9842, 6564, 15600]
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
