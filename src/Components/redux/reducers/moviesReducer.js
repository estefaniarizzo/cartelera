const initialState = {
    cartelera: [], // Aquí almacenaremos las películas en cartelera
    proximamente: [], // Aquí almacenaremos las películas próximamente
    cineAlterno: [] // Aquí almacenaremos las películas en cine alterno
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      // Agrega casos para las acciones aquí, por ejemplo:
      // case 'CARGAR_CARTELERA':
      //   return { ...state, cartelera: action.payload };
      default:
        return state;
    }
  };
  
  export default moviesReducer;