import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  // Legend,
} from "recharts";
import { useOrdersStatistics } from "../../../../hooks/statisticsData";

const COLORS = ["#ffc107", "#0dcaf0", "#198754", "#dc3545"];

const PieDemo = () => {
  const {
    pendingOrderCount,
    processingOrderCount,
    completedOrderCount,
    cancelledOrderCount,
    totalOrders,
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
    <section>
      <h4 className="text-center text-primary fs-2 mb-2">Order Summary</h4>
      <div
        style={{ width: "100%", height: 250, border: "1px solid #ccc" }}
        className="row justify-content-center align-items-center"
      >
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
              {/* <Legend verticalAlign="bottom" iconType="circle" /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-md-2">
          <h5 className="text-center">Order Status</h5>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between align-items-center mb-1">
              <span className="badge bg-warning">Pending</span>
              <span>{pendingOrderCount}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-1">
              <span className="badge bg-info">Processing</span>
              <span>{processingOrderCount}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-1">
              <span className="badge bg-success">Completed</span>
              <span>{completedOrderCount}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-1">
              <span className="badge bg-danger">Cancelled</span>
              <span>{cancelledOrderCount}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-2">
        <span className="badge bg-dark fs-6">Total Orders: {totalOrders}</span>
      </div>
    </section>
  );
};

export default PieDemo;
