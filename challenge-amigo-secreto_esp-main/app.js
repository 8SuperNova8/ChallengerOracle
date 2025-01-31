// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function add(){
    let inputText = document.getElementById("amigo").value;
    if (inputText != ""){

        friends.push(inputText)
        console.log (friends)
        console.log ("esto es addText "+ typeof(addText))
    }else{
        alert("Ingresa un valor valido")
    }
}