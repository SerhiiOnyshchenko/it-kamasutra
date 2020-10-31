import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./componets/common/preloader/Preloader";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginContainer from "./componets/login/LoginContainer";
import Music from "./componets/Music/Music";
import NavbarContainer from "./componets/Navbar/NavbarContainer";
import News from "./componets/News/News";
import Settings from "./componets/Settings/Settings";
import UsersContainer from "./componets/Users/UsersContainer";
import { withSuspense } from "./hoc/withSuspense";
import "./index.css";
import { initializedApp } from "./Redux/AppReduser";
//lazy import

const ProfileContainer = React.lazy(() =>
  import("./componets/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./componets/Dialogs/DialogsContainer")
);
class App extends Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer className="navbar" />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:userId"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App);
