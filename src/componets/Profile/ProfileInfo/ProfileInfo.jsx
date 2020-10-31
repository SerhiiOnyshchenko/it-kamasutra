import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import icon from "../../../assets/img/icon.png";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <div className={s.img}>
        <img
          alt="icon"
          className={s.img01}
          src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
        />
        <div className={s.avatar}>
          <div className={s.av}>
            <img
              src={profile.photos.large != null ? profile.photos.large : icon}
              alt="Avatar"
            />
          </div>
          <div className={s.de}>
            <span className={s.name}> {profile.fullName} </span>
            <div className={s.info}>
              <div>
                <div>Facebook: {profile.contacts.facebook}</div>
                <div>Website: {profile.contacts.website}</div>
                <div>VK: {profile.contacts.vk}</div>
                <div>Twitter: {profile.contacts.twitter}</div>
                <div>Instagram: {profile.contacts.instagram}</div>
                <div>Youtube: {profile.contacts.youtube}</div>
                <div>Github: {profile.contacts.github}</div>
                <div>MainLink: {profile.contacts.mainLink}</div>
              </div>
              <div className={s.about}>
                <ProfileStatusWithHook
                  status={status}
                  updateStatus={updateStatus}
                />
                <b>About me:</b> <br /> {profile.aboutMe}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
