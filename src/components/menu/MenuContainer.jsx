import { connect } from "react-redux";
import Menu from "./Menu";

let mapStateToProps = (state) => {
  return {
    heading: state.menu.navBarName,
    tableIsReady: state.menu.tableIsReady,
  };
};

const MenuContainer = connect(mapStateToProps, {})(Menu);
export default MenuContainer;
