//Autor: Emanuel Gómez Díaz Clase para clientes - ADSI 2472769//
package adminn;

public class Clientes { 
    private int idcliente;
    private String idNombres;
    private String telefono;
    private String correo;

        public Clientes(int idcliente, String idNombres, String telefono,
        String correo) {
            this.idcliente = idcliente;
            this.idNombres = idNombres;
            this.telefono = telefono;
            this.correo = correo;
        }

        public int getIdcliente() {
            return idcliente;
        }

        public void setIdcliente(int idcliente) {
            this.idcliente = idcliente;
        }

        public String getIdNombres() {
            return idNombres;
        }

        public void setIdNombres(String idNombres) {
            this.idNombres = idNombres;
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
  


    
    
   
     

