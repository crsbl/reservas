const estadoInicial = {
  valueInput00: 1,
  valueInput01: 2023,
  valueInput02: 30,
  valueInput03: new Date().getMonth() + 1,
  valueInput04: new Date().getFullYear(),
  valuePosition00: 0,
  stateInp00: false,
  stateInp01: false,
  stateInp03: false,
  stateInp04: false,
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
    case "CHANGE_INPUT02":
      return {
        ...state,
        valueInput02: accion.payload,
      };
    case "CHANGE_INPUT03":
      return {
        ...state,
        valueInput03: accion.payload,
      };
    case "CHANGE_INPUT04":
      return {
        ...state,
        valueInput04: accion.payload,
      };
      case "CHANGE_VALUEPOSITION00":
      return {
        ...state,
        valuePosition00: accion.payload,
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
    case "CHANGE_STATE_INPUT03":
      return {
        ...state,
        stateInp03: accion.payload,
      };
    case "CHANGE_STATE_INPUT04":
      return {
        ...state,
        stateInp04: accion.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
