import React from 'react';

const Keypad = props => {
  return (
    <div>
      <h3>Select score for current bowl: </h3>
      {props.numbers.map(number => 
        (
        <button className="keypad" type="button" key={number} onClick={() => props.handleInputScore(number)}>{number}</button>
        ))
      }
    </div>
  );
};

export default Keypad;