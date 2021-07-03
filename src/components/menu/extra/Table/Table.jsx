import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { HISTORY_CATEGORY, HISTORY } from "../../../../constants";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {HISTORY_CATEGORY.map((e) => (
              <TableCell>{e.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {HISTORY.map((e, i) => (
            <TableRow key={e + i}>
              <TableCell> {e.nubmer} </TableCell>
              <TableCell> {e.DO} </TableCell>
              <TableCell> {e.placeField} </TableCell>
              <TableCell> {e.KS} </TableCell>
              <TableCell> {e.KY} </TableCell>
              <TableCell> {e.date} </TableCell>
              <TableCell> {e.value} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// {rows.map((row) => (
//   <TableRow key={row.name}>
//     <TableCell component="th" scope="row">
//       {row.name}
//     </TableCell>
//     <TableCell align="right">{row.calories}</TableCell>
//     <TableCell align="right">{row.fat}</TableCell>
//     <TableCell align="right">{row.carbs}</TableCell>
//     <TableCell align="right">{row.protein}</TableCell>
//   </TableRow>
// ))}
