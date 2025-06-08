import React from "react";
import { useNavigate } from "react-router-dom";
import Items from "./Items";

const InventoryItems = () => {
  const navigate = useNavigate();

  return (
    <div className="my-4">
      <h2 className="text-center text-success">Inventory Items</h2>
      <Items />
      <div className="text-center">
        <button
          onClick={() => navigate("/manage")}
          className="btn btn-success text-white fs-5"
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default InventoryItems;
