import React, {Component} from 'react';
import Sports from './components/sports';

class App extends Component {
  state = {
    query: "",
    filteredData: [],
    sports: []
  }

  componentWillMount() {
    this.getData();
  }

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.sports.filter(sport => {
        return sport.strSport.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
    .then(res => res.json())
    .then((data) => {
      const { query } = this.state;
      const filteredData = data.sports.filter(sport => {
        return sport.strSport.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ 
        sports: data.sports,
        filteredData
       });
    })
    .catch(console.log)
  };

  render () {
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <Sports sports={this.state.filteredData} />
      </div>
    );
  }
}

export default App;