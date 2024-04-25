package com.example.egduml6;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;



import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class Rh extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView  IdCliente;
        TextView  Tnombre;
        TextView  Ttelefono;
        TextView  TidHotel;
        TextView  Thabitacion;
        TextView  TfechaEntrada;
        TextView  TfechaSalida;
        TextView  Tdias;
        TextView  TvalorDia;
        Button Benviar;
        TextView Mostrar;

        IdCliente = (TextView) findViewById(R.id.IdCliente);
        Tnombre = (TextView) findViewById(R.id.Tnombre);
        Ttelefono = (TextView) findViewById(R.id.Ttelefono);
        TidHotel = (TextView) findViewById(R.id.TidHotel);
        Thabitacion = (TextView) findViewById(R.id.Thabitacion);
        TfechaEntrada = (TextView) findViewById(R.id.TfechaEntrada);
        TfechaSalida = (TextView) findViewById(R.id.TfechaSalida);
        Tdias = (TextView) findViewById(R.id.Tdias);
        TvalorDia = (TextView) findViewById(R.id.TvalorDia);
        Benviar = (Button) findViewById(R.id.Benviar);
        Mostrar = (TextView) findViewById(R.id.Mostrar);

        Benviar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Hotel MostrarTotal = new Hotel(Integer.parseInt(IdCliente.getText().toString()), Tnombre.getText().toString(), Ttelefono.getText().toString(), Integer.parseInt(TidHotel.getText().toString()),Integer.parseInt(Thabitacion.getText().toString()), TfechaEntrada.getText().toString(), TfechaSalida.getText().toString(), Integer.parseInt(TvalorDia.getText().toString()), Integer.parseInt(Tdias.getText().toString()),"activo");

                Mostrar.setText("ID CLIENTE: " + Integer.toString(MostrarTotal.getIdCliente()) + "\n" +
                        "Nombre: " + MostrarTotal.getNombres() + "\n" +
                        "Telefono: " + MostrarTotal.getTelefono() + "\n" +
                        "ID HOTEL: " + Integer.toString(MostrarTotal.getIdHotel()) + "\n" +
                        "Numero Habitacion: " + Integer.toString(MostrarTotal.getHabitacion()) + "\n" +
                        "Fecha Entrada: " + MostrarTotal.getFechaEntrada() + "\n" +
                        "Fecha Salida: " + MostrarTotal.getFechaSalida() + "\n" +
                        "Dias Hospedados: " + Integer.toString(MostrarTotal.getDias()) + "\n" +
                        "Valor Por Dia: " + Integer.toString(MostrarTotal.getValorDia()) + "\n" +
                        "TOTAL: " + Integer.toString(MostrarTotal.calculoTotal())
                );
            }
        });
    }
}