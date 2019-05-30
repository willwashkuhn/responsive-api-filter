import React, {Component} from 'react';
import Sports from './components/sports';

class App extends Component {
  state = {
    query: "BALL",
    filteredData: [],
    sports: []
  }

  componentDidMount() {
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
  }

  render () {
    return (
      <Sports sports={this.state.filteredData} />
    );
  }
}

export default App;