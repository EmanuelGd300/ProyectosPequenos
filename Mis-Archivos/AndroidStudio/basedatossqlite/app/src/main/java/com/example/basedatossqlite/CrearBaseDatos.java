package com.example.basedatossqlite;

import androidx.appcompat.app.AppCompatActivity;

import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.example.basedatossqlite.db.DbHelper;

public class CrearBaseDatos extends AppCompatActivity {
    Button btncrear;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crear_base_datos);

        btncrear = (Button)findViewById(R.id.btncrear);
        btncrear.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                DbHelper dbHelper = new DbHelper(CrearBaseDatos.this);
                SQLiteDatabase db = dbHelper.getWritableDatabase(); // esto crea la base datos
                if (db != null){ // validar para dicirle a usiario si creo o no la base datos
                    // != SIGNIFICA DIFERENCIA //
                    Toast.makeText(CrearBaseDatos.this, "Base datos Creada", Toast.LENGTH_LONG).show();
                }else{
                    Toast.makeText(CrearBaseDatos.this, "Error en la Base datos", Toast.LENGTH_LONG).show();
                }
            }
        });

    }
}