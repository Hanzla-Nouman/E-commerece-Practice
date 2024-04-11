import React, { useRef, useState } from "react";
import { useInputState } from "../context/inputContext";

const Search = () => {
  const inputSearch = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const { setResult } = useInputState();

  const handleInputForm = (e) => {
    e.preventDefault();
    setResult(inputValue)
  };

  return (
    <>
      <form onSubmit={handleInputForm}>
        <div className="form-control" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            ref={inputSearch}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" disabled={!inputValue}>
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
