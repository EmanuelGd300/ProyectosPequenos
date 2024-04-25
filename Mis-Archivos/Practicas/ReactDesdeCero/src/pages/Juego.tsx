import { useState } from 'react';
import Button from '@mui/material/Button';
import BotonAumentar from '../components/atoms/Aumentar';
import BotonReducir from '../components/atoms/Reducir';
import BienesContainer from '../components/molecules/Bienes';
import { IProducto } from '../interfaces/producto.interface';
import ResponsiveDrawer from '../components/molecules/Mejoras.tsx';

function Juego() {
    const [dinero, setDinero] = useState(0);
    const [objetosComprados, setObjetosComprados] = useState<IProducto[]>([]);

    const mejoras = [
        {
            nombre: "Incremento de Ganancias",
            costo: 10,
            efecto: 2, // Aumento en la ganancia por clic
            nivel: 0, // Nivel actual
        },
        {
            nombre: "Generador Automático",
            costo: 50,
            efecto: 1, // Dinero generado por segundo
            nivel: 0, // Nivel actual
        },
    ];

    const nombresObjetos = [
        'Celular', 'Pc', 'Consola', 'PrimerCasa', 'Familia', 'Coche', 'Casa', 'Deportivo', 'Anciano', 'Ataud'
    ];

    const productosLista: IProducto[] = [
        { nombre: 'Celular', imagen: "src/img/celular.jpg", precio: 10 },
        { nombre: 'Pc', imagen: "src/img/pc.jpg", precio: 20 },
        { nombre: 'Consola', imagen: "src/img/consola.jpg", precio: 30 },
        { nombre: 'PrimerCasa', imagen: "src/img/primerCasa.jpg", precio: 40 },
        { nombre: 'Familia', imagen: "src/img/Familia.jpg", precio: 50 },
        { nombre: 'Coche', imagen: "src/img/Coche.jpg", precio: 60 },
        { nombre: 'Casa', imagen: "src/img/Casa.jpg", precio: 70 },
        { nombre: 'Deportivo', imagen: "src/img/Deportivo.jpg", precio: 80 },
        { nombre: 'Anciano', imagen: "src/img/Anciano.jpg", precio: 90 },
        { nombre: 'Ataud', imagen: "src/img/Ataud.jpg", precio: 100 },
    ];

    const incrementar = () => {
        setDinero(dinero + 10);
    };

    const comprar = (precio: number, objeto: IProducto) => {
        if (dinero >= precio && !objetosComprados.includes(objeto)) {
            setDinero(dinero - precio);
            setObjetosComprados([...objetosComprados, objeto]);
        }
    };

    const mostrarAlertaFinal = () => {
        if (objetosComprados.length === nombresObjetos.length) {
            alert('Felicidades, tienes todo en la vida. Ahora solo te queda morir.');
        }
    };

    return (
        <div className="app-container">

            <div className="logo">
                <img src="src/img/Moneda.png" width={100} height={100} alt="Moneda" />
            </div>

            <h1>Dinero: {dinero}</h1>

            <h2>Bienvenido al juego de la vida, gana dinero trabajando y gastalo comprando cosas</h2>

            <h1>Bienes:</h1>
            <BienesContainer productos={productosLista} />

            <div className="acciones">

            <ResponsiveDrawer></ResponsiveDrawer>

                <img src="src/img/Trabajar.png" width={100} height={100} alt="Trabajar" />
                <BotonAumentar nombre="Trabajar" darClick={incrementar} />

                <img src="src/img/Comprar.png" width={100} height={100} alt="Comprar" />
                <BotonReducir
                    nombre="Comprar"
                    darClick={() => {
                        comprar((objetosComprados.length + 1) * 10, productosLista[objetosComprados.length] || productosLista[0]);
                        mostrarAlertaFinal();
                    }}
                />

                <img src="src/img/Calavera.png" width={100} height={100} alt="Morir" />
                <Button variant="contained"><a href="">Morir</a></Button>
            </div>

            <h1>Tus bienes:</h1>
            <BienesContainer productos={objetosComprados} />
        </div>
    );
}

export default Juego;