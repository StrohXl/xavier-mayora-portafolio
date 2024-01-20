import type { ModelItemForms } from "~/models/modelItemForms";

const itemForms: ModelItemForms[] = [
  {
    idLabel: "label-firstName",
    for: "firstName",
    title: "Nombre:",
    type: "text",
    message: "Ingrese su nombre"
  },
  {
    idLabel: "label-lastName",
    for: "lastName",
    title: "Apellido:",
    type: "text",
    message: "Ingrese su apellido"

  },
  {
    idLabel: "label-email",
    for: "email",
    title: "Correo:",
    type: "email",
    message: "Ingrese su correo"

  },
  {
    idLabel: "label-body",
    for: "body",
    title: "Cuerpo del Mensaje",
    type: "text",
    message: "Ingrese su mensaje"

  },
];
export default itemForms;
