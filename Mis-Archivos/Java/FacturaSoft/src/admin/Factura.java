//Emanuel Gómez Díaz de ADSI, Ficha 2472769//
package admin;

public class Factura {
    private int idfactura;
    private String idcliente;
    private String nombres;
    private String telefono;
    private String descripcion;
    private int cantidad;
    private int valorUnitario;
    private float iva;
    private float total; 

    public Factura(int idfactura, String idcliente, String nombres, 
    String telefono, String descripcion, int cantidad, 
    int valorunitario) {
        
        this.idfactura = idfactura;
        this.idcliente = idcliente;
        this.nombres = nombres;
        this.telefono = telefono;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.valorUnitario = valorunitario;

    }

    public int getIdfactura() {
        return idfactura;
    }
    
    public void setIdfactura(int idfactura) {
        this.idfactura = idfactura;
    }

    public String getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(String idcliente) {
        this.idcliente = idcliente;
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getValorUnitario() {
        return valorUnitario;
    }

    public void setValorUnitario(int valorunitario) {
        this.valorUnitario = valorunitario;
    }

    public float calculoIva (){ 
        this.iva = ( (getCantidad()*getValorUnitario())*19)/100;
             
        return this.iva;
    }
    public float calculoTotal (){
        this.total = getCantidad()+getValorUnitario()+iva;
        
        return this.total;
    }
    }
    
    
    
    