

import React, { useRef, useState } from "react";
import { useInputState } from "../context/inputContext";

const Search = () => {
  const inputSearch = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const { setResult } = useInputState();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setResult(value);
  };

  return (
    <>
      <form>
        <div className="form-control" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto mr-4"
            ref={inputSearch}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
  );
};

export default Search;

