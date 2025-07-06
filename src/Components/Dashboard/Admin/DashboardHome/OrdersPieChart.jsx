import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useOrdersStatistics } from "../../../../hooks/statisticsData";

const OrdersPieChart = () => {
  const COLORS = ["#ffc107", "#0dcaf0", "#198754", "#dc3545", "#FFBB28"];
  const {
    pendingOrderCount,
    processingOrderCount,
    completedOrderCount,
    cancelledOrderCount,
  } = useOrdersStatistics();

  const orderStatusData = [
    { name: "Pending", value: pendingOrderCount || 10 },
    { name: "Processing", value: processingOrderCount || 20 },
    { name: "Completed", value: completedOrderCount || 70 },
    { name: "Cancelled", value: cancelledOrderCount || 0 },
  ];

  return (
    <div>
      <h1 className="text-center text-success fs-2">Order Summary</h1>
      <div className="">
        <div className="border">
          {/* order status pie chart */}
          <PieChart width={300} height={270}>
            <Pie
              data={orderStatusData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {orderStatusData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default OrdersPieChart;
