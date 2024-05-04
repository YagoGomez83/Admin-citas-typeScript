// Selectores
export const pacienteInput = document.querySelector(
  "#paciente"
) as HTMLInputElement;
export const propietarioInput =
  document.querySelector<HTMLInputElement>("#propietario");
export const emailInput = document.querySelector<HTMLInputElement>("#email");
export const fechaInput = document.querySelector<HTMLInputElement>("#fecha");
export const sintomasInput =
  document.querySelector<HTMLTextAreaElement>("#sintomas");

export const formulario =
  document.querySelector<HTMLFormElement>("#formulario-cita");
export const formularioInput = document.querySelector(
  '#formulario-cita input[type="submit"]'
) as HTMLInputElement;
export const contenedorCitas = document.querySelector<HTMLDivElement>("#citas");
