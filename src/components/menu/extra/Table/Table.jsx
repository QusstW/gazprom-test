import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TableHistory(state) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {state.categories.map((e, i) => (
              <TableCell key={e + i}>{e.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.tableData.map((e, i) => (
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
