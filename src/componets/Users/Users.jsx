import React from "react";
import s from "./Users.module.css";
import icon from "../../assets/img/icon.png";
import { NavLink } from "react-router-dom";
import PaginationExamplePagination from "../common/pagination/Pagination";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  return (
    <div className={s.wrapper}>
      <div>
        <PaginationExamplePagination
          onPageChenged={props.onPageChenged}
          count={pagesCount}
        />
      </div>
      <div className={s.flexUser}>
        {props.users.map((u) => (
          <div key={u.id}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  alt="icon"
                  className={s.img}
                  src={u.photos.small != null ? u.photos.small : icon}
                />
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
