package com.example.egduml6;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

public class MenuPrincipal extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu_principal);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menuprincipal, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.menu1:
                Intent seguir = new Intent(MenuPrincipal.this, Login.class);
                startActivity(seguir);
                break;
            case R.id.menu2:
                Toast.makeText(this, "", Toast.LENGTH_SHORT).show();
                break;
            case R.id.menu3:
                Toast.makeText(this, "", Toast.LENGTH_SHORT).show();
                break;
            case R.id.marchivo:
                Toast.makeText(this, "", Toast.LENGTH_SHORT).show();
                finish();
                break;
            return super.onOptionsItemSelected(item);
        }
        return super.onOptionsItemSelected(item);
    }
}