import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Result from "./components/Result";
import Pagination from "./components/Pagination/Pagination";
import Dropdown from "./components/Dropdown/Dropdown";
import Range from "./components/SearchLocation/Range";

import { checkLoginStatus } from "./store/actions/userActions";
import {
  getPosts,
  setSearchValue,
  setResponseCount,
  setLatitude,
  setLongitude,
} from "./store/actions/postsActions";
import {
  postItemsSelector,
  postsLoadingStatusSelector,
  postsNextPageSelector,
  postsSearchValueSelector,
  postsTotalCountSelector,
  postsResponceCountSelector,
  postsLatitudeSelector,
  postsLongitudeSelector,
  loggedInSelector,
} from "./store/selectors";
import { isEnterCode } from "./utils";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(postItemsSelector);
  const loading = useSelector(postsLoadingStatusSelector);
  const totalCount = useSelector(postsTotalCountSelector);
  const nextPage = useSelector(postsNextPageSelector);
  const value = useSelector(postsSearchValueSelector);
  const responseCount = useSelector(postsResponceCountSelector);
  const latitude = useSelector(postsLatitudeSelector);
  const longitude = useSelector(postsLongitudeSelector);
  const loggedIn = useSelector(loggedInSelector);

  const lastSearchedValue = useRef(null);

  const handleChange = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handleSearch = () => {
    dispatch(getPosts(value, "", responseCount, latitude, longitude));
    lastSearchedValue.current = value;
  };

  const handleKeyDown = (event) => {
    if (lastSearchedValue.current === value) {
      return;
    }
    if (isEnterCode(event.keyCode)) {
      handleSearch();
    }
  };

  const handleNextPageClick = () => {
    dispatch(getPosts(value, nextPage, responseCount, latitude, longitude));
  };

  const handleDropdownChange = (event) => {
    const { value: newResponseCount } = event.target;
    dispatch(setResponseCount(newResponseCount));
    if (value !== "") {
      dispatch(getPosts(value, "", newResponseCount, latitude, longitude));
    }
  };

  const handleLatitudeChange = (event) => {
    dispatch(setLatitude(event.target.value));
  };

  const handleLongitudeChange = (event) => {
    dispatch(setLongitude(event.target.value));
  };

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, []);

  return (
    <div>
      {loggedIn === "failed" && <p>Залогиниться не удалось</p>}
      {loggedIn !== "failed" && (
        <>
          <input
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} disabled={loading}>
            Поиск
          </button>
          <div className="range">
            <Range
              onChange={handleLatitudeChange}
              value={latitude}
              type="широта"
              label="Географическая широта в градусах (от -90 до 90)"
              min={-90}
              max={90}
            />
            <Range
              onChange={handleLongitudeChange}
              value={longitude}
              type="долгота"
              label="Географическая долгота в градусах (от -180 до 180)"
              min={-180}
              max={180}
            />
          </div>

          <Dropdown value={responseCount} onChange={handleDropdownChange} />
          {loading && <p>Загружается...</p>}
          {loading === false && (
            <>
              <Pagination onClick={handleNextPageClick} disabled={!nextPage} />

              <Result
                totalCount={totalCount}
                nextPage={nextPage}
                data={items}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
