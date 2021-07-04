import { connect } from "react-redux";
import ControlledAccordions from "./ControlledAccordions";
import { getTableData } from "../../../../redux/menuReducer";

let mapStateToProps = (state) => {
  return {
    navBarName: state.menu.navBarName,
    analyticsList: state.menu.analyticsList,
  };
};

const ControlledAccordionsContainer = connect(mapStateToProps, {
  getTableData,
})(ControlledAccordions);

export default ControlledAccordionsContainer;
