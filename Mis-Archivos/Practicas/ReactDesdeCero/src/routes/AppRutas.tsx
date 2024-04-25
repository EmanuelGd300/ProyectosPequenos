// routes/appRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Juego from '../pages/Juego.tsx';
import Ruta from '../pages/Ruta.tsx';
import Ruta2 from '../pages/Ruta2.tsx';

function AppRutas() {
    return (
        <Routes>
            <Route path="/Juego" element={<Juego />} />
            <Route path="/Probando" element={<Ruta />} />
            <Route path="/Inspiracion" element={<Ruta2 />} />
        </Routes>
    );
}

export default AppRutas;
