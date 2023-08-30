import { combineReducers } from 'redux';

import terminoDeBusquedaReducer from './moviesReducer'; 
const rootReducer = combineReducers({
  terminoDeBusqueda: terminoDeBusquedaReducer,
});

export default rootReducer;