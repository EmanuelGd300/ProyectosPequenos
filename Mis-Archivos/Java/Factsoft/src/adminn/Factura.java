//Autor: Emanuel Gómez Díaz Clase para factura - ADSI 2472769//
package adminn;

import javax.swing.JOptionPane;

public class Factura extends Clientes{
    private int idfactura;
    private int cantidad;
    private String descripcion;
    private int valorUnitario;
    private float iva;
    private float total;

    public Factura(int idfactura, int cantidad, String descripcion,
    int valorUnitario, int idcliente,
    String idNombres, String telefono, String correo) {
    super(idcliente, idNombres, telefono, correo);
        this.idfactura = idfactura;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.valorUnitario = valorUnitario;
    }
       
    public float calculoIva(int cantidad, int valorUnitario) {
        //Los parentesis significan el orden de operaciones//
        this.iva = ((cantidad * valorUnitario) *19)/100;
        return iva;
    }
    
    public float calculoTotal(int cantidad, int valorUnitario, float iva) {
        //Los parentesis significan el orden de operaciones//
        this.total = (cantidad * valorUnitario) + iva;
        return total;
    }
    
public void mostrarFactura() {
    JOptionPane.showMessageDialog(null, "¨¨¨Factura Factsoft¨¨¨" + "\n)"
    + "#Factura: " + this.idfactura + "\n"
    + "Id cliente: " + super.getIdcliente() + "\n"
    + "Cliente: " + super.getIdNombres()+ "\n"
    + "Telefono: " + super.getTelefono()+ "\n"
    + "Producto: " + this.descripcion+ "\n"
    + "Cantidad: " + this.cantidad + "\n"
    + "valor Unitario: " + this.valorUnitario + "\n"
    + "Iva: " + this.iva + "\n"
    + "¨¨¨Total: " + this.total + "¨¨¨");
}

}

 
    

    
 

    