<template>
  <main id="Users">
    <div>
      <h1>Usuarios</h1>

      <!-- Seccion del usuario donde estara el login -->
      <div class="usuario-sesion">
        <p>Usuario en sesión: <span class="usuarioSesion"> Random300</span></p>
      </div>

      <!-- Buscador -->
      <div class="buscador">
        <input type="text" v-model="busqueda" placeholder="Buscar usuario" />
      </div>
    </div>

    <div>Selecion el usuario para ver los datos:</div>

    <!-- Button de registrar nuevo miembro -->
    <div>
      <button class="btn-registrar">Registrar miembro</button>
    </div>

    <!-- Tabla para los usuarios -->
    <table>
      <thead>
        <tr>
          <th>Miembro</th>
          <th>ID</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Fecha de inscripción</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <!-- Contenido de la tabla de los datos usuarios -->
      <tbody>
        <tr>
          <td colspan="6" class="sin-usuarios">No hay usuariuos registrados</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
//Backend
</script>

<style scoped>
main {
  padding: 20px;
  border-radius: 8px;
  color: #fff;
}

h1 {
  color: white;
}

.usuario-sesion {
  margin-bottom: 20px;
  font-weight: bold;
}

.buscador input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-registrar {
  width: auto;
  height: 38px;
  padding: 12px 24px;
  background: #f8820b;
  border: 1.5px solid #f8820b;
  border-radius: 8px;
  color: #1f2024;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background 0.3s ease;
}

.btn-registrar:hover {
  background: #e07309; /* Efecto hover */
  border-color: #e07309;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

th,
td {
  padding: 10px;
  border-bottom: 1px solid #272829;
  text-align: left;
}

th {
  border-bottom: 2px solid #f8820b;
}

td:hover {
  background-color: #f1f1f1;
}

.sin-usarios {
  text-align: center;
  font-style: italic;
  color: #888;
}
</style>
