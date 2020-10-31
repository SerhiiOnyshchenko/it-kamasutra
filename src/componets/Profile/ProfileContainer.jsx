import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../Redux/ProfileReduser";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../common/preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
  isFetching: state.usersPage.isFetching,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
