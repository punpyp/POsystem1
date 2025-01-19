import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./PageHeader.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    return;
  };

  return (
    <div className="searchbar-container">
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ width: "500px" }}
      />
      <IconButton onClick={handleSearch} color="primary">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

const PageHeader = () => {
  return (
    <div className="header-container">
      <h1>Employee Management</h1>
      <SearchBar />
    </div>
  );
};

export default PageHeader;
