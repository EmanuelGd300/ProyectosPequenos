package com.example.egduml6;

public class Cliente {

    private int idCliente;
    private String nombres;
    private String telefono;

    public Cliente(int idCliente, String nombres, String telefono) {
        this.idCliente = idCliente;
        this.nombres = nombres;
        this.telefono = telefono;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
