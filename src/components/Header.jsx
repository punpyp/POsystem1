import { useState } from "react";
import { Tabs, Tab, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Header.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [menuType, setMenuType] = useState(null);

  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  return (
    <div className="tabbar-container">
      <Tabs>
        <Tab label="DEMO" disabled />
        <Tab
          label="MASTER DATA"
          onClick={(e) => handleClick(e, "master")}
          icon={<KeyboardArrowDownIcon />}
          iconPosition="end"
        />
        <Tab
          label="REPORT"
          onClick={(e) => handleClick(e, "report")}
          icon={<KeyboardArrowDownIcon />}
          iconPosition="end"
        />
      </Tabs>

      {/* Dropdown Menus */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuType === "master"}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>EMPLOYEE</MenuItem>
        <MenuItem onClick={handleClose}>SUPPLIER</MenuItem>
        <MenuItem onClick={handleClose}>ITEMS</MenuItem>
      </Menu>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuType === "report"}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>REPORT</MenuItem>
        <MenuItem onClick={handleClose}>DASHBOARD</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
