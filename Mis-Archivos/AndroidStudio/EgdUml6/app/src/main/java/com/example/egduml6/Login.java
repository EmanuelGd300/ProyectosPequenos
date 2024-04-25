package com.example.egduml6;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class Login extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        getSupportActionBar().hide();
        Button Boton1;
        Button Boton2;

        Boton1 = findViewById(R.id.BotonValidar);
        Boton2 = findViewById(R.id.BotonBorrar);

        Boton1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent siguiente = new Intent(getApplicationContext(), MenuPrincipal.class);
                startActivity(siguiente);
            }
        });

        Boton2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast Boton2 = Toast.makeText(getApplicationContext(),
                        "Se ha validado la información", Toast.LENGTH_LONG);
                Boton2.show();
            }
        });
    }

}