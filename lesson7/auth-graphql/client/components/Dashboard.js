//@ts-check
import React from "react";
import requireAuth from "./RequireAuth";

function Dashboard() {
  return <div>Welcome, you are logged in!</div>;
}

export default requireAuth(Dashboard);
