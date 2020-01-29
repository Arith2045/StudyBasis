export default (state = {ID: "", PW: ""}, action) {
  switch(action.type){
    case "LOGIN": {
      const msg = "";
      return {...state, resultMsg: msg};
    }
    default: {
      return state;
    }
  }
}