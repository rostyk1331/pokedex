import React from "react";
import "./style.css";

const SelectedPokemon = ({
  pokemon: { name, types, stats, weight, moves, sprites }
}) => {
  return (
    <div className="pt-4 sticky-top w-100">
      <img
        src={sprites.front_default}
        className="mx-auto d-block img-fluid"
        alt="Pokemon"
      />
      <h3 className="text-center">{name}</h3>

      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Type</td>
            <td>{types.map(element => element.type.name).join(", ")}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{stats[4].base_stat}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{stats[3].base_stat}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{stats[5].base_stat}</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>{stats[2].base_stat}</td>
          </tr>
          <tr>
            <td>SP Defense</td>
            <td>{stats[1].base_stat}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{stats[0].base_stat}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>{moves.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectedPokemon;
