import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Pune");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={e => {
              setLocation(e.target.value);
            }}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
