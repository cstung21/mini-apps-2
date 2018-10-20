import React from 'react';
import Keypad from './Keypad.jsx';

class Scoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      frame: 1,
      frameBowl: 1,
      scores: [],
      currentFrame: [],
      totalScore: ''
    };
    this.handleInputScore = this.handleInputScore.bind(this);
  }

  handleInputScore(score) {
    // const { frame, frameBowl, scores, currentFrame} = this.state;
    // if (frame >= 1 && frame <= 9) {
    //   if (frameBowl === 1) {
    //     this.setState({
    //       frameBowl: 2,
    //       currentFrame: [score]
    //     });
    //   } else if (frameBowl === 2) {
    //     this.setState(prevState => {
    //       frameBowl: 1,
    //       // scores: prevState.scores.push(prevState.currentFrame.push(score)),
    //       currentFrame: [],
    //       frame: prevState.frame + 1
    //     });
    //   }
    // } else if (frame === 10) {
    //   if (frameBowl === 1) {
    //     this.setState(prevState => {
    //       frameBowl: 2,
    //       currentFrame: [score]
    //     });
    //   } 
    // }

  }

  render() {
    return (
      <div>
        <Keypad 
          handleInputScore={this.handleInputScore}
          numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </div>
    );
  }
}

export default Scoreboard;

