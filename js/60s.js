import { headerWButton } from "./app.js";
import { sesenta } from "./app.js";

const encabezado = document.createElement("header")
const sesentas = document.createElement("section")

encabezado.innerHTML = headerWButton
document.body.append(encabezado)
sesentas.innerHTML = sesenta
document.body.append(sesentas)