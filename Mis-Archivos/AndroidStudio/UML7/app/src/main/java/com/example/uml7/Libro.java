package com.example.uml7;

public class Libro {
    private int IdLibro;
    private String titulo;
    private String tipo;
    private String editorial;
    private String año;

    public int getIdLibro() {
        return IdLibro;
    }

    public void setIdLibro(int idLibro) {
        IdLibro = idLibro;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getEditorial() {
        return editorial;
    }

    public void setEditorial(String editorial) {
        this.editorial = editorial;
    }

    public String getAño() {
        return año;
    }

    public void setAño(String año) {
        this.año = año;
    }
}
