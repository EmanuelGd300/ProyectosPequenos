package com.example.rentahotel;

public class Hotel extends Cliente {

    private int idHotel;
    private int habitacion;
    private String fechaEntrada;
    private String fechaSalida;
    private int valorDia;
    private int dias;
    private int total;
    private String estado;

    public Hotel(int idCliente, String nombres, String telefono, int idHotel, int habitacion, String fechaEntrada, String fechaSalida, int valorDia, int dias, String estado) {
        super(idCliente, nombres, telefono);
        this.idHotel = idHotel;
        this.habitacion = habitacion;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
        this.valorDia = valorDia;
        this.dias = dias;
        this.estado = estado;
    }


    public int calculoTotal(){

        this.total = valorDia * dias;
        return total;

    }

    public int getIdHotel() {
        return idHotel;
    }

    public int getHabitacion() {
        return habitacion;
    }

    public String getFechaEntrada() {
        return fechaEntrada;
    }

    public String getFechaSalida() {
        return fechaSalida;
    }

    public int getValorDia() {
        return valorDia;
    }

    public int getDias() {
        return dias;
    }

    public int getTotal() {
        return total;
    }

    public String getEstado() {
        return estado;
    }
}
