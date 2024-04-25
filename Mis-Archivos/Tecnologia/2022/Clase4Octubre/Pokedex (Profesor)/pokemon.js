const add = document.getElementById('button')
const cont = document.getElementById('container')
add.addEventListener('click', ()=>{
    let  aleatorio = Math.floor(Math.random()*(100 - 1)+1)
    let url = 'https://pokeapi.co/api/v2/pokemon/' + aleatorio;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.sprites.front_shiny);

        cont.innerHTML += 
    `
    <div class="card">
        <div class="pokemon">
            <img src=${data.sprites.front_default}>
        </div>
        <div class="nombre">
            ${data.species.name}
        </div>
    </div>
    
    `
        })
})