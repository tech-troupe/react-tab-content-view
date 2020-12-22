import { CallbackActionTypes } from "./CallbackActionTypes";

const callbackReducer = (state = [], action) => {
  switch (action.type) {
    case CallbackActionTypes.UPDATE_CONTENT:
      const { title, content } = action.payload;
      let contentObj = {};
      let def = false;
      let ind = null;
      let filteredData = state.data.filter((obj, index) => {
        if (obj.title === title) {
          def = obj.default;
          ind = index;
        }
        return obj.title !== title;
      });
      contentObj["title"] = title;
      contentObj["content"] = content;
      if (def) {
        contentObj["default"] = def;
      }
      filteredData.splice(ind, 0, contentObj);
      return {
        ...state,
        data: filteredData,
      };
    default:
      return state;
  }
};

export default callbackReducer;
