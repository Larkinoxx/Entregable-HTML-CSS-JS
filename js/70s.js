import { headerWButton } from "./app.js";
import { setenta } from "./app.js";

const encabezado = document.createElement("header")
const setentas = document.createElement("section")

encabezado.innerHTML = headerWButton
document.body.append(encabezado)
setentas.innerHTML = setenta
document.body.append(setentas)