let formulario = document.getElementById('product-form');
formulario.addEventListener('submit', (e) => {

    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let ano = document.getElementById('ano').value;

    let inter = new UI();

    if(nombre === "" || precio === "" || ano === ""){
        document.getElementById('msg').innerHTML = inter.ShowMessage('Faltan campos por llenar', 'Warning')
        return;
    }

    inter.addProduct(new product(nombre, precio, ano));
    document.getElementById('msg').innerHTML = inter.ShowMessage('Producto Agregado', 'success')
    inter.clearProduct();
    e.preventDefault();
});

class product {
    constructor(nombre, precio, ano) {
        this.nombre = nombre;
        this.precio = precio;
        this.ano = ano;
    }
}
class UI {
    addProduct(product) {
        let productList = document.getElementById('productList');
        let element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center-mb-4">
                <div class="card-body row">
                <div class='col-md-10'>
                    <strong>Nombre: ${product.nombre} </strong>
                    <strong>Precio: ${product.precio}</strong>
                    <strong>Año: ${product.ano}</strong>
                </div>
                <div class='col-md-2'>
                    <a href="#" class='btn btn-danger' name = 'delete'>
                    Borrar
                    </a>
                </div>
                </div>
            </div>`;
        productList.appendChild(element);
    }
    deleteProduct(element) {
        if(element.name== 'delete'){
            let inter = new UI();
            element.parentElement.parentElement.parentElement.remove();
            document.getElementById('msg').innerHTML = inter.ShowMessage('Producto Eliminado', 'danger')
        }
    }
    clearProduct() {
        document.getElementById('product-form').reset();
    }
    ShowMessage(msg, alert) {
        let message = `
    <div class="container" id='msremove'>
        <div class="alert alert-${alert} mt-5">${msg}</div>
    </div>`;
    setTimeout(function(){
        document.getElementById('msremove').remove();
    }, 3000);
    return message;
    }
}
let lista = document.getElementById('productList');
lista.addEventListener('click', function(e){
    
    let inter = new UI();
    inter.deleteProduct(e.target);
})