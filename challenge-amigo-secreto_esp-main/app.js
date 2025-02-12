let friends = [];
let cont = 0;

//agrega Amigo a la lista 
function addFriend() {
    let inputText = document.getElementById("amigo").value.trim(); //trim elimina espacios
    //retira el resultado si ya se ha ejecutado Sortear amigo
    if (cont > 0) {
        clearShowOnScreen("resultado", "")
        cont = 0;
    }
    if (inputText != "") {
        //si no existe se agrega
        if (!friends.includes(inputText)) {

            friends.push(inputText)
            clearBox();
            showOnScreen("listaAmigos", inputText)
        } else { alert("este amigo ya esta en la lista") }
    } else {
        alert("Por favor, inserte un nombre.")
    }
}

//selecciona un amigo aleatorio
function ramdonFriend() {
    if (friends.length != 0) {
        cont++
        const resultRamdon = Math.floor(Math.random() * friends.length)
        const secretFriend = friends[resultRamdon]
        //muestra en la etiqueta Ul el resultado del random
        showOnScreen("resultado", `El Amigo secreto es:\n ${secretFriend}`)
        start()
    } else {
        alert("ingresa un Nuevo grupo de Amigos para Sortear")
    }
}

//limpiar caja 
function clearBox() {
    return document.querySelector(".input-name").value = "";
}

//muestra en pantalla agregando etiquetas en <ul>
function showOnScreen(id, contenido) {
    //llamo la etiqueta donde quiero ingresar la etiqueta li que es la <ul>
    const ul = document.getElementById(id);
    //Creo la etiqueta li
    const li = document.createElement("li");
    //asigno el texto a la etiqueta
    li.appendChild(document.createTextNode(contenido));
    //li.setAttribute("id", "li-1"); este me permite asignarle un nombre al atributo "id"
    ul.appendChild(li);
}

//borra el contenido que muestra en pantalla
function clearShowOnScreen(id, contenido) {
    return document.getElementById(id).innerText = contenido;
}

//reinicia variables
function start() {
    //se inicia la lista
    friends = []
    //se limpiar la etiqueta UL
    clearShowOnScreen("listaAmigos", "")
}


