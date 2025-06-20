import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { stats } from "../../../../assets/data/statsData";

const InfoContainer = () => {
  const weeklyOrders = stats[0]?.weeklyOrders || [
    { day: "Mon", orders: 5 },
    { day: "Tue", orders: 8 },
    { day: "Wed", orders: 12 },
    { day: "Thu", orders: 7 },
    { day: "Fri", orders: 10 },
    { day: "Sat", orders: 4 },
    { day: "Sun", orders: 9 },
  ];
  return (
    <section className="border">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={weeklyOrders}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default InfoContainer;
