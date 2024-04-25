package com.example.uml7;

public class Autor extends Libro{
    private int IdAutor;
    private String nombres;
    private String nacionalidad;

    public int getIdAutor() {
        return IdAutor;
    }

    public void setIdAutor(int idAutor) {
        IdAutor = idAutor;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }
}
