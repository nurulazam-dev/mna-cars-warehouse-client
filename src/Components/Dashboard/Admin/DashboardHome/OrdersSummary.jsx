import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  // Legend,
} from "recharts";
import { useOrdersStatistics } from "../../../../hooks/statisticsData";

const OrdersSummary = () => {
  const COLORS = ["#ffc107", "#0dcaf0", "#198754", "#dc3545"];

  const {
    pendingOrderCount,
    processingOrderCount,
    completedOrderCount,
    cancelledOrderCount,
    totalOrders,
    totalOrderQty,
    totalSalesAmount,
  } = useOrdersStatistics();

  const data = [
    { name: "Pending", value: pendingOrderCount },
    { name: "Processing", value: processingOrderCount },
    { name: "Completed", value: completedOrderCount },
    { name: "Cancelled", value: cancelledOrderCount },
  ].filter((d) => d.value > 0);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      percent > 0 && (
        <text
          x={x}
          y={y}
          fill="#222"
          fontWeight={600}
          fontSize={14}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
        </text>
      )
    );
  };

  return (
    <section className="mb-5">
      <h1 className="text-center text-success fs-2 mb-3">Order Summary</h1>
      <div style={{ width: "100%", height: 250 }} className="row">
        <div className="col-md-6">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value} orders`, name]}
                contentStyle={{ fontWeight: 500 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-md-3 border rounded">
          <h5 className="text-center py-2 border-bottom">Order Status</h5>
          <ul className="list-unstyled mt-3">
            <li className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-primary">Total Orders</span>
              <span>{totalOrders}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-warning">Pending</span>
              <span>{pendingOrderCount}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-info">Processing</span>
              <span>{processingOrderCount}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-success">Completed</span>
              <span>{completedOrderCount}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-danger">Cancelled</span>
              <span>{cancelledOrderCount}</span>
            </li>
          </ul>
        </div>
        <div className="col-md-3 pt-1">
          <div
            className="card mb-3"
            style={{ borderBlockStart: "4px solid blue" }}
          >
            <div className="card-header py-1 text-primary fw-bold">
              Total Orders
            </div>
            <div className="card-body py-0">
              <h4>{totalOrders}</h4>
            </div>
          </div>
          <div className="card mb-3">
            <div
              className="card-header py-1 fw-bold"
              style={{ borderBlockStart: "4px solid indigo", color: "indigo" }}
            >
              Total Orders Quantity
            </div>
            <div className="card-body py-0">
              <h4>{totalOrderQty}</h4>
            </div>
          </div>
          <div className="card" style={{ borderBlockStart: "4px solid green" }}>
            <div
              className="card-header py-1 fw-bold"
              style={{ color: "green" }}
            >
              Total Revenue
            </div>
            <div className="card-body py-0">
              <h4>$ {totalSalesAmount}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersSummary;
