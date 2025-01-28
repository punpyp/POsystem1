import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
//import AddUser from "./components/newuser/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import EmployeePage from "./pages/employeePage/EmployeePage";
import SupplierPage from "./pages/supplierPage/SupplierPage";
import RequestList from "./pages/requestList/RequestList";
import Login from "./pages/login/Login";
import Items from "./pages/item/Items";
import NewSup from "./pages/newsuppage/NewSup";
import NewRequestList from "./pages/newrequest/NewRequestList";

const App = () => {
  const noHeaderRoutes = ["/request", "/login", "/newrequest"];
  return (
    <Router>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<RequestList />} />
        <Route path="/request/newrequestlist" element={<NewRequestList />} />
        <Route path="/" element={<EmployeePage />} />
        <Route path="/master/supplier" element={<SupplierPage />} />
        <Route path="/master/supplier/newsup" element={<NewSup />} />
        <Route path="/master/items" element={<Items />} />
      </Routes>
    </Router>
  );
};

export default App;
