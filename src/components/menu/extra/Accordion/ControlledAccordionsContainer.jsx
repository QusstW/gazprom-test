import { connect } from "react-redux";
import ControlledAccordions from "./ControlledAccordions";
import { setNavName } from "../../../../redux/menuReducer";

let mapStateToProps = (state) => {
  return {
    analyticsList: state.menu.analyticsList,
  };
};

const ControlledAccordionsContainer = connect(mapStateToProps, { setNavName })(
  ControlledAccordions
);

export default ControlledAccordionsContainer;
