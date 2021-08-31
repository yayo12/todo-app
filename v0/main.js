const nuevastareas = document.getElementById("nuevastareas");
const botonag = document.getElementById("botonag");
const lista = document.getElementById("lista");

botonag.addEventListener("click", function(n){
n.preventDefault();
const textodetarea = nuevastareas.value
agregartarea(textodetarea);


}
);
