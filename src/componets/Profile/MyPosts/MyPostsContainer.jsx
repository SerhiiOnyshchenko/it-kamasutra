import { connect } from "react-redux";
import { addPost } from "../../../Redux/ProfileReduser";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    PostData: state.profilePage.PostData,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);
export default MyPostsContainer;
