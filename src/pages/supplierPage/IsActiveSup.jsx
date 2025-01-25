import { Button, ButtonGroup } from "@mui/material";
import "./IsActiveSup.css";

export default function IsActive() {
  return (
    <ButtonGroup className="custom-button-group">
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Inactive</Button>
    </ButtonGroup>
  );
}
