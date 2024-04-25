id = "BotonTriqui1"
let arrays = [];

setInterval(()=>{
    let aleatorio = Math.round(Math.random() * (25 - 1) + 1,1);
    ant=document.getElementById(id);
    ant.style.background="rgb(255,255,255)";
    id = `BotonTriqui1${aleatorio}`;
    let ButtonColor = document.getElementById(id);
    ButtonColor.style.background="red";

    arrays.push(id);

},1000)

//No me esta funcionando//