import React from "react";
import PokemonsList from "./PokemonsList";
import SelectedPokemon from "./SelectedPokemon";

class App extends React.Component {
  state = { pokemonsList: [], selectedPokemon: null };

  componentDidMount() {
    this.onPokemonLoad();
  }

  onPokemonSelect = pokemon => {
    this.setState({ selectedPokemon: pokemon });
  };

  onPokemonLoad = () => {
    const pokemonsOnPage = this.state.pokemonsList.length;

    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=12${
        !!pokemonsOnPage ? `&offset=${pokemonsOnPage}` : ""
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokemonsList: [...this.state.pokemonsList, ...data.results]
        });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1 className="text-center">Pokedex</h1>
            <PokemonsList
              pokemonsList={this.state.pokemonsList}
              onPokemonSelect={this.onPokemonSelect}
            />
            <div className="text-center">
              <button
                className="btn btn-primary w-75 my-2"
                onClick={this.onPokemonLoad}
              >
                Load More
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            {this.state.selectedPokemon && (
              <SelectedPokemon pokemon={this.state.selectedPokemon} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
