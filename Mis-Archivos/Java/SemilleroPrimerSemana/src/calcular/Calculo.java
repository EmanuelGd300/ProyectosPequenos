package calcular;

import javax.swing.JOptionPane;

public class Calculo extends javax.swing.JFrame {

    public Calculo() {
        initComponents();
        this.setTitle("programa de tres numeros");
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Tenum1 = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        Tenum2 = new javax.swing.JTextField();
        Tenum3 = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        Benviar = new javax.swing.JButton();
        Lmostrar = new javax.swing.JLabel();
        Bborrar = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        Tenum1.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                Tenum1KeyTyped(evt);
            }
        });

        jLabel1.setText("digite un numero ");

        jLabel2.setText("digite segundo numero ");

        Tenum2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                Tenum2ActionPerformed(evt);
            }
        });
        Tenum2.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                Tenum2KeyTyped(evt);
            }
        });

        Tenum3.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                Tenum3KeyTyped(evt);
            }
        });

        jLabel3.setText("digite tercer numero ");

        Benviar.setText("verificar");
        Benviar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BenviarActionPerformed(evt);
            }
        });

        Lmostrar.setText("Numero Mayor");

        Bborrar.setText("Limpiar");
        Bborrar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BborrarActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(jLabel2)
                                    .addComponent(jLabel1))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(Tenum1, javax.swing.GroupLayout.PREFERRED_SIZE, 215, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Tenum2, javax.swing.GroupLayout.PREFERRED_SIZE, 215, javax.swing.GroupLayout.PREFERRED_SIZE)))
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                    .addComponent(Benviar)
                                    .addComponent(jLabel3))
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(layout.createSequentialGroup()
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                        .addComponent(Tenum3, javax.swing.GroupLayout.PREFERRED_SIZE, 215, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(layout.createSequentialGroup()
                                        .addGap(23, 23, 23)
                                        .addComponent(Bborrar))))))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(36, 36, 36)
                        .addComponent(Lmostrar, javax.swing.GroupLayout.PREFERRED_SIZE, 333, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(31, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(33, 33, 33)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1)
                    .addComponent(Tenum1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(51, 51, 51)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(Tenum2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(46, 46, 46)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(Tenum3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel3))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(Benviar)
                    .addComponent(Bborrar))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 28, Short.MAX_VALUE)
                .addComponent(Lmostrar)
                .addGap(27, 27, 27))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void BenviarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BenviarActionPerformed
        int dato1, dato2, dato3, mayor;
        String vert, verp;
        try{
        dato1 = Integer.parseInt(Tenum1.getText());
        dato2 = Integer.parseInt(Tenum2.getText());
        dato3 = Integer.parseInt(Tenum3.getText());
        Cacular verificar = new Cacular(dato1, dato2, dato3);
        
        vert = verificar.verNtodos();
        verp = verificar.verNpares();
        mayor = verificar.motrarMayor();
        if (vert == "i") {
            Lmostrar.setText("Los numeros digitados son iguales");
        } else {
            if (verp == "i1") {
                Lmostrar.setText("Los numeros dato1: " + dato1 + " y dato2: " + dato2 + " son iguales");
            } else {
                if (verp == "i2") {
                    Lmostrar.setText("Los numeros dato 2: " + dato2 + "  y dato 3: " + dato3 + " son iguales");
                } else {
                    if (verp == "i3") {
                        Lmostrar.setText("Los numeros dato 1: " + dato1 + "  y dato 3: " + dato3 + " son iguales");
                    }else{
                        Lmostrar.setText("el numero mayor digitado es: " + mayor);
                    }
                }
            }
        }
        }catch(NumberFormatException ex){
            JOptionPane.showMessageDialog(null , "no ha digitado un numero");
        }
        
        

        
        
    }//GEN-LAST:event_BenviarActionPerformed

    private void BborrarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BborrarActionPerformed
       Tenum1.setText("");
       Tenum2.setText("");
       Tenum3.setText("");
       Lmostrar.setText("mostrar numero mayor");
       
    }//GEN-LAST:event_BborrarActionPerformed

    private void Tenum1KeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_Tenum1KeyTyped
        char letra = evt.getKeyChar();
        if(letra < '0' || letra > '9')evt.consume();
    }//GEN-LAST:event_Tenum1KeyTyped

    private void Tenum2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_Tenum2ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_Tenum2ActionPerformed

    private void Tenum2KeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_Tenum2KeyTyped
       char letra = evt.getKeyChar();
        if(letra < '0' || letra > '9')evt.consume();
    }//GEN-LAST:event_Tenum2KeyTyped

    private void Tenum3KeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_Tenum3KeyTyped
        char letra = evt.getKeyChar();
        if(letra < '0' || letra > '9')evt.consume();
    }//GEN-LAST:event_Tenum3KeyTyped

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Calculo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Calculo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Calculo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Calculo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Calculo().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Bborrar;
    private javax.swing.JButton Benviar;
    private javax.swing.JLabel Lmostrar;
    private javax.swing.JTextField Tenum1;
    private javax.swing.JTextField Tenum2;
    private javax.swing.JTextField Tenum3;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    // End of variables declaration//GEN-END:variables
}
