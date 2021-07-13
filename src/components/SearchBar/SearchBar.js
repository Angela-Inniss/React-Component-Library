import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import bem from "../../bem";

import SearchBarListContainer from "./SearchBarListItem";

import "./searchbar.scss";

type Props = {
  showListItems: boolean,
};

const SearchBar = ({ showListItems }: Props) => {
  const baseClass = "c-search-bar";

  // book list initial state
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState([
    "Queenie",
    "UGLY",
    "A boy called it",
    "Small Island",
    "Wuthering Heights",
  ]);

  // user search input initial state is empty as no one will have searched for anything yet.
  const [searchValue, setSearchValue] = useState("");

  // this function is what allows our input field to control the ‘search’ value above.
  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  // this filters the books in the list and checks if the book in the list matches what the user has typed
  // i pass this down to the SearchBarListComponent items prop so that each element can be mapped over and styled there

  const dynamicSearch = books.filter((book) => {
    return book.toLowerCase().includes(searchValue.toLowerCase());
  });
  // returns and array of filtered books

  return (
    <div className={baseClass}>
      <label className={bem(baseClass, "label")} htmlFor="Search">
        Search the list
      </label>
      <FontAwesomeIcon
        className={bem(baseClass, "search-icon")}
        icon={faSearch}
      />

      <input
        type="text"
        onChange={handleOnChange}
        value={searchValue}
        placeholder="Search the list"
      />

      <p className={bem(baseClass, "title")}> Book list</p>
      <div>{dynamicSearch.length === 0 ? "sorry no results" : ""}</div>
      <SearchBarListContainer showItems={true} items={dynamicSearch} />
    </div>
  );
};
export default SearchBar;

