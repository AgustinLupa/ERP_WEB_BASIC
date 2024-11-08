import Sidebar from './Sidebar';
import Header from './Header';
import Graph from './Graph';
import TopProductCard from './TopProductCard';
import MonthlyExpensesCard from './MonthlyExpensesCard';
import CashFlowCard from './CashFlowCard';
import DebtsAndInvoicesCard from './DebtsAndInvoicesCard';

const Dashboard = () => {
    return (
      <div className="d-flex vh-100">
        
        <Sidebar />
  
       
        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
            <Header title="Dashboard" />
            <div className="container-sm d-flex flex-wrap justify-content-start">
           
                <div className="col-lg-4 col-md-6 mb-4">
                <Graph />
                </div>                            
                
                <div className="col-lg-4 col-md-6 mb-4">
                <MonthlyExpensesCard />
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                <TopProductCard />
                </div>
            </div>

            <div className="container-sm d-flex flex-wrap justify-content-start">
                <div className="col-lg-4 col-md-6 mb-4">
                    <CashFlowCard />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <DebtsAndInvoicesCard />
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;