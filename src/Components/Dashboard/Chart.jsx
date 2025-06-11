import React from "react";
import { Tooltip } from "react-bootstrap";
import { Line, LineChart, XAxis, YAxis } from "recharts";
// import useItems from "../../hooks/useItems";

const Chart = () => {
  // const [items] = useItems();
  const items = [
    { quantity: 10, price: 20000 },
    { quantity: 20, price: 25000 },
    { quantity: 30, price: 30000 },
    { quantity: 40, price: 35000 },
    { quantity: 50, price: 40000 },
  ];
  return (
    <div className="w-50 mx-auto bg-light py-7 px-5 my-5 rounded">
      <div className="mx-auto text-center">
        <h2>Items Stock</h2>
        {items.length === 0 ? (
          <h3 className="text-danger">No Items Available</h3>
        ) : (
          <LineChart width={600} height={250} data={items}>
            <Line dataKey={"price"}></Line>
            <XAxis dataKey={"quantity"}></XAxis>
            <Tooltip />
            <YAxis />
          </LineChart>
        )}
        <p className="text-danger">Available Quantity</p>
      </div>
      <h5 className="mx-5 fs-6 text-center">
        The LineChart below shows available quantity or stock and per stock
        price in MNA Cars Warehouse
      </h5>
    </div>
  );
};

export default Chart;
