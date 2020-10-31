import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={s.content}>
      <ProfileInfo
        profile={props.profile}
        isAuth={props.isAuth}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
