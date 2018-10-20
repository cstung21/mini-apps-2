import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import LineChart from './LineChart.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: '2018-01-01',
      endDate: '2018-10-17',
      data: ''
    };
    this.getPriceData = this.getPriceData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getPriceData();
  }

  getPriceData() {
    const { startDate, endDate} = this.state;
    axios.get('/coindesk', {
      params: {
        start: startDate,
        end: endDate
      }
    })
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.log(error));
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        <Search 
          handleInputChange={this.handleInputChange}
          getPriceData={this.getPriceData}
        />
        <br />
        { this.state.data && <LineChart 
          data={this.state.data}
        /> }
      </div>
    );
  }
}


export default App;
