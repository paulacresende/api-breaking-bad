import React, { Component } from 'react';
import api from '../src/services/api.js';
import './App.css';
import Cards from './components/Cards.js';
import logo from './assets/breaking-bad-vector-logo.png';
import lupa from './assets/ic-search-copy.png';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: " ",
      searchBar: false,
    };
  }

  componentDidMount() {
    api.get('/characters')
      .then((response) => {
        console.log(response)
        this.setState({
          characters: response.data
        });
      })
      .catch((error) =>
        console.log(error)
      );
  }

  onchange = e => {
    this.setState({ search: e.target.value })
    this.setState({ searchBar: true })
  }

  render() {

    const { search } = this.state;
    const filterCharacteres = this.state.characters.filter(character => {
      return character.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div className="App">
       
        <nav className="header">
          <img src={logo} alt='logo' id="logo" />
          <div className="search-bar">
            <input type="text" name="Pesquisar" placeholder="Pesquise os personagens" className="input" onChange={this.onchange} />
            <img src={lupa} alt="lupa" />
          </div>
        </nav>
        
        <div>
          {this.state.searchBar ?
            <h1>Você pesquisou por "{search}"</h1>
            : <h1>Personagens</h1> 
          }
        </div>
        <div className="all-characters">
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