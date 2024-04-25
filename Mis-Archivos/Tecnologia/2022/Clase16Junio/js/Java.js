const aleatorio = (desde, hasta) => ((Math.round(Math.random() * (hasta - desde) + desde)))
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let pos = 0;
for (let i = 1; i <= 15; i++) {

    pos = aleatorio(0, arr.length - 1);

    document.getElementById(`c${arr[pos]}`).addEventListener("click", () => {
        document.getElementById(`c${arr[pos]}`).style.backgroundImage = `url('img/${+i}.jpg')`;
        document.getElementById(`c${arr[pos]}`).style.backgroundSize = "cover";
    })
    Array.splice(pos, 0);
    pos = aleatorio(0, arr.length - 1);
    document.getElementById(`c${arr[pos]}`).addEventListener("click", () => {
        document.getElementById(`c${arr[pos]}`).style.backgroundImage = `url('img/${+i}.jpg')`;
        document.getElementById(`c${arr[pos]}`).style.backgroundSize = "cover";
    })
}

// Tenemos un error todos //