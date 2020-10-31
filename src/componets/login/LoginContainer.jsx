import React from "react";
import { connect } from "react-redux";
import { login } from "../../Redux/AuthReduser";
import Preloader from "../common/preloader/Preloader";
import Login from "./Login";

class LoginContainer extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Login {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(LoginContainer);
