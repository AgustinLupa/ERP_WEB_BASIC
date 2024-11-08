import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrar los componentes necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = () => {
  // Datos de ejemplo para el gráfico
  const products = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
  const sales = [120, -80, 150, 200, -50]; // Valores positivos y negativos

  const data = {
    labels: products,
    datasets: [
      {
        label: 'Ventas',
        data: sales,
        backgroundColor: sales.map(value =>
          value >= 0 ? 'rgba(75, 192, 192, 0.7)' : 'rgba(255, 99, 132, 0.7)'
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => {
            const value = context.raw;
            return value >= 0 ? `+${value}` : `${value}`;
          },
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: {
          callback: value => (value >= 0 ? `+${value}` : `${value}`),
        },
      },
    },
  };

  return (
    <div className="card shadow-sm" style={{ marginLeft: '20px', maxWidth: '700px' }}>
      <div className="card-header bg-primary text-white txt-center">
        <h5 className="mb-0">Ventas por mes vs ventas mes año anterior</h5>
      </div>
      <div className="card-body" style={{ height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;