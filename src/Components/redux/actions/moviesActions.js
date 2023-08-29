export const actualizarTerminoBusqueda = (termino) => {
    return {
      type: 'ACTUALIZAR_TERMINO_BUSQUEDA',
      payload: termino
    };
  };