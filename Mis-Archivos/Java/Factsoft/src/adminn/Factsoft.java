//Autor: Emanuel Gómez Díaz - clase principal - ADSI 2472769//
package adminn;

import javax.swing.JOptionPane;

public class Factsoft {

    public static void main(String[] args) {
    int idfactura, cantidad, valor, idcliente;
    String descripcion, nombres, telefono, correo;
    float iva, total;
    
    idfactura = Integer.parseInt(JOptionPane.showInputDialog("Digite el numero de su factura"));
    cantidad = Integer.parseInt(JOptionPane.showInputDialog("Digite la cantidad de productos"));
    descripcion = JOptionPane.showInputDialog("Digite el nombre de los productos");
    valor = Integer.parseInt(JOptionPane.showInputDialog("Digite el valor de los productos"));
    idcliente = Integer.parseInt(JOptionPane.showInputDialog("Digite su identificacion"));
    nombres = JOptionPane.showInputDialog("Digite su nombre");
    telefono = JOptionPane.showInputDialog("Digite su telefono");
    correo = JOptionPane.showInputDialog("Digite su correo electronico");
    
    Factura nvfac = new Factura(idfactura, cantidad, descripcion, valor, idcliente, nombres, telefono, correo);
        iva = nvfac.calculoIva(cantidad, valor);
        total = nvfac.calculoTotal(cantidad, valor, iva);
        nvfac.mostrarFactura(); 
    }
}