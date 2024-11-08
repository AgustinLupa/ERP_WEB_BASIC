
const Sidebar = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: '200px' }}>
      <h4>Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white">Analytics</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white">Reports</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;