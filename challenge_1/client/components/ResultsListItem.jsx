import React from 'react';

const ResultsListItem = props => {
  const { date, description } = props.item;
  return (
    <div>
      <span>Year: {date}</span>
      <br />
      <p>Event: {description}</p>
    </div>
  );
};


export default ResultsListItem;