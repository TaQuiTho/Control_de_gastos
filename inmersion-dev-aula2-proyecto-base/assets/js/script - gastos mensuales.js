let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcion = document.getElementById('descripcion').value;


    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcion);


    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
  
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcion = listaDescripcionGastos[posicion];

         htmlLista += `
            <li>
               <div>
                   <strong>${elemento}</strong> - USD ${valorGasto.toFixed(2)} 
                   <p>${descripcion}</p>
               </div>
               <div class="buttons">
                   <button onclick="modificarGastos(${posicion});">Modificar</button>
                   <button onclick="eliminarGasto(${posicion});">Eliminar</button>
               </div>
         </li>`;
         totalGastos += (valorGasto);
        if (totalGastos > 150) {
            alert('Su gasto es superior a 150 dólares.');
        }
    
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}
function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcion').value = '';

}
function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1);
    actualizarListaGastos();
}
function modificarGastos(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcion').value = listaDescripcionGastos[posicion];
    document.getElementById('botonFormulario').innerText = 'Actualizar Gastos'
}