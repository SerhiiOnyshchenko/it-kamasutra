import React from "react";
import { NavLink } from "react-router-dom";
import Frend from "./Frends/Frends";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  let theBestFrend = props.sideBar.map((f) => {
    return <Frend name={f.name} key={f.id} url={f.url} />;
  });
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          className={s.link}
          to={"/profile/" + props.meId}
          activeClassName={s.active}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <h3>Frends</h3>
        <div className={s.frends}>{theBestFrend}</div>
      </div>
    </nav>
  );
};

export default Navbar;
