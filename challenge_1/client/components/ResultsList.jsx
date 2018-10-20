import React from 'react';
import ResultsListItem from './ResultsListItem.jsx'

const Results = props => {
  let resultList = props.data.map((item, idx) => (
    <ResultsListItem key={idx} item={item} />
  ));

  return (
    <ul>
      {resultList}
    </ul>
  );
};

export default Results;