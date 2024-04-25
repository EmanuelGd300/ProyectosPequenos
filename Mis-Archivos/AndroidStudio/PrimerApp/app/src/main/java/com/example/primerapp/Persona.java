package com.example.primerapp;

public class Persona {
    private int IdPersona;
    private String Nombre;
    private String Telefono;
    private String Correo;

    public Persona(int IdPersona, String Nombre, String Telefono, String Correo) {
        this.IdPersona = IdPersona;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Correo = Correo;
    }

    public int getIdPersona() {
        return IdPersona;
    }

    public void setIdPersona(int idPersona) {
        IdPersona = idPersona;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String telefono) {
        Telefono = telefono;
    }

    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String correo) {
        Correo = correo;
    }

    public void Registro(int IdPersona, String Nombre, String Telefono, String Correo) {
        this.IdPersona = IdPersona;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Correo = Correo;
    }
}
