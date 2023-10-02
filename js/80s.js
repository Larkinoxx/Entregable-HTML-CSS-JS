import { headerWButton } from "./app.js";
import { ochenta } from "./app.js";

const encabezado = document.createElement("header")
const ochentas = document.createElement("section")

encabezado.innerHTML = headerWButton
document.body.append(encabezado)
ochentas.innerHTML = ochenta
document.body.append(ochentas)