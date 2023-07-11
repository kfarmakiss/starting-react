import React from 'react';
import PokemonRow from "./PokemonRow";
import PokemonContext from '../PokemonContext';

const PokemonTable = () => {
    const {pokemon, filter, selectedPokemonSet} = React.useContext(PokemonContext);
    return (
    <table width="100%">
            <tbody>
              {pokemon
                .filter(({ name: { english } }) =>
                  english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    onClick={(pokemon) => selectedPokemonSet(pokemon)}
                  />
                ))}
            </tbody>
          </table>
);
};


export default PokemonTable;