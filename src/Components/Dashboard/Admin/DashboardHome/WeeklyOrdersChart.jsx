import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAllOrders } from "../../../../hooks/useAllOrders";

const getDayName = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

const WeeklyOrdersChart = () => {
  const { orders } = useAllOrders();

  const weekDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const weeklyStats = weekDays.map((day) => ({
    day,
    orders: 0,
  }));

  if (orders && Array.isArray(orders)) {
    orders.forEach((order) => {
      const day = getDayName(order.createdAt);
      const idx = weeklyStats.findIndex((d) => d.day === day);
      if (idx !== -1) {
        weeklyStats[idx].orders += 1;
      }
    });
  }

  return (
    <section className="mb-4 shadow-sm rounded p-3">
      <h5 className="mb-3 text-secondary fw-bold">Weekly Orders Chart</h5>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={weeklyStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            name="Orders"
            stroke="#8884d8"
            fill="#8884d8"
            activeDot={{ r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default WeeklyOrdersChart;
