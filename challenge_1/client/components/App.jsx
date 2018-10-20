import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import ResultsList from './ResultsList.jsx';
import ReactPaginate from 'react-paginate';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: '',
      searchTerm: '',
      searchResults: [],
      resultsPerPage: 10,
      totalSearchResults: 0
    };
  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.initiateSearch = this.initiateSearch.bind(this);
  this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleSearchInput(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  initiateSearch(event) {
    const { searchTerm, resultsPerPage, page } = this.state;
    axios.get(`/events?q=${searchTerm}&_limit=${resultsPerPage}&_page=${page}`)
      .then(response => { this.setState({ searchResults: response.data, totalSearchResults: parseInt(response['headers']['x-total-count']) }) }) 
      .catch(error => { console.log(error) });
  }

  handlePageChange(page) {
    this.setState({
      page: page.selected + 1
    }, () => this.initiateSearch());
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <h2>What would you like to search for?</h2>
        <Search 
          handleSearchInput={this.handleSearchInput} 
          initiateSearch={this.initiateSearch}
        />
        <ResultsList data={this.state.searchResults}/>
        { this.state.searchResults.length > 0 ? <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={<a href="">...</a>}
          pageCount={Math.ceil(this.state.totalSearchResults / this.state.resultsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageChange}
          pageClassName={"pagebutton"}
          previousClassName={"previous"}
          nextClassName={"next"}
          breakClassName={"ellipsis"}
        /> : '' }
      </div>

    );
  }
}


export default App;