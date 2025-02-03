let friends = [];
let cont = 0;

//agrega Amigo a la lista 
function addFriend(){
    let inputText = document.getElementById("amigo").value;
    //retira el resultado si ya se ha ejecutado Sortear amigo
    if (cont >0) clearResult()
    if (inputText != ""){
        friends.push(inputText)
        clearBox();
        showList();

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
    addResult(secretFriend)
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

//mostrar lista
function showList(){
    let contentList =  document.getElementById("listaAmigos").innerText = friends.join("\n")
}

//agrega resultado en pantalla
function addResult(secret){
    let result = document.getElementById("resultado").innerHTML= `El Amigo secreto es:\n ${secret}`;
}

//limpiar el reatultado del sorteo
function clearResult (){
    return document.getElementById("resultado").innerHTML= "";
}

function start (){
    //se inicia la lista
    friends = []
    //se limpiar la etiqueta UL
    document.getElementById("listaAmigos").innerText = "";
    
}


