import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path="home" element={<Layout />} exact>
        <Route index element={<Home />} exact />
      </Route>
    </Routes>
  );
};

export default Routers;
