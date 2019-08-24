import React, { Component } from 'react';
import api from '../src/services/api.js';
import './App.css';
import Cards from './components/Cards.js';

class App extends Component {

  state = {
    characters: [],
    search: " ",
    stateSearch: false
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

  onchange = e =>{
    this.setState({ search : e.target.value})
  }

  render() {

    const {search} = this.state;
    const filterCharacteres = this.state.characters.filter ( character => {
      return character.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })

    return (
      <div className="App">
        <div>
          <input label = "Pesquise os personagens" onChange = {this.onchange} />
        </div>
        <h1>Voce pesquisou por "{search}"</h1>
        <div>
          {
            filterCharacteres.map((character) => (
              <Cards character={character} key={character.char_id} />
            ))
          }

        </div>
      </div>
    );
  }
}

export default App;