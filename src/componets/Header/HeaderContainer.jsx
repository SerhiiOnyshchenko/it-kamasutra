import React from "react";
import { connect } from "react-redux";
import { logout } from "../../Redux/AuthReduser";
import Preloader from "../common/preloader/Preloader";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Header {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { logout })(HeaderContainer);
