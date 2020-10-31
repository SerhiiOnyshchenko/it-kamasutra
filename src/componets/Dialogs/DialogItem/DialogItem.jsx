import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>
        <img alt="icon" className={s.img} src={props.url}></img>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
