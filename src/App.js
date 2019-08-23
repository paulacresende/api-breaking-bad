import React, { Component } from 'react';
import api from '../src/services/api.js';
import './App.css';
import Cards from './components/Cards.js';

class App extends Component {

  state = {
    characters: [],
  }

  componentDidMount() {
     api.get('/characters')
      .then((response) => {
        //console.log(response)
        this.setState({ 
          characters: response.data
        });
      })
      .catch((error) =>
        console.log(error)
      );   
  }

  render() {
    return (
      <div className="App">
        <div>
          {
            this.state.characters.map((character) => (
              <Cards character={character} key={character.char_id} />
            ))
          }

        </div>
      </div>
    );
  }
}

export default App;