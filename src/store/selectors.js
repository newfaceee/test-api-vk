import { createSelector } from 'reselect';

const postsSelector = (state) => state.posts;
const userSelector = (state) => state.user;

export const postItemsSelector = createSelector(postsSelector, (posts) => posts.items);
export const postsLoadingStatusSelector = createSelector(postsSelector, (posts) => posts.loading);
export const postsErrorStatusSelector = createSelector(postsSelector, (posts) => posts.isError);
export const postsErrorMessageSelector = createSelector(postsSelector, (posts) => posts.errorMessage);
export const postsTotalCountSelector = createSelector(postsSelector, (posts) => posts.totalCount);
export const postsNextPageSelector = createSelector(postsSelector, (posts) => posts.nextPage);
export const postsSearchValueSelector = createSelector(postsSelector, (posts) => posts.searchValue);
export const postsResponceCountSelector = createSelector(postsSelector, (posts) => posts.responseCount);
export const postsLatitudeSelector = createSelector(postsSelector, (posts) => posts.latitude);
export const postsLongitudeSelector = createSelector(postsSelector, (posts) => posts.longitude);

export const loggedInSelector = createSelector(userSelector, (user) => user.loggedIn);
export const userLoadingStatusSelector = createSelector(userSelector, (user) => user.loading);
