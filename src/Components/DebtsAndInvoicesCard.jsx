const DebtsAndInvoicesCard = () => {
    const debts = [
      { id: 1, name: 'Factura de proveedores', amount: 1500, dueDate: '2024-11-10', status: 'pending' },
      { id: 2, name: 'Pago de impuestos', amount: 3200, dueDate: '2024-11-15', status: 'overdue' },
      { id: 3, name: 'Pago de alquiler', amount: 2000, dueDate: '2024-11-20', status: 'pending' },
      { id: 4, name: 'Pago de servicios', amount: 800, dueDate: '2024-11-25', status: 'paid' },
    ];
  
    return (
      <div className="card shadow-sm mb-3" style={{ minHeight: '2px', maxWidth: '400px', marginLeft: '30px' }}>
        <div className="card-header bg-warning text-white">
          <h5 className="mb-0">Deudas Pendientes y Facturas por Pagar</h5>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {debts.map((debt) => (
              <li
                key={debt.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  debt.status === 'pending' ? 'bg-light' : debt.status === 'overdue' ? 'bg-danger text-white' : 'bg-success text-white'
                }`}
              >
                <span>{debt.name}</span>
                <span>${debt.amount}</span>
                <span className="badge">
                  {debt.status === 'pending'
                    ? `Vence el: ${debt.dueDate}`
                    : debt.status === 'overdue'
                    ? 'Vencida'
                    : 'Pagada'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default DebtsAndInvoicesCard;