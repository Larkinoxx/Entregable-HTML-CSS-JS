import { headerWButton } from "./app.js";
import { noventa } from "./app.js";

const encabezado = document.createElement("header")
const noventas = document.createElement("section")

encabezado.innerHTML = headerWButton
document.body.append(encabezado)
noventas.innerHTML = noventa
document.body.append(noventas)