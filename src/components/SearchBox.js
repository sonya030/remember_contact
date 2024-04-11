import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <div className="SearchBox">
      <form onSubmit={searchByName} className="search-form">
        <input
          type="text"
          placeholder="이름을 검색해 주세요"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button type="submit">
          검색
          <img
            src={`${process.env.PUBLIC_URL}/magnifying_glass_icon_white.png`}
            alt="magnify"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
