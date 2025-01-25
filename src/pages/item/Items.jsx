import "./Items.css";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTableItem from "../../components/dataTable/DataTableItem";
//import AddUser from "../../components/newuser/AddUser";
import IsActive from "../employeePage/IsActive";
import Page from "../../components/dataTable/Page";

const Items = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <div>
          <h1>Items Management</h1>
          {/* <AddUser /> */}
        </div>

        <div className="searchb-wrapper">
          <SearchBar />
          <IsActive />
        </div>
      </div>

      <DataTableItem />

      <Page />
    </div>
  );
};

export default Items;
