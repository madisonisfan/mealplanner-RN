import * as ActionTypes from "./ActionTypes";

export const blogs = (
  state = { isLoading: true, errMess: null, blogs: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BLOGS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blogs: action.payload,
      };
    case ActionTypes.BLOGS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.BLOGS_LOADING:
      return { ...state, isLoading: true, errMess: null, blogs: [] };
    case ActionTypes.ADD_POST:
      const newPost = action.payload;
      return { ...state, blogs: state.blogs.concat(newPost) };
    default:
      return state;
  }
};
