package com.example.basedatossqlite.db;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;


public class DbHelper extends SQLiteOpenHelper {

    private static final int DATABASE_VERSION = 1;
    private static final String DATABASE_NOMBRE = "agenda.db";
    public static final String TABLE_CONTACTOS = "t_contactos";

    public DbHelper(@Nullable Context context) {
        super(context, DATABASE_NOMBRE, null, DATABASE_VERSION);
    }

    @Override  // = SOBREESCRITURA//
    public void onCreate(SQLiteDatabase sqLiteDatabase) { // se crean las tablas
        // ACA LLAMAMOS A LA CLAS SQLLITE Y EL METODO EXECUTE Y LE PONEMOS LA SIGUIENTE ACCION//
        sqLiteDatabase.execSQL("CREATE TABLE " + TABLE_CONTACTOS + "(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                "nombre TEXT NOT NULL," +
                "telefono TEXT NOT NULL," +
                "correo_electronico TEXT)");
    }

    @Override
    // ACA SE CREA UNA NUEVA VERSION DEBIDO A QUE AÑADIMOS UNA NUEVA FUNCION AL PROGRAMA //
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {
        // EL METODO PRIMERO ELIMINA LA TABLA Y LUEGO CREA UNA NUEVA CON NUEVOS ATRIBUTOS //
        sqLiteDatabase.execSQL("DROP TABLE " + TABLE_CONTACTOS);
        onCreate(sqLiteDatabase);

    }
}
