import { headerWButton } from "./app.js";
import { dosmil } from "./app.js";

const encabezado = document.createElement("header")
const dosmiles = document.createElement("section")

encabezado.innerHTML = headerWButton
document.body.append(encabezado)
dosmiles.innerHTML = dosmil
document.body.append(dosmiles)