<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar /> <!-- Importación y uso del componente Sidebar en la aplicación -->

		<!-- Content -->
		<router-view /> <!-- Aquí se renderiza el contenido de las rutas definidas por vue-router -->
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue' //Importación del componente Sidebar
</script>

<style lang="scss">

/* Importación del archivo CSS de Bootstrap para utilizar sus estilos predeterminados */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

/* Importación de la fuente "Poppins" desde Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  background-color: #272829; /* Establece el color de fondo principal de la aplicación */
}

:root {
	/* Variables de colores para usarlas en todo el CSS */
	--primary: black; /* Color principal negro */
	--primary-alt: #22c55e; /* Color secundario (verde) */
	--grey: white; /* Color gris claro (blanco en este caso) */
	--dark: #983E00; /* Color oscuro marrón */
	--dark-alt: #F8820B; /* Color secundario oscuro naranja */
	--light: #f1f5f9; /* Color claro de fondo */
	--sidebar-width: 300px; /* Ancho de la barra lateral */
}

* {
  margin: 0; /* Elimina el margen por defecto de todos los elementos */
  padding: 0; /* Elimina el padding por defecto de todos los elementos */
  box-sizing: border-box; /* Establece el box-sizing como border-box para facilitar el manejo de tamaños */
  font-family: 'Poppins', sans-serif; /* Establece la fuente "Poppins" como la predeterminada */
}

body {
  background: var(--light); /* Aplica el color de fondo claro definido en la variable :root */
}

button {
  cursor: pointer; /* Cambia el cursor a puntero cuando se pasa sobre el botón */
  appearance: none; /* Elimina el estilo por defecto de los botones */
  border: none; /* Elimina el borde del botón */
  outline: none; /* Elimina el contorno al hacer clic */
  background: none; /* Elimina el fondo predeterminado de los botones */
}

.app {
  display: flex; /* Usa Flexbox para organizar los elementos dentro de la clase "app" */
}

main {
  flex: 1 1 0; /* Hace que el elemento main ocupe el espacio restante */
  padding: 2rem; /* Añade un padding de 2rem a los elementos dentro de "main" */

  /* Media Query para pantallas más pequeñas (máximo 1024px de ancho) */
  @media (max-width: 1024px) {
    padding-left: 6rem; /* Añade un padding izquierdo de 6rem cuando la pantalla es menor a 1024px */
  }
}
</style>
