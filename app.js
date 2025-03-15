<<<<<<< HEAD
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
=======

>>>>>>> ae94c7b7e9506b6d14592b324543a834f11593b6

let nombres = []; // Almaceno los nombres
funtion agregarAmigo(){
    let input = document.querySelector('#amigo'); // captura el valor
    let nombre = input.value.trim(); // Aquí elimino espacios en blanco, tipo para evitar también si solo ponen espacios que no lo coja como nombre.
    if (nombre){
        nombres.push(nombre); // ahí actualiza
        mostrarLista();
        input.value = ""; // Para que puedan escribir otro (limpia)
    } else {
        alert("Por favor, inserte un nombre");
    }
}

function mostrarLista(){
    let lista = document.querySelector("listaAmigos");
    lista.innerHTML = ""; // Aquí es para limpiar antes de actualizar
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
function sortearAmigo(){
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];
    
    document.querySelector("#resultado").innerHTML = `<li>${nombreSorteado}</li>`;
}

