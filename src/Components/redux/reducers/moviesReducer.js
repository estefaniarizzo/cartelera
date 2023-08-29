const initialState = {
  cartelera: [], // Aquí almacenaremos las películas en cartelera
  proximamente: [], // Aquí almacenaremos las películas próximamente
  cineAlterno: [], // Aquí almacenaremos las películas en cine alterno
  terminoDeBusqueda: '',
  peliculas: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_TERMINO_BUSQUEDA':
      return { ...state, terminoDeBusqueda: action.payload };
    // ...otros casos

    case 'ACTUALIZAR_PELICULAS':
      return {
        ...state,
        peliculas: action.payload // Actualiza las películas aquí
      };

    default:
      return state;
  }
};

export default moviesReducer;
