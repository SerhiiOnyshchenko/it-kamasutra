import React from "react";
import s from "./Frends.module.css";

const Frend = (props) => {
  return (
    <div className={s.frend}>
      <img alt="icon" className={s.img} src={props.url} />
      <div className={s.name}>{props.name}</div>
    </div>
  );
};

export default Frend;
