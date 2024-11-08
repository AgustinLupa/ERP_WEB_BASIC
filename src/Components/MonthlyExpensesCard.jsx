const MonthlyExpensesCard = () => {
    const totalExpenses = 12000;
    const expensesBreakdown = [
      { category: 'Sueldos', amount: 6000 },
      { category: 'Compras', amount: 3500 },
      { category: 'Mantenimiento', amount: 1000 },
      { category: 'Marketing', amount: 1500 },
    ];
  
    return (
      <div className="card shadow-sm" style={{ height: '100%', minHeight: '300px', marginLeft: '30px' }}>
        <div className="card-header bg-warning text-white">
          <h5 className="mb-0">Gastos del Mes</h5>
        </div>
        <div className="card-body">
          <h6 className="card-title">Total: ${totalExpenses}</h6>
          <ul className="list-group">
            {expensesBreakdown.map((expense, index) => (
              <li className="list-group-item d-flex justify-content-between" key={index}>
                <span>{expense.category}</span>
                <span>${expense.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default MonthlyExpensesCard;