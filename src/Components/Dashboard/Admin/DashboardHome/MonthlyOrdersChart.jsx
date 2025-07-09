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
import { formatDate } from "../../../../utils/formatDate";

const getDateString = (date) => date.toISOString().slice(0, 10);

const getLastNDates = (n) => {
  const dates = [];
  const today = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    dates.push(getDateString(d));
  }
  return dates;
};

const MonthlyOrdersChart = () => {
  const { orders } = useAllOrders();

  const last30Dates = getLastNDates(30);
  const dailyStats = last30Dates.map((date) => ({
    date,
    orders: 0,
  }));

  if (orders && Array.isArray(orders)) {
    orders.forEach((order) => {
      const orderDate = getDateString(new Date(order.createdAt));
      const idx = dailyStats.findIndex((d) => d.date === orderDate);
      if (idx !== -1) {
        dailyStats[idx].orders += 1;
      }
    });
  }

  return (
    <section className="mb-4 shadow-sm rounded p-3">
      <h5 className="mb-3 text-secondary fw-bold">Orders (Last 30 Days)</h5>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={dailyStats}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
            minTickGap={10}
          />
          <YAxis allowDecimals={false} />
          <Tooltip labelFormatter={(date) => formatDate(date)} />
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

export default MonthlyOrdersChart;
