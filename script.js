let globalVar = "global";

function myLittleFunction() {
  let functionVar = "funcion";
  if (functionVar) {
    let blockVar = "bloque";
  }
}

let closureGlobalVar = "global";

function otherFunction(paramVar) {
  let functionVar = "funcion";
  if (paramVar) {
    let blockVar = "bloque";
  }
  function extraFunction() {
    closureGlobalVar += " variable";
  }
  extraFunction();
}
