import React, { useState, useContext } from "react";
import FiltersContext from "../contexts/FiltersContext";

const Filters = (props) => {
  const filtersContext = useContext(FiltersContext);
  const [min, setMin] = useState(filtersContext.filters.min);
  const [max, setMax] = useState(filtersContext.filters.max);
  const [name, setName] = useState(filtersContext.filters.name);

  const handleApplyFilter = () => {
    const newFilters = { min: min, max: max, name: name };

    filtersContext.dispatch({ type: "SET_FILTERS", filters: newFilters });
  };

  const handleResetFilters = () => {
    filtersContext.dispatch({ type: "RESET_FILTERS" });
    setMin("");
    setMax("");
    setName("");
  };

  return (
    <div>
      <h4>Filtros</h4>
      <input
        placeholder="Valor mínimo"
        value={min}
        type="number"
        onChange={(event) => setMin(event.target.value)}
      />
      <input
        placeholder="Valor máximo"
        value={max}
        type="number"
        onChange={(event) => setMax(event.target.value)}
      />
      <input
        placeholder="Nome"
        value={name}
        type="string"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleApplyFilter}>Aplicar filtro</button>
      <button onClick={handleResetFilters}>Limpar filtros</button>
    </div>
  );
};

export default Filters;
