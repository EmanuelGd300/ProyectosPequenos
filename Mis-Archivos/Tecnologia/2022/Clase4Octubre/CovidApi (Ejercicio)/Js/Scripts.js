const add = document.getElementById('button')
const cont = document.getElementById('container')
add.addEventListener('click', ()=>{
    let  aleatorio = Math.floor(Math.random()*(100 - 1)+1)
    let url = 'https://api.covidtracking.com/' + aleatorio;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.sprites.front_shiny);

        cont.innerHTML += 
    `
    <div class="card">
        <div class="pokemon">
            ${data.positive}
        </div>
        <div class="nombre">
            ${data.death}
        </div>
    </div>
    
    `
        })
})