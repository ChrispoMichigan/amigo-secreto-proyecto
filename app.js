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
    lista = elementoPorID('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}