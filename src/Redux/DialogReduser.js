const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const dialogReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        MessageData: [...state.MessageData, { id: 6, message: action.message }],
      };
    default:
      return state;
  }
};
export const sendMessageCreator = (message) => ({ type: ADD_MESSAGE, message });

export default dialogReduser;
