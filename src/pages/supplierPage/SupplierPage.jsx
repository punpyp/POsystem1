import "./SupplierPage.css";
import SearchBar from "../../components/searchBar/SearchBar";
import DataTable from "../../components/dataTable/DataTable";
import IsActiveSup from "../../pages/supplierPage/IsActiveSup";
import Page from "../../components/dataTable/Page";
import AddSupplier from "../../components/newSupplier/AddSupButt";

const SupplierPage = () => {
  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="topic">
          <h1>Supplier Management</h1>
          <AddSupplier />
        </div>
        <div className="search-wrapper">
          <SearchBar />
          <IsActiveSup />
        </div>
      </div>
      <DataTable />
      <Page />
    </div>
  );
};

export default SupplierPage;
