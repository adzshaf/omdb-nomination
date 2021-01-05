import React, { useEffect, useState } from "react";
import "./index.css";
import apiService from "../../api/index";
import { useDebounce } from "../../hooks/useDebounce";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addNomination,
  selectNomination,
} from "../../features/nomination/nominationSlice";

const Navbar = () => {
  const nomination = useSelector(selectNomination);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    setIsSearching(true);
    if (debouncedSearchTerm) {
      apiService
        .getSearch(search)
        .then((res) => {
          setIsSearching(false);
          if (res.data.Response === "False") {
            setResult(res.data.Error);
          } else {
            setResult(res.data.Search);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="navbar-container">
      <h1>The Shoppies</h1>
      <div className="input-container">
        <div className="icon-input">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 12C5.791 12 4 10.209 4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12ZM17.707 16.293L12.887 11.473C13.585 10.492 14 9.296 14 8C14 4.687 11.313 2 8 2C4.687 2 2 4.687 2 8C2 11.313 4.687 14 8 14C9.296 14 10.492 13.585 11.473 12.887L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
              fill="#212B36"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="17"
              height="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 12C5.791 12 4 10.209 4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12ZM17.707 16.293L12.887 11.473C13.585 10.492 14 9.296 14 8C14 4.687 11.313 2 8 2C4.687 2 2 4.687 2 8C2 11.313 4.687 14 8 14C9.296 14 10.492 13.585 11.473 12.887L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)"></g>
          </svg>
          <div className="search-input">
            <input
              placeholder="Search movie title"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
        </div>
        {search !== "" && (
          <div className="search-result">
            {isSearching ? (
              <p>Searching..</p>
            ) : Array.isArray(result) ? (
              result.map((value, index) => (
                <div key={index} className="search-item">
                  <p className="search-item-title">{value.Title}</p>
                  <p className="search-item-year">({value.Year})</p>
                  {!nomination.includes(value) && nomination.length < 5 && (
                    <Button onClick={() => dispatch(addNomination(value))}>
                      Nominate
                    </Button>
                  )}
                </div>
              ))
            ) : (
              <p>{result}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
