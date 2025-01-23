import "./Items.css";
import SearchBar from "../../components/searchBar/SearchBar";
import BasicTable from "../../components/dataTable/DataTable";
import AddUser from "../../components/newuser/addUser";
import IsActive from "../employeePage/IsActive";
import Page from "../../components/dataTable/Page";

const Items = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <h1>Items Management</h1>
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

export default Items;
