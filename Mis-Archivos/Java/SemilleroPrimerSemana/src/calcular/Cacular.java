package calcular;

public class Cacular {

    private int num1;
    private int num2;
    private int num3;

    public Cacular(int num1, int num2, int num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }

    public String verNtodos() {
        if ((num1 == num2) && (num2 == num3)) {
            return "i";
        } else {
            return "n";
        }
    }

    public String verNpares() {
        if ((num1 == num2)) {
            return "i1";
        } else {
            if (num1 == num3) {
                return "i3";
            } else {
                if (num2 == num3) {
                    return "i2";
                }else{
                   return "n";   
                }
            }
        }
    }

  public int motrarMayor() {
      if ((num1 > num2) && (num1 > num3)){
         return num1; 
      }else{
         if ((num2 > num3)){
         return num2; 
         }else{
             return num3;
         }
      }            
  }//cierre mostrarMaayor
  
}
