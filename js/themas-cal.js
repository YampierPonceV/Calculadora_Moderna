/* VARIABLES DE LOS SWITCH */

let switch_uno = document.getElementById("switch_uno");
let switch_dos = document.getElementById("switch_dos");
let switch_tres = document.getElementById("switch_tres");

let marcadores_uno = document.getElementById("marcadores-uno");
let marcadores_dos = document.getElementById("marcadores-dos");
let marcadores_tres = document.getElementById("marcadores-tres");

/* VARIABLE DEL BODY */

let body = document.getElementById("body_theme_id");

/* VARIABLES DE LA CALCULADORA */

let title_container = document.getElementById("title_container");

let container_valores = document.getElementById("container_valores");

let container_botones = document.getElementById("container_botones");

let bg_switch = document.getElementById("bg_switch");

let btn_delete = document.getElementById("btn_delete");
let btn_igual = document.getElementById("btn_igual");
let btn_reset = document.getElementById("btn_reset");

let botones_numeros = document.querySelectorAll(".numero");
let botones_operador = document.querySelectorAll(".operador");

/* CODIGO PARA EL THEMA UNO */

switch_uno.addEventListener("click", function () {
  /* codigo para el swicht */
  switch_uno.style.opacity = "1";
  switch_dos.style.opacity = "0";
  switch_tres.style.opacity = "0";

  /* AGREFAMOS LOS ESTILOS */
  title_container.style.color = "#eae3db";
  marcadores_uno.style.color = "#eae3db";
  marcadores_dos.style.color = "#eae3db";
  marcadores_tres.style.color = "#eae3db";
  bg_switch.style.backgroundColor = "#252D44";
  container_valores.style.backgroundColor = "#181F32";
  container_valores.style.color = "#eae3db";
  container_botones.style.backgroundColor = "#252D44";
  btn_reset.style.backgroundColor = "#647299";
  btn_reset.style.borderBottom = "3px solid #424E74";
  btn_delete.style.backgroundColor = "#647299";
  btn_delete.style.borderBottom = "3px solid #424E74";
  botones_numeros.forEach((numero) => {
    numero.style.backgroundColor = "#EAE3DB";
    numero.style.color = "#434654";
    numero.style.borderBottom = "3px solid #B2A498";
  });
  botones_operador.forEach((numero) => {
    numero.style.backgroundColor = "#EAE3DB";
    numero.style.color = "#434654";
    numero.style.borderBottom = "3px solid #B2A498";
    btn_igual.style.backgroundColor = "#D13F30";
    btn_igual.style.borderBottom = "3px solid #962315";
    btn_igual.style.color = "#FFF9E9"
  });

  /* BORRAR LOS ESTILOS DE LOS THEMAS DOS Y TRES*/
  body.classList.remove("body_them_dos");
  body.classList.remove("body_them_tres");
});

/* CODIGO PARA EL THEMA DOS */

switch_dos.addEventListener("click", function () {
  /* codigo para el swicht */
  switch_dos.style.opacity = "1";
  switch_uno.style.opacity = "0";
  switch_tres.style.opacity = "0";
  console.log("diste click");

  /* AGREGAR LOS ESTILOS */
  body.classList.add("body_them_dos");
  title_container.style.color = "#41403B";
  marcadores_uno.style.color = "#41403B";
  marcadores_dos.style.color = "#41403B";
  marcadores_tres.style.color = "#41403B";
  bg_switch.style.backgroundColor = "#D3CDCD";
  switch_dos.style.backgroundColor = "#C35602";
  container_valores.style.backgroundColor = "#EEEEEE";
  container_valores.style.color = "#343428";
  container_botones.style.backgroundColor = "#D3CDCD";
  btn_reset.style.backgroundColor = "#388187";
  btn_reset.style.borderBottom = "3px solid #1A5F64";
  btn_delete.style.backgroundColor = "#388187";
  btn_delete.style.borderBottom = "3px solid #1A5F64";
  botones_numeros.forEach((numero) => {
    numero.style.backgroundColor = "#E5E4E0";
    numero.style.color = "#39392F";
    numero.style.borderBottom = "3px solid #B4AEA4";
  });
  botones_operador.forEach((numero) => {
    numero.style.backgroundColor = "#E5E4E0";
    numero.style.color = "#39392F";
    numero.style.borderBottom = "3px solid #B4AEA4";
    btn_igual.style.backgroundColor = "#C85401";
    btn_igual.style.borderBottom = "3px solid #873B01";
    btn_igual.style.color = "#FFF9E9"
  });
  /* BORRAR LOS ESTILOS DE LOS THEMAS UNO Y TRES */
  body.classList.remove("body_them_tres");
});

/* CODIGO PARA EL THEMA TRES */

switch_tres.addEventListener("click", function () {
  /* codigo para switch */
  switch_tres.style.opacity = "1";
  switch_uno.style.opacity = "0";
  switch_dos.style.opacity = "0";

  /* AGREGAR LOS ESTILOS */
  body.classList.add("body_them_tres");
  title_container.style.color = "#FFE343";
  marcadores_uno.style.color = "#FFE343";
  marcadores_dos.style.color = "#FFE343";
  marcadores_tres.style.color = "#FFE343";
  bg_switch.style.backgroundColor = "#1E0836";
  switch_tres.style.backgroundColor = "#07DAD3";
  container_valores.style.backgroundColor = "#1E0836";
  container_valores.style.color = "#FFE940";
  container_botones.style.backgroundColor = "#1E0836";
  btn_reset.style.backgroundColor = "#56077C";
  btn_reset.style.borderBottom = "3px solid #B919ED";
  btn_delete.style.backgroundColor = "#56077C";
  btn_delete.style.borderBottom = "3px solid #B919ED";
  botones_numeros.forEach((numero) => {
    numero.style.backgroundColor = "#331B4D";
    numero.style.color = "#FDE44A";
    numero.style.borderBottom = "3px solid #861D9D";
  });
  botones_operador.forEach((numero) => {
    numero.style.backgroundColor = "#331B4D";
    numero.style.color = "#FDE44A";
    numero.style.borderBottom = "3px solid #861D9D";
    btn_igual.style.backgroundColor = "#00DECF";
    btn_igual.style.borderBottom = "3px solid #6EF9F0";
    btn_igual.style.color = "#39392F"
    btn_igual.style.fontWeight = "bold"
  });

  /* BORRAR LOS ESTILOS DE LOS THEMAS UNO Y DOS */
  body.classList.remove("body_them_dos");
});
