import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let PostElements = props.PostData.map((p) => (
    <Post message={p.message} count={p.count} key={p.id} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.post);
  };

  return (
    <div className={s.postes}>
      <h3>my post</h3>
      <MyPostsReduxForm onSubmit={addNewPost} />
      <div className={s.post}>{PostElements}</div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="post"
          type="text"
          placeholder="Add text"
          component="textarea"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
const MyPostsReduxForm = reduxForm({ form: "post" })(MyPostsForm);
export default MyPosts;
