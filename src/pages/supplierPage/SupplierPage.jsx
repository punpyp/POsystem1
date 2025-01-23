import "./SupplierPage.css";
import SearchBar from "../../components/searchBar/SearchBar";
import BasicTable from "../../components/dataTable/DataTableSup";

import IsActive from "../../pages/employeePage/IsActive";
import Page from "../../components/dataTable/Page";
// import AddSupButt from "../../components/newSupplier/AddSupButt";

const SupplierPage = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <h1>Supplier Management</h1>
      </div>
      <div>{/* <AddSupButt /> */}</div>
      <div>
        <IsActive />
      </div>
      <div>
        <SearchBar />
        <BasicTable />
        <Page />
      </div>
    </div>
  );
};

export default SupplierPage;
