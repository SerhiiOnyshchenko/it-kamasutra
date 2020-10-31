import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let DialogsElements = props.state.DialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} url={d.url} />
  ));
  let MessageElements = props.state.MessageData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessageCreator(values.message);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogsElements}</div>
      <div>
        <div className={s.messages}>{MessageElements}</div>
        <DialogsReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Enter your message"
        type="text"
        name="message"
        component="textarea"
      />
      <button className={s.btn}>Send</button>
    </form>
  );
};
const DialogsReduxForm = reduxForm({ form: "message" })(DialogsForm);

export default Dialogs;
