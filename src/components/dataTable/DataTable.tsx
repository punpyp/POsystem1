import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john@example.com",
    calories: "jjjj",
    fat: "hhhh",
    carbs: "jhhh",
    protein: "hggg",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane@example.com",
    calories: "jjjj",
    fat: "hhhh",
    carbs: "jhhh",
    protein: "hggg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 45,
    email: "mike@example.com",
    calories: "jjjj",
    fat: "hhhh",
    carbs: "jhhh",
    protein: "hggg",
  },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from "react";
// import DataTable from "react-data-table-component";

// const MyTable = () => {
//   const columns = [
//     {
//       name: "Employee Code",
//       selector: (row) => row.employeecode,
//       sortable: true,
//     },
//     { name: "Name", selector: (row) => row.name, sortable: true },

//     { name: "Email", selector: (row) => row.email },
//     { name: "Position", selector: (row) => row.position },
//     { name: "IsActive", selector: (row) => row.isactive },
//   ];

//   const rows = [
//     { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
//     { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
//     { id: 3, name: "Mike Johnson", age: 45, email: "mike@example.com" },
//   ];

//   const customStyles = {
//     rows: {
//       style: {
//         minHeight: "72px", // Override the row height
//       },
//     },
//     headCells: {
//       style: {
//         fontWeight: "bold",
//         fontSize: "16px",
//       },
//     },
//     cells: {
//       style: {
//         fontSize: "14px",
//         padding: "10px", // Increase padding for better spacing
//       },
//     },
//   };

//   return (
//     <div
//       className="container d-flex justify-content-center my-5"
//       style={{ width: "150%", margin: "0 auto", padding: "50px" }}
//     >
//       <DataTable
//         columns={columns}
//         data={rows}
//         fixedHeader
//         title=""
//         pagination
//         customStyles={customStyles} // Apply custom styles
//       />
//     </div>
//   );
// };

// export default MyTable;
