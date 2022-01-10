import React from "react";
import OrdersList from "../OrdersAdmin/OrdersList";
import DashBoardCards from "./dashboardCards";

export default function Dashboard() {
  return (
    <div>
      <DashBoardCards />
      <div></div>
      <h3 className="current-order">Current Orders</h3>
      <div></div>
      <OrdersList />
    </div>
  );
}
