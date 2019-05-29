import React, {Component} from 'react';
import Sports from './components/sports';

class App extends Component {
  state = {
    sports: []
  }

  componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
    .then(res => res.json())
    .then((data) => {
      this.setState({ sports: data.sports })
    })
    .catch(console.log)
  }

  render () {
    return (
      <Sports sports={this.state.sports} />
    );
  }
}

export default App;