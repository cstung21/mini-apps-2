import React from 'react';
import Scoreboard from './Scoreboard.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Bowling Score Calculator</h1>
        <Scoreboard />
      </div>
    );
  }
}

export default App;

