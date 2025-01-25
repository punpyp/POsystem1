import "./SupplierPage.css";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTableSup from "../../components/dataTable/DataTableSup";
import IsActiveSup from "../../pages/supplierPage/IsActiveSup";
//import IsActive from "../../pages/employeePage/IsActive";
import Page from "../../components/dataTable/Page";
// import AddSupButt from "../../components/newSupplier/AddSupButt";

const SupplierPage = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <h1>Supplier Management</h1>
      </div>
      <div className="searchbar-wrapper">
        <SearchBar />
        <IsActiveSup />
      </div>

      <div>
        <DataTableSup />
        <Page />
      </div>
    </div>
  );
};

export default SupplierPage;
