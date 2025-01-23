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
      {/* Adding the Page component as the footer */}
      <div className="footer">
        <Page />
      </div>
    </div>
  );
};

export default EmployeePage;
