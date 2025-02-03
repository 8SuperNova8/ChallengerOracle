let friends = [];
let cont = 0;

//agrega Amigo a la lista 
function addFriend(){
    let inputText = document.getElementById("amigo").value;
    //retira el resultado si ya se ha ejecutado Sortear amigo
    if (cont >0) showOnScreen("resultado", "")
    if (inputText != ""){
        friends.push(inputText)
        clearBox();
        showOnScreen("listaAmigos", friends.join("\n"))
        
    }else{
        alert("Ingresa un valor valido")
    }
}

//selecciona un amigo aleatorio
function ramdonFriend(){
    if (friends.length!= 0) {
    cont ++
    let resultRamdon = Math.floor(Math.random()* friends.length)
    let secretFriend = friends[resultRamdon]
    //muestra en la etiqueta Ul el resultado del random
    showOnScreen("resultado", `El Amigo secreto es:\n ${secretFriend}`)
    start()
    console.log (friends)
    }else{
        alert("debe ingresar Amigos para Sortear")
    }
    
}

//limpiar caja 
function clearBox(){
    return document.querySelector(".input-name").value ="";
}

//showOnScreen muestra en pantalla
function showOnScreen(etiqueta, contenido){
    return document.getElementById(etiqueta).innerText= contenido;
}

function start (){
    //se inicia la lista
    friends = []
    //se limpiar la etiqueta UL
    showOnScreen("listaAmigos", "")
}


