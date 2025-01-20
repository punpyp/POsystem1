import "./employeePage.css";
import SearchBar from  "../../components/searchBar/SearchBar";
import BasicTable from "../../components/dataTable/DataTable";

const EmployeePage = () => {
  return (
    <div className="header-container">
      <h1>Employee Management</h1>
      <SearchBar />
      <BasicTable />
    </div>
  );
};

export default EmployeePage;
