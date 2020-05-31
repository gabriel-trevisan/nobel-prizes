import React from 'react';
import data from './data/prizes.json';
import './App.css';
import Prizes from './components/Prizes';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      prizes: []
    }
  }
  
  componentDidMount(){
    this.setState({ prizes: data.prizes });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Nobel Prizes</h1>
        </header>
        <Prizes prizes={this.state.prizes} />
        <footer className="footer">
          <p>
            <strong>Icons made by</strong>
            <ul>
              <li><a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm"> ultimatearm </a></li>
              <li><a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></li>
              <li><a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a></li>
            </ul>
          </p>
        </footer>
      </div>
    );

  }
}

export default App;
