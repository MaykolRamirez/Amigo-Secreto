// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    } 

    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista. Considera agregar una inicial o apellido para diferenciarlo.`);
        return;
    }
    amigos.push(nombreAmigo);
    recorrerLista();
    document.getElementById('amigo').value = '';

} 

function recorrerLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía.');
        return;
    }
    
    if (amigos.length < 3) {
        alert('Debe haber al menos 3 amigos para realizar el sorteo.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let nombreSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${nombreSorteado}</li>`;
    
    document.getElementById('listaAmigos').style.display = 'none';
    document.querySelector('.button-draw').disabled = true;
    document.querySelector('.button-add').disabled = true;
}





