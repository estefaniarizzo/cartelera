import './index.css'
import { AiOutlineSearch } from "react-icons/ai";

import React from 'react';
import { connect } from 'react-redux';
import { setTerminoDeBusqueda} from '../redux/actions/moviesActions'; // Asegúrate de ajustar la ruta

function SearchBar({ terminoDeBusqueda, setTerminoDeBusqueda }) {
  const handleInputChange = (e) => {
    const nuevoTermino = e.target.value;
    setTerminoDeBusqueda(nuevoTermino);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Type your text"
        value={terminoDeBusqueda}
        onChange={handleInputChange}
      />
      <button className="search__button">
        <AiOutlineSearch className="icon-search" />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    terminoDeBusqueda: state.terminoDeBusqueda
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTerminoDeBusqueda: (termino) =>
      dispatch(setTerminoDeBusqueda(termino))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);