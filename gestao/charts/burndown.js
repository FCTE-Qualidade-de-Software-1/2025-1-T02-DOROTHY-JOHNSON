document.addEventListener('DOMContentLoaded', () => {
    const labels = [
      '30/06', '01/07', '02/07', '03/07', '04/07',
      '05/07', '06/07', '07/07', '08/07', '09/07'
    ];
  
    const plannedPending = [6, 5, 5, 4, 3, 2, 2, 1, 0, 0];
    const realPending    = [6, 6, 5, 5, 4, 3, 3, 3, 3, 0];
  
    const ctx = document.getElementById('burndownChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Planejado',
            data: plannedPending,
            borderColor: '#3b82f6',
            backgroundColor: '#3b82f6',
            fill: false,
            tension: 0.2,
            pointRadius: 5,
          },
          {
            label: 'Real',
            data: realPending,
            borderColor: '#ef4444',
            backgroundColor: '#ef4444',
            fill: false,
            tension: 0.2,
            pointRadius: 5,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Burndown de Tarefas - Planejado x Real'
          },
          legend: { position: 'top' }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Tarefas Pendentes'
            },
            beginAtZero: true,
            ticks: { stepSize: 1 }
          },
          x: {
            title: {
              display: true,
              text: 'Data'
            }
          }
        }
      }
    });
  });
  