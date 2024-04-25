//Autor: Emanuel Gómez Díaz - Clase para Nomina//
package admon;

import javax.swing.JOptionPane;

public class Nomina extends Trabajador{
    private int idNomina;
    private int valorHExtra;
    private int salarioBase;
    private float salud;
    private float pension;
    private float arl;
    private float salarioTotal;

    public Nomina(int idNomina, int valorHExtra, int salarioBase,
    int idTrabajador, String nombres, String telefono, String correo) {
    super(idTrabajador, nombres, telefono, correo);
    this.idNomina = idNomina;
    this.valorHExtra = valorHExtra;
    this.salarioBase = salarioBase;
    }
    
    public float calculoSalud(){
        this.salud = salarioBase * 4/100;
        return salud;
    }   
    
    public float calculopension(){
        this.pension = salarioBase * 4/100;
        return pension;       
    }
    
    public float calculoarl(){
    this.arl = salarioBase * 52/1000;
        return arl;
    }                           
    
    public float calculosalariototal(){
       this.salarioTotal = salarioBase + valorHExtra - salud - pension - arl;
        return salarioTotal;          
    }
                                       
    public void mostrarNomina() {
    JOptionPane.showMessageDialog(null, "¨¨¨Nomina Salariosoft¨¨¨" + "\n)"
    + "IdNomina: " + this.idNomina + "\n"
    + "IdTrabajador: " + super.getIdTrabajador() + "\n"
    + "Nombres: " + super.getNombres() + "\n"
    + "Telefono: " + super.getTelefono() + "\n"
    + "Correo: " + super.getCorreo() + "\n"
    + "Valor Horas Extras: " + this.valorHExtra + "\n"
    + "Salario Base: " + this.salarioBase + "\n"
    + "Salud: " + this.salud + "\n"
    + "Pension: " + this.pension + "\n"
    + "Arl: " + this.arl + "\n"
    + "¨¨¨Salario Total: " + this.salarioTotal + "¨¨¨");
}

}
                                       

 