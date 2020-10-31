import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        alt="icon"
        className={s.img}
        src="https://filmix.co/uploads/frames/6241/f222903-avatar-2009_original.jpg"
      />
      {props.message}
      <div>
        <span>like </span>
        {props.count}
      </div>
    </div>
  );
};

export default Post;
