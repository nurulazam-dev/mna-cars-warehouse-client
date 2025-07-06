import InfoContainer from "./DashboardHome/InfoContainer";
import DistributionPieChart from "./DashboardHome/DistributionPieChart";
import {
  useItemsStatistics,
  useOrdersStatistics,
  useUsersStatistics,
} from "../../../hooks/statisticsData";
import OrdersPieChart from "./DashboardHome/OrdersPieChart";

const DashboardStats = () => {
  const { totalUsers, totalAdmins, totalRegularUsers } = useUsersStatistics();
  const { totalItems, totalBrands, totalQty, totalSuppliers } =
    useItemsStatistics();
  const {
    totalOrders,
    totalOrderQty,
    totalSalesAmount,
    pendingOrderCount,
    processingOrderCount,
    completedOrderCount,
    cancelledOrderCount,
  } = useOrdersStatistics();

  return (
    <div>
      <OrdersPieChart />
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
      <div className="row mt-2">
        <div className="col-md-3">
          <div
            className="card text-white mb-3"
            style={{ backgroundColor: "indigo" }}
          >
            <div className="card-header">Total Orders</div>
            <div className="card-body pb-0">
              <h4>{totalOrders}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card text-white mb-3"
            style={{ backgroundColor: "indigo" }}
          >
            <div className="card-header">Total Orders Quantity</div>
            <div className="card-body pb-0">
              <h4>{totalOrderQty}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Pending Orders</div>
            <div className="card-body pb-0">
              <h4>{pendingOrderCount}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Processing Orders</div>
            <div className="card-body pb-0">
              <h4>{processingOrderCount}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Delivered Orders</div>
            <div className="card-body pb-0">
              <h4>{completedOrderCount}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Cancelled Orders</div>
            <div className="card-body pb-0">
              <h4>{cancelledOrderCount}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Total Revenue</div>
            <div className="card-body pb-0">
              <h4>$ {totalSalesAmount}</h4>
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
