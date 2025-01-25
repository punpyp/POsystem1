import { useState } from "react";
import "./AddItem.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const AddItem = () => {
  const [open, setOpen] = useState(false);
  const [itemCode, setItemCode] = useState("");
  const [itemName, setItemName] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItemCode("");
    setItemName("");
    setCategoryCode("");
    setPrice("");
    setUnit("");
    setIsActive(false);
  };

  const handleSubmit = () => {
    console.log("Item Code:", itemCode);
    console.log("Item Name:", itemName);
    console.log("Category Code:", categoryCode);
    console.log("Price:", price);
    console.log("Unit:", unit);
    console.log("Is Active:", isActive);

    handleClose();
  };

  return (
    <div className="new-item-button">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New Item
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Item Code"
            type="text"
            fullWidth
            value={itemCode}
            onChange={(e) => setItemCode(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Item Name"
            type="text"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Category Code"
            type="text"
            fullWidth
            value={categoryCode}
            onChange={(e) => setCategoryCode(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Unit"
            type="text"
            fullWidth
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
          <div style={{ marginTop: "10px" }}>
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

export default AddItem;
