import { useState } from "react";
import "./NewUser.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmployeeCode("");
    setEmployeeName("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setIsAdmin(false);
    setIsActive(false);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Employee Code:", employeeCode);
    console.log("Employee Name:", employeeName);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Is Admin:", isAdmin);
    console.log("Is Active:", isActive);

    handleClose();
  };

  return (
    <div className="new-user-button">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New User
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Employee Code"
            type="text"
            fullWidth
            value={employeeCode}
            onChange={(e) => setEmployeeCode(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Employee Name"
            type="text"
            fullWidth
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div style={{ marginTop: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
              />
              Is Admin
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
              Is Active
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUser;
