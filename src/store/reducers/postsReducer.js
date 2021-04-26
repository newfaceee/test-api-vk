import { cloneDeep } from "lodash";

import {
  SET_ERROR,
  SET_POSTS_LOADING_STATUS,
  SET_POSTS,
  SET_VIDEO,
  SET_SEARCH_VALUE,
  SET_RESPONSE_COUNT,
  SET_LONGITUDE,
  SET_LATITUDE,
} from "../actions/postsActions";

const initialState = {
  loading: null,
  items: [],
  isError: null,
  errorMessage: null,
  totalCount: null,
  nextPage: null,
  searchValue: '',
  responseCount: 30,
  latitude: 0,
  longitude: 0,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return {
        ...state,
        items: [],
        isError: true,
        errorMessage: action.payload,
        loading: false,
      };
    }
    case SET_POSTS_LOADING_STATUS: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_POSTS: {
      const {
        items,
        total_count: totalCount,
        next_from: nextPage,
      } = action.payload;

      return {
        ...state,
        loading: false,
        isError: false,
        errorMessage: "",
        items,
        totalCount,
        nextPage,
      };
    }
    case SET_VIDEO: {
      const { postId, video } = action.payload;
      const posts = cloneDeep(state.items);

      const postIndex = state.items.findIndex((post) => post.id === postId);

      if (postIndex === -1) {
        return {
          ...state,
        };
      }

      const attachmentIndex = state.items[postIndex].attachments?.findIndex(
        (attachment) => attachment[attachment.type].id === video.id
      );

      if (attachmentIndex === undefined || attachmentIndex === -1) {
        return {
          ...state,
        };
      }

      posts[postIndex].attachments[attachmentIndex] = {
          type: "video",
          video,
      };

      return {
        ...state,
        items: posts,
      };
    }
    case SET_SEARCH_VALUE: {
        return {
            ...state,
            searchValue: action.payload
        }
    }
    case SET_RESPONSE_COUNT: {
        return {
            ...state,
            responseCount: action.payload
        }
    }
    case SET_LATITUDE: {
        return {
            ...state,
            latitude: action.payload,
        }
    }
    case SET_LONGITUDE: {
        return {
            ...state,
            longitude: action.payload
        }
    }
    default:
      return state;
  }
};
