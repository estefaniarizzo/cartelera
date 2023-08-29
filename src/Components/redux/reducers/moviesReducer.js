const initialState = {
    cartelera: [], // Aquí almacenaremos las películas en cartelera
    proximamente: [], // Aquí almacenaremos las películas próximamente
    cineAlterno: [] // Aquí almacenaremos las películas en cine alterno
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTUALIZAR_TERMINO_BUSQUEDA':
        return { ...state, terminoDeBusqueda: action.payload };
      // ...otros casos
      default:
        return state;
    }
  };
  
  export default moviesReducer;