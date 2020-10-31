import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar.sideBar,
    meId: state.auth.id,
  };
};
const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;
