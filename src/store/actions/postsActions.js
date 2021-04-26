
export const SET_POSTS_LOADING_STATUS = "SET_POSTS_LOADING_STATUS";
export const SET_POSTS = "SET_POSTS";
export const SET_ERROR = "SET_ERROR";
export const SET_VIDEO = "SET_VIDEO";
export const SET_NEXT_PAGE = "SET_NEXT_PAGE";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_RESPONSE_COUNT = "SET_RESPONSE_COUNT";
export const SET_LATITUDE = "SET_LATITUDE";
export const SET_LONGITUDE = "SET_LONGITUDE";

const setLoadingStatus = (status) => ({
  type: SET_POSTS_LOADING_STATUS,
  payload: status,
});

const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

const setError = (message) => ({
  type: SET_ERROR,
  payload: message,
});

const setVideo = (video, postId) => ({
  type: SET_VIDEO,
  payload: {video, postId},
});

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});

export const setResponseCount = (count) => ({
  type: SET_RESPONSE_COUNT,
  payload: count,
});

export const setLatitude = (latitude) => ({
  type: SET_LATITUDE,
  payload: latitude, 
});

export const setLongitude = (longitude) => ({
  type: SET_LONGITUDE,
  payload: longitude,
});

export const getPosts = (searchValue, page = '', count = 30, latitude, longitude) => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));

    window.VK.Api.call(
      "newsfeed.search",
      {
        q: searchValue,
        v: "5.130",
        start_from: page,
        extended: 1,
        latitude,
        longitude,
        count,
      },
      function ({ response }) {
        if (!response) {
          dispatch(setError("Что-то пошло не так при поиске постов"));
        } else {
          dispatch(setPosts(response));
        }
      }
    );
  };
};

export const getVideo = (postId, id, ownerId, accessKey) => {
  return (dispatch) => {
    window.VK.Api.call(
      "video.get",
      {
        owner_id: ownerId,
        videos: `${ownerId}_${id}_${accessKey}`,
        v: "5.130",
      },
      function ({response}) {
        if (response.items === undefined || response.items === null) {
          // Ошибка
        } else if (response.items.length === 0) {
          // Значит ничего не нашлось
        } else {
          dispatch(setVideo(response.items[0], postId));
        }
      }
    );
  };
};
