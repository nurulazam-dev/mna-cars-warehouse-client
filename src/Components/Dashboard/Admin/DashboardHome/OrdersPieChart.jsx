import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useOrdersStatistics } from "../../../../hooks/statisticsData";

const OrdersPieChart = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const { totalPendingOrders, totalCompletedOrders } = useOrdersStatistics();

  const orderStatusData = [
    { name: "Pending", value: totalPendingOrders || 10 },
    { name: "Completed", value: totalCompletedOrders || 90 },
  ];

  return (
    <div>
      <h1 className="text-center text-success fs-2">Order Summary</h1>
      <div className="">
        <div className="border">
          <PieChart width={300} height={250}>
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
