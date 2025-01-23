import "./employeePage.css";
import SearchBar from "../../components/searchBar/SearchBar";
import BasicTable from "../../components/dataTable/DataTable";
import AddUser from "../../components/newuser/addUser";
import IsActive from "../../pages/employeePage/IsActive";
import Page from "../../components/dataTable/Page";

const EmployeePage = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <h1>Employee Management</h1>
        <div>
          <AddUser />
        </div>
        <div>
          <IsActive />
        </div>
      </div>
      <SearchBar />
      <BasicTable />

      <Page />
    </div>
  );
};

export default EmployeePage;
