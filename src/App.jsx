import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
// import { useSelector } from "react-redux";

const App = () => {
  // const { token } = useSelector((state) => state.auth);

  // return token ? (
  //   <Dashboard />
  // ) : (
  //   <Login />
  // );
  // return <Login />;
  return <Dashboard />;

};

export default App;