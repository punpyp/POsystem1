import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
//import AddUser from "./components/newuser/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import EmployeePage from "./pages/employeePage/EmployeePage";
import SupplierPage from "./pages/supplierPage/SupplierPage";
// import Login from "./pages/login/Login";
import Items from "./pages/item/Items";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default Route */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<EmployeePage />} />
        <Route path="/master/supplier" element={<SupplierPage />} />
        <Route path="/master/items" element={<Items />} />
      </Routes>
    </Router>
  );
};

export default App;
