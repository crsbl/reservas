const estadoInicial = {
  valueInput00: 1,
  valueInput01: 2023,
  stateInp00: false,
  stateInp01: false,
};

function rootReducer(state = estadoInicial, accion) {
  console.log(accion);
  switch (accion.type) {
    case "CHANGE_INPUT00":
      return {
        ...state,
        valueInput00: accion.payload,
      };
    case "CHANGE_INPUT01":
      return {
        ...state,
        valueInput01: accion.payload,
      };
    case "CHANGE_STATE_INPUT00":
      return {
        ...state,
        stateInp00: accion.payload,
      };
    case "CHANGE_STATE_INPUT01":
      return {
        ...state,
        stateInp01: accion.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
