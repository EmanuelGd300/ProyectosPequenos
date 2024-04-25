package com.example.primerapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView idpersona;
        TextView nombres;
        TextView telefono;
        TextView correo;
        TextView mostrar;
        Button verificar;

        Persona Registro = new Persona(1, "Emanuel",
                "3136640809", "Egomez413@misena.edu.co");

        idpersona = (TextView) findViewById(R.id.IdPersona);
        nombres = (TextView) findViewById(R.id.Nombres);
        telefono = (TextView) findViewById(R.id.Telefono);
        correo = (TextView) findViewById(R.id.Correo);
        mostrar = (TextView) findViewById(R.id.Mostrar);
        verificar = (Button) findViewById(R.id.Verificar);

        mostrar.setText(" Id: " + Registro.getIdPersona() + "\n"
                + " Nombres: " + Registro.getNombre() + "\n"
                + " Telefono: " + Registro.getTelefono() + "\n"
                + " correo: " + Registro.getCorreo());
        verificar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) { Registro.Registro(Integer.parseInt
            (idpersona.toString()), nombres.toString(), telefono.toString(), correo.toString());
            mostrar.setText(" Id: " + Registro.getIdPersona() + "\n"
                        + " Nombres: " + Registro.getNombre() + "\n"
                        + " Telefono: " + Registro.getTelefono() + "\n"
                        + " correo: " + Registro.getCorreo());
            }
        });
    }
}