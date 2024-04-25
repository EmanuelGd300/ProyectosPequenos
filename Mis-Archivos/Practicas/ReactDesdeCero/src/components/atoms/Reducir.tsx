import Button from '@mui/material/Button';
interface Iprops {
    nombre: string;
    darClick: () => void;
}

const BotonReducir = (prop: Iprops) => {
    return (
        <Button variant="contained" onClick={prop.darClick}>
            {prop.nombre}
        </Button>
    );
};

export default BotonReducir;