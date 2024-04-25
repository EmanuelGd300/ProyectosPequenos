//Autor: Emanuel Gómez Díaz - Clase principal//
package admon;

import javax.swing.JOptionPane;

public class Salariosoft {

    public static void main(String[] args) {
    int idnominaa, idtrabajador, valorhextras, salariobase;
    String nombre, telefono, correo;
    
    idnominaa = Integer.parseInt(JOptionPane.showInputDialog
    ("Digite el numero de su nomina"));
    idtrabajador = Integer.parseInt(JOptionPane.showInputDialog
    ("Digite su numero de trabajador"));
    valorhextras = Integer.parseInt(JOptionPane.showInputDialog
    ("Digite el valor total de sus horas extras"));
    salariobase = Integer.parseInt(JOptionPane.showInputDialog
    ("Digite su salario base"));
    nombre = JOptionPane.showInputDialog("Digite su nombre");
    telefono = JOptionPane.showInputDialog("Digite su telefono");
    correo = JOptionPane.showInputDialog("Digite su correo electronico");
    
    Nomina nvnomina = new Nomina(idnominaa, valorhextras, salariobase,
        idtrabajador, nombre, telefono, correo);
        nvnomina.calculoSalud();
        nvnomina.calculoarl();
        nvnomina.calculopension();
        nvnomina.calculosalariototal();
        nvnomina.mostrarNomina();
    }
    
}
