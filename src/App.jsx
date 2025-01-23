import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
//import AddUser from "./components/newuser/AddUser";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import EmployeePage from "./pages/employeePage/EmployeePage";
import SupplierPage from "./pages/supplierPage/SupplierPage";

const App = () => {
  return (
    <Router>
      <Header />
      {
        // <div
        //   style={{
        //     display: "flex",
        //     justifyContent: "flex-end",
        //     padding: "50px 100px",
        //   }}
        // >
        //   <AddUser />
        // </div>
      }

      <Routes>
        {/* Employee Page */}
        <Route path="/" element={<EmployeePage />} />
        <Route path="/master/supplier" element={<SupplierPage />} />
      </Routes>
    </Router>
  );
};

export default App;
