document.addEventListener('DOMContentLoaded', () => {
  Chart.register(ChartDataLabels);

  const tasks = [
    { nome: "Subir GitHub Pages", tempo: 2 },
    { nome: "Fase 1", tempo: 2 },
    { nome: "Fase 2 - Definição", tempo: 12 },
    { nome: "Fase 2 - Estabelecer níveis", tempo: 1 },
    { nome: "Fase 2 - Estabelecer critérios", tempo: 1 },
    { nome: "Fase 3", tempo: 3 },
    { nome: "Fase 4 - Coleta de Dados", tempo: 4 },
    { nome: "Fase 4 - Configuração Q-Rapids", tempo: 3 },
    { nome: "Fase 4 - Comparar com critérios", tempo: 1 },
    { nome: "Fase 4 - Julgar resultados", tempo: 1 },
    { nome: "Fase 4 - Ação de melhoria", tempo: 1 }
  ];

  // Contar tarefas por tempo exato
  const counts = {};
  tasks.forEach(t => {
    counts[t.tempo] = (counts[t.tempo] || 0) + 1;
  });

  // Tempos únicos ordenados
  const tempos = Object.keys(counts).map(Number).sort((a, b) => a - b);

  // Quantidade máxima para normalizar
  const maxCount = Math.max(...Object.values(counts));

  // Barras: percentual relativo ao máximo (para a barra maior chegar a 100%)
  const barrasPercentual = tempos.map(t => (counts[t] / maxCount) * 100);

  // Percentual acumulado de tarefas (com base em total)
  const total = tasks.length;
  const percentuais = tempos.map(t => (counts[t] / total) * 100);

  const acumulados = [];
  percentuais.reduce((acc, val) => {
    const soma = acc + val;
    acumulados.push(soma);
    return soma;
  }, 0);

  const ctx = document.getElementById('cycleTimeChart').getContext('2d');

  new Chart(ctx, {
    plugins: [ChartDataLabels],
    data: {
      labels: tempos,
      datasets: [
          {
            type: 'line', // Place the line chart second to ensure it renders on top
            label: 'Percentual acumulado (%)',
            data: acumulados,
            borderColor: '#eab308',
            backgroundColor: '#eab308',
            fill: false,
            tension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: '#eab308',
            datalabels: { display: false }
          },
            {
            type: 'bar', // Keep the bar chart first
            label: 'Tempo de Ciclo (dias)',
            data: barrasPercentual,
            backgroundColor: '#4f46e5',
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: '#000',
                font: { weight: 'bold' },
                formatter: (value, context) => counts[context.chart.data.labels[context.dataIndex]]
            }
            },
      ]
    },
    options: {
      scales: {
        y: {
          min: 0,
          max: 110, // um pouco acima de 100 para espaço do label
          title: { display: true, text: 'Percentual (%)' },
          ticks: { stepSize: 10 }
        },
        x: {
          title: { display: true, text: 'Tempo de Ciclo (dias)' }
        }
      },
      plugins: {
        legend: { display: true },
        datalabels: {
          display: true,
        }
      }
    }
  });
});
