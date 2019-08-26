import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Users from "./Users";

const Home = () => {
  return (
    <div>
      <h1>어플리케이션을 골라주세요</h1>
      <Link to="/users">투두</Link>
    </div>
  );
};

export default Home;
