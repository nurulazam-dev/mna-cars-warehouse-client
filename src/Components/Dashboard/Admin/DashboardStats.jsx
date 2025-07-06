import InfoContainer from "./DashboardHome/InfoContainer";
import DistributionPieChart from "./DashboardHome/DistributionPieChart";
import {
  useItemsStatistics,
  useUsersStatistics,
} from "../../../hooks/statisticsData";
import OrdersPieChart from "./DashboardHome/OrdersPieChart";
import PieDemo from "./DashboardHome/PieDemo";

const DashboardStats = () => {
  const { totalUsers, totalAdmins, totalRegularUsers } = useUsersStatistics();
  const { totalItems, totalBrands, totalQty, totalSuppliers } =
    useItemsStatistics();

  return (
    <div>
      <OrdersPieChart />
      <PieDemo />
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Registered Users</div>
            <div className="card-body pb-0">
              <h4>{totalUsers}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card text-white mb-3"
            style={{ backgroundColor: "#6c757d" }}
          >
            <div className="card-header">Admins</div>
            <div className="card-body pb-0">
              <h4>{totalAdmins}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Active Users</div>
            <div className="card-body pb-0">
              <h4>{totalRegularUsers}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Suppliers</div>
            <div className="card-body pb-0">
              <h4>{totalSuppliers}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Items</div>
            <div className="card-body pb-0">
              <h4>{totalItems}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Brands</div>
            <div className="card-body pb-0">
              <h4>{totalBrands}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Total Quantities</div>
            <div className="card-body pb-0">
              <h4>{totalQty}</h4>
            </div>
          </div>
        </div>
      </div>

      <InfoContainer />
      <DistributionPieChart />
    </div>
  );
};

export default DashboardStats;
