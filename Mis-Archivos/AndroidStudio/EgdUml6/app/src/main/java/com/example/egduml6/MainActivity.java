package com.example.egduml6;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getSupportActionBar().hide();
        contar();
    }
    public void contar(){
        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            public void run() {
                // acciones que se ejecutan tras los milisegundos
                finalizarmain();
            }
        }, 10000); //4segundo
    }

    public void finalizarmain() {
        Intent siguiente = new Intent(this, Login.class);
        startActivity(siguiente);
        finish(); //finaliza la actividad
    }
}