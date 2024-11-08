const CashFlowCard = () => {
    const totalIncome = 50000;
    const totalExpenses = 30000;
    const cashFlow = totalIncome - totalExpenses;
  
    return (
        <div className="card shadow-sm" style={{ height: '100%', minHeight: '100px', marginLeft: '20px' }}>
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Cash Flow</h5>
            </div>
            <div className="card-body">
                <h6 className="card-title">Ingresos: ${totalIncome}</h6>
                <h6 className="card-title">Egresos: ${totalExpenses}</h6>
                <h5 className={`card-title ${cashFlow >= 0 ? 'text-success' : 'text-danger'}`} style={{marginTop: '40px'}}>
                    {cashFlow >= 0 ? 'Saldo positivo' : 'Saldo negativo'}: ${cashFlow}
                </h5>
            </div>
      </div>
    );
  };
  
  export default CashFlowCard;