// Clase Empleado: Emanuel Gomez Diaz //
package ejercicio1semillero;

public class Empleado {

    private int salarioMensual;
    private int comisiones;
    private int auxilioTransporte;

    public Empleado(int salarioMensual, int comisiones, int auxilioTransporte) {
        this.salarioMensual = salarioMensual;
        this.comisiones = comisiones;
        this.auxilioTransporte = auxilioTransporte;
    }

    public int sumaDevengado() {
        int totalDevengado;
        totalDevengado = ((salarioMensual + comisiones + auxilioTransporte));
        return totalDevengado;
    }

    public Double calculoPrima() {
        Double prima;
        prima = (sumaDevengado() / 8.33);
        return prima;
    }

    public Double porcentajeCesantias() {
        Double cesantias;
        cesantias = (sumaDevengado() / 8.33);
        return cesantias;
    }

    public Double porcentajeInteresesCesantias() {
        Double interesesCesantias;
        interesesCesantias = (porcentajeCesantias() / 12);
        return interesesCesantias;
    }

    public Double porcentajeVacaciones() {
        Double pVacaciones;
        pVacaciones = (salarioMensual / 4.16);
        return pVacaciones;
    }

    public Double prestacionesSociales() {
        Double pSociales;
        pSociales = (calculoPrima() + porcentajeCesantias() + porcentajeInteresesCesantias() + porcentajeVacaciones());
        return pSociales;
    }
}
