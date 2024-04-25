//Emanuel Gómez Díaz de ADSI, Ficha 2472769//
package admin;

import javax.swing.JOptionPane;

public class TiendasSena {

    public static void main(String[] args) {

    int idfactura = 0;
    int cantidad = 0;
    int valorUnitario = 0;
    float iva = 0;
    float total = 0;
    String idcliente = "";
    String nombres = "";
    String telefono = "";
    String descripcion = "";
        
    idcliente = JOptionPane.showInputDialog("Ingrese su documento");
    nombres = JOptionPane.showInputDialog("Ingrese su nombre");
    telefono = JOptionPane.showInputDialog("Ingrese su telefono");
    descripcion = JOptionPane.showInputDialog("Ingrese la descripcion del producto");
    idfactura = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el numero de su factura"));
    cantidad = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la cantidad de productos"));
    valorUnitario = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el valor de los productos"));
    
    Factura factura1 = new Factura (idfactura, idcliente, nombres, telefono,  
    descripcion,  cantidad, valorUnitario);
    
    JOptionPane.showMessageDialog(null,"Su documento es:" + 
    factura1.getIdcliente() + "Su nombre es: " + factura1.getNombres()+
    "Su telefono es" + factura1.getTelefono() 
    + "La descripcion del producto es" + factura1.getDescripcion() +
    "El numero de su factura es" + factura1.getIdfactura() 
    + "La cantidad de productos fueron" + factura1.getCantidad() +
    "El valor de sus productos fue" + factura1.getValorUnitario() 
    + "El precio a pagar por el iva es: "+ factura1.calculoIva() + 
    "Su precio a pagar es: " + factura1.calculoTotal());
    
    }
    
}

