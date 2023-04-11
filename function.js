console.log("Hola mundo!");

var input = document.querySelector("input");

input.addEventListener("change", (e) =>{
        console.log(e);
        const text = input.value;
        console.log(input.value);
        e.preventDefault();
});

document.getElementById('boton').addEventListener('click', clickBoton);

function clickBoton() {
        console.log("El usuario hizo click en el boton");
        document.getElementById('enviado').style.display = 'block';
        console.log(input.value)
        alert("Mensaje enviado:" + " " +input.value)
}
