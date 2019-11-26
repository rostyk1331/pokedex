import React from "react";
import "./style.css";

class Pokemon extends React.Component {
  state = { info: {}, loaded: false };

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}/`)
      .then(response => response.json())
      .then(data => {
        this.setState({ info: data, loaded: true });
      });
  }

  render() {
    const { name, types, sprites } = this.state.info;
    return (
      <div className="col-sm-6 col-md-4">
        {this.state.loaded && (
          <div className="border mb-2 cursor-pointer">
            <div
              onClick={() => {
                this.props.onPokemonSelect(this.state.info);
              }}
            >
              <img
                src={sprites.front_default}
                className="mx-auto d-block img-fluid"
                alt="Pokemon"
              />
              <p className="text-center font-weight-bold">{name}</p>
              <div className="d-flex justify-content-around">
                {types.map((element, index) => (
                  <span
                    className="mb-1 mr-1 p-1 pokemon-type rounded"
                    key={index}
                  >{`${element.type.name}`}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Pokemon;
