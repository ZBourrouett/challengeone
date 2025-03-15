//#Comentario sobre elecciones:
//No pude hacerlo con "querySelector"
// let input = document.querySelector('amigo');  
// document.querySelector('resultado').innerHTM
// let lista = document.querySelector('listaAmigos');
let namigos = [];
function agregarAmigo(){
    let nombreamigo = document.getElementById('amigo').value;  //Captura nombre
    console.log(typeof(nombreamigo));
    console.log(nombreamigo);

    if((typeof nombreamigo === 'string') && (nombreamigo.trim().length > 0)){  //Espacio no vacio
        namigos.push(nombreamigo.trim()); //Agrega nombre a lista
        console.log(namigos);
          mostrarLista(); 
        document.getElementById('amigo').value = '';  //Limpieza
    }else{
        alert('Por favor inserte un nombre');
    }
}
function mostrarLista(){ 
    let lista = document.getElementById('listaAmigos'); //Obtener los elementos de la lista
    lista.innerHTML = ''; //Limpiar la lista

    for (i = 0; i < namigos.length; i++){
        let item = document.createElement('li'); // li
        item.textContent = namigos[i]; //Agrega nombres
        lista.appendChild(item); 
    }
}
function sortearAmigo(){
    if(namigos.length === 0){
        alert('No hay amigos en la lista para realizar el sorteo'); // En caso de vacía
    }else{
        let indiceAleatorio = Math.floor(Math.random() * namigos.length); //numero aleatorio
         let amigost = namigos[indiceAleatorio]; //Seleccion de amigo
        let resultado = document.getElementById('resultado'); 
        resultado.innerHTML = `El amigo secreto es ${amigost}`; //Resultado
    }
}

