//Autor: Emanuel Gómez Díaz - Clase para Trabajadores//
package admon;

public class Trabajador {
    private int idTrabajador;
    private String nombres;
    private String telefono;
    private String correo;

    public Trabajador(int idTrabajador, String nombres,
    String telefono, String correo) {
    this.idTrabajador = idTrabajador;
    this.nombres = nombres;
    this.telefono = telefono;
    this.correo = correo;
    }

    public int getIdTrabajador() {
        return idTrabajador;
    }

    public void setIdTrabajador(int idTrabajador) {
        this.idTrabajador = idTrabajador;
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

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }
    
}
