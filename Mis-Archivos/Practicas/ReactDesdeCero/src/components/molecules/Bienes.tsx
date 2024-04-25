import { IProducto } from "../../interfaces/producto.interface";
import '../../BienesContainer.css';
interface Iprops {
    productos: IProducto[];
}

const BienesContainer = ({ productos }: Iprops) => {
    return (
        <div className="bienes-container">
    {productos.map((producto, index) => (
        <div className="producto" key={index}>
            <h1 className="NombreProducto">{producto.nombre}</h1>
            <img src={`${producto.imagen}`} width={60} height={60} />
            <h2 className="PrecioProducto">{producto.precio}</h2>
        </div>
    ))}
</div>

    );
};

export default BienesContainer;