// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function elementoPorID(ID){
    return document.getElementById(ID);
}

function agregarAmigo(){
    let amigoInput = elementoPorID('amigo')
    let amigo = amigoInput.value.trim();
    if(amigo == ""){
        alert("No se admiten espacios vacios");
    }else{
        //console.log(`Añadiendo a: ${amigo}`);
        nombresAmigos.push(amigo);
    }
    //console.log('Borrando input');
    amigoInput.value = "";

    if(nombresAmigos.length > 0){
        listaAmigos(nombresAmigos);
    }
}

function listaAmigos(amigos){
    limpiarElemento('listaAmigos');
    for(let i = 0; i < amigos.length; i++){
        addLi('listaAmigos', amigos[i]);
    }
}

function limpiarElemento(id){
    let elemento = elementoPorID(id);
    elemento.innerHTML = "";
}

function addLi(id, text){
    let lista = elementoPorID(id);
    let li = document.createElement("li");
    li.textContent = text;
    lista.appendChild(li);
}

function elegirAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    return nombresAmigos[indiceAleatorio]; 
}

function sortearAmigo(){
    if(nombresAmigos.length > 1){
        limpiarElemento('resultado');
        addLi('resultado', elegirAmigo());
    }else{
        alert("Se necesitan por lo menos 2 amigos");
    }
}