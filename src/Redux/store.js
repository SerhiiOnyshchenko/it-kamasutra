import profileReduser from "./ProfileReduser";
import dialogReduser from "./DialogReduser";
import sideBarReduser from "./SideBarReduser";

let store = {
  _state: {
    profilePage: {
      PostData: [
        { id: 1, message: "Hi, hw are you?", count: 12 },
        { id: 2, message: "It's my first post", count: 11 },
      ],
      newPostText: "",
    },
    dialogPage: {
      DialogsData: [
        {
          id: 1,
          name: "Dimuch",
          url:
            "https://banner2.cleanpng.com/20180418/xqw/kisspng-avatar-computer-icons-business-business-woman-5ad736ba3f2735.7973320115240536902587.jpg",
        },
        {
          id: 2,
          name: "Masha",
          url:
            "https://banner2.cleanpng.com/20180612/hv/kisspng-computer-icons-designer-avatar-5b207ebb279901.8233901115288562511622.jpg",
        },
        {
          id: 3,
          name: "Roma",
          url:
            "https://banner2.cleanpng.com/20180418/xqw/kisspng-avatar-computer-icons-business-business-woman-5ad736ba3f2735.7973320115240536902587.jpg",
        },
        {
          id: 4,
          name: "Olay",
          url:
            "https://banner2.cleanpng.com/20180612/hv/kisspng-computer-icons-designer-avatar-5b207ebb279901.8233901115288562511622.jpg",
        },
        {
          id: 5,
          name: "Serhii",
          url:
            "https://banner2.cleanpng.com/20180418/xqw/kisspng-avatar-computer-icons-business-business-woman-5ad736ba3f2735.7973320115240536902587.jpg",
        },
      ],
      MessageData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "how are you?" },
        { id: 3, message: "ok" },
        { id: 4, message: "ok" },
        { id: 5, message: "ok" },
      ],
      newMessageText: "",
    },
    sideBar: [
      {
        id: 1,
        name: "Olay",
        url:
          "https://banner2.cleanpng.com/20180612/hv/kisspng-computer-icons-designer-avatar-5b207ebb279901.8233901115288562511622.jpg",
      },
      {
        id: 2,
        name: "Serhii",
        url:
          "https://banner2.cleanpng.com/20180418/xqw/kisspng-avatar-computer-icons-business-business-woman-5ad736ba3f2735.7973320115240536902587.jpg",
      },
      {
        id: 3,
        name: "Masha",
        url:
          "https://banner2.cleanpng.com/20180612/hv/kisspng-computer-icons-designer-avatar-5b207ebb279901.8233901115288562511622.jpg",
      },
    ],
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  updateNewPostText(newText) {},

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogPage = dialogReduser(this._state.dialogPage, action);
    this._state.sideBar = sideBarReduser(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
