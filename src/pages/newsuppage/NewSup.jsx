import { useState } from "react";
import "./NewSup.css";

const AddSupplier = () => {
  const [supplierCode, setSupplierCode] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSave = () => {
    const supplierData = {
      supplierCode,
      supplierName,
      isActive,
    };
    console.log("Supplier Saved:", supplierData);
  };

  const handleCancel = () => {
    setSupplierCode("");
    setSupplierName("");
    setIsActive(false);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Add New Supplier</h1>

        <div className="form-group">
          <label htmlFor="supplierCode" className="label">
            Supplier Code
          </label>
          <input
            type="text"
            id="supplierCode"
            className="input"
            value={supplierCode}
            onChange={(e) => setSupplierCode(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="supplierName" className="label">
            Supplier Name
          </label>
          <input
            type="text"
            id="supplierName"
            className="input"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="isActive" className="checkbox-label">
            <input
              type="checkbox"
              id="isActive"
              className="checkbox"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
            />
            Is Active
          </label>
        </div>

        <div className="button-group">
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSupplier;
