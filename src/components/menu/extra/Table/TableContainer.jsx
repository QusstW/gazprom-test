import { connect } from "react-redux";
import Table from "./Table";

let mapStateToProps = (state) => {
  return {
    tableData: state.menu.tableData,
    categories: state.menu.categories,
  };
};

const TableContainer = connect(mapStateToProps, {})(Table);
export default TableContainer;
