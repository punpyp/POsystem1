import Header from "./components/Header"; // Import Header (default export)
import PageHeader from "./components/PageHeader";
import MyTable from "./components/DataTable";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div>
      <Header />
      <PageHeader />
      <MyTable />
    </div>
  );
};

export default App;
