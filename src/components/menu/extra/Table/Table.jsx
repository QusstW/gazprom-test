import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function TableHistory(state) {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={state.tableData}
        columns={state.categories}
        pageSize={13}
        autoHeight={true}
      />
    </div>
  );
}
