import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { sendMessageCreator } from "../../Redux/DialogReduser";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => ({
  state: state.dialogPage,
});

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessageCreator: (message) => {
      dispatch(sendMessageCreator(message));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
