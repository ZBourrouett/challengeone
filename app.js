<<<<<<< HEAD
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
=======

>>>>>>> ae94c7b7e9506b6d14592b324543a834f11593b6

const nombres = []; // Almaceno los nombres
funtion AgregarAmigo() {
    const input = document.querySelector("#amigo"); // captura el valor
    const nombre = input.value.trim(); // Aquí elimino espacios en blanco, tipo para evitar también si solo ponen espacios que no lo coja como nombre.
    if (nombre){
        nombres.push(nombre); // ahí actualiza
        actLista();
        input.value = ""; // Para que puedan escribir otro (limpia)
    } else {
        alert("Por favor, inserte un nombre");
    }
}

function actLista() {
    const lista = document.querySelector("listaAmigos");
    lista.innerHTML = ""; // Aquí es para limpiar antes de actualizar
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];
    
    document.querySelector("#resultado").innerHTML = `<li>${nombreSorteado}</li>`;
}
