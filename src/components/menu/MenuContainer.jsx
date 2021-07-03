import { connect } from "react-redux";
import Menu from "./Menu";
import { setNavName } from "../../redux/menuReducer";

let mapStateToProps = (state) => {
  return {
    heading: state.menu.navBarName,
  };
};

const MenuContainer = connect(mapStateToProps, { setNavName })(Menu);
export default MenuContainer;
