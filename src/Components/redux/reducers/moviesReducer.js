const initialState = '';

const terminoDeBusquedaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TERMINO_DE_BUSQUEDA':
      return action.payload;
    default:
      return state;
  }
};

export default terminoDeBusquedaReducer;
