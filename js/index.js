import { header } from "./app.js";
import { index } from "./app.js";
import { footer } from "./app.js";

const encabezado = document.createElement("header")
const inicio = document.createElement("section")
const pie = document.createElement("footer")

encabezado.innerHTML = header
document.body.append(encabezado)
inicio.innerHTML = index
document.body.append(inicio)
pie.innerHTML = footer
document.body.append(pie)