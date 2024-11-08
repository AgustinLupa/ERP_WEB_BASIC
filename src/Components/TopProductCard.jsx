const TopProductCard = () => {
  const topProduct = {
    name: 'Product A',
    sales: 350,
    description: 'Top-selling product of the year',
  };

  return (
    <div className="card shadow-sm" style={{ maxWidth: '700px', marginLeft: '30px' }}>
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Producto mas vendido del mes</h5>
      </div>
      <div className="card-body">
        <h6 className="card-title">{topProduct.name}</h6>
        <p className="card-text">Sales: {topProduct.sales}</p>
        <p className="text-muted">{topProduct.description}</p>
      </div>
    </div>
  );
};

export default TopProductCard;