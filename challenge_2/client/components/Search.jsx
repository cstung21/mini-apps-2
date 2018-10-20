import React from 'react';


const Search = props => {
  const { handleInputChange, getPriceData } = props;
  return (
    <div>
      <h2>Please enter desired date range: </h2>
      <form>
        <label>Start Date: </label>
        <input
          type="text"
          onChange={handleInputChange}
          name="startDate"
          placeholder="YYYY-MM-DD"
        />
        <label>End Date: </label>
        <input
          type="text"
          onChange={handleInputChange}
          name="endDate"
          placeholder="YYYY-MM-DD"
        />
        <input
          type="button"
          value="Search"
          onClick={getPriceData}
        />
      </form>
    </div>  
  );
};

export default Search;