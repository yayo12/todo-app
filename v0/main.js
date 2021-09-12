const nuevatarea = document.getElementById("nuevastareas");
const boton = document.getElementById("botonag");
const lista = document.getElementById("lista");

boton.addEventListener("click", function(n){
n.preventDefault();
var textodetarea = nuevatarea.value;
var nuevoli = document.createElement("li");
nuevoli.innerHTML = `
<input type="checkbox">
    <p>${textodetarea}</p>
    <button onclick="eliminarTarea(this)">Eliminar</button>
`;
lista.prepend(nuevoli)

});
function eliminarTarea(n) {
    n.parentElement.remove(); //elimina el elemento padre del elemento que se le pasa como parámetro
}
