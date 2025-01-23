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
        <div className="topic">
          <h1>Employee Management</h1>
          <AddUser />
        </div>
        <div className="search-wrapper">
          <SearchBar />
          <IsActive />
        </div>
      </div>
      <BasicTable />
      <Page />
    </div>
  );
};

export default EmployeePage;
