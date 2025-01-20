
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { TextField, IconButton } from "@mui/material";

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

  export default SearchBar;