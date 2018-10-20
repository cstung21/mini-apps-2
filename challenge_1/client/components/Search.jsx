import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input 
        type="textarea" 
        placeholder="Search"
        onChange={props.handleSearchInput}
        className="searchfield"
      />
      <input 
        type="button"
        value="Search"
        onClick={props.initiateSearch}
      />
    </div>
  );
};

export default Search;