<template>
  <!-- Contenedor principal de la barra lateral (sidebar), con clases dinámicas para su estilo -->
  <aside :class="{ sidebar: true, collapsed: isCollapsed }">

    <!-- Sección del logo y el botón para colapsar/expandir la barra lateral -->
    <div class="logo">
      <!-- Imagen del logo -->
      <img src="../assets/logo.png" alt="Logo" />

      <!-- Texto que solo aparece cuando la barra no está colapsada -->
      <div class="logo-text" v-if="!isCollapsed">
        <span>Time Fit / Admin</span>
      </div>

      <!-- Botón para colapsar o expandir la barra lateral, con icono dinámico y texto accesible -->
      <button class="menu-toggle" @click="toggleSidebar"
        :aria-label="isCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'">
        <!-- Icono de chevron que cambia dependiendo del estado de la barra (colapsada o expandida) -->
        <i :class="isCollapsed ? 'bi bi-chevron-double-right' : 'bi bi-chevron-double-left'"></i>
      </button>
    </div>

    <!-- Menú principal de navegación -->
    <nav class="menu">

      <!-- Título "MENU" que solo se muestra cuando la barra no está colapsada -->
      <h3 v-if="!isCollapsed">MENU</h3>

      <!-- Enlace a la página de inicio -->
      <router-link to="/" class="menu-item" aria-label="Ir a la página de inicio">
        <i class="bi bi-house-fill icon-size"></i>  <!-- Icono de casa -->
        <span v-if="!isCollapsed">Inicio</span>   <!-- Texto "Inicio", solo si no está colapsado -->
      </router-link>

      <!-- Sección para gestionar la membresía (Usuarios y Planes) -->
      <div class="menu-item" @click="() => { goToUsers(); toggleMembershipMenu(); }"
        :aria-expanded="showMembershipMenu.toString()" aria-controls="membership-submenu">
        <i class="bi bi-person-vcard-fill icon-size"></i>  <!-- Icono de gestión de membresía -->
        <span v-if="!isCollapsed">Gestión de Membresía</span> <!-- Texto solo si la barra no está colapsada -->
        <i :class="showMembershipMenu ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" v-if="!isCollapsed"></i> <!-- Icono de expandir/colapsar menú -->
      </div>

      <!-- Submenú de membresía (Usuarios y Planes) que se muestra si el menú está expandido -->
      <div v-if="showMembershipMenu && !isCollapsed" id="membership-submenu" class="submenu">
        <!-- Enlace para gestionar los usuarios -->
        <router-link to="/Users" class="menu-item" aria-label="Gestionar usuarios">
          <i class="bi bi-people-fill icon-size"></i>  <!-- Icono de personas -->
          <span>Usuarios</span>
        </router-link>
        <!-- Enlace para administrar planes -->
        <router-link to="/Plans" class="menu-item" aria-label="Administrar planes">
          <i class="bi bi-layout-text-sidebar"></i>  <!-- Icono de planes -->
          <span>Administrar Planes</span>
        </router-link>
      </div>

      <!-- Enlace a la página de colaboradores -->
      <router-link to="/Employees" class="menu-item" aria-label="Ir a colaboradores">
        <i class="bi bi-person-bounding-box"></i>  <!-- Icono de colaboradores -->
        <span v-if="!isCollapsed">Colaboradores</span>  <!-- Texto solo si la barra no está colapsada -->
      </router-link>

      <!-- Sección para gestionar ventas (Ingresos y Control de Inventario) -->
      <div class="menu-item" @click="() => { goToRevenue(); toggleSalesMenu(); }"
        :aria-expanded="showSalesMenu.toString()" aria-controls="sales-submenu">
        <i class="bi bi-cash-coin icon-size"></i>  <!-- Icono de ventas -->
        <span v-if="!isCollapsed">Gestión de Ventas</span>  <!-- Texto solo si la barra no está colapsada -->
        <i :class="showSalesMenu ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" v-if="!isCollapsed"></i> <!-- Icono de expandir/colapsar menú -->
      </div>

      <!-- Submenú de ventas (Ingresos y Control de Inventario) que se muestra si el menú está expandido -->
      <div v-if="showSalesMenu && !isCollapsed" id="sales-submenu" class="submenu">
        <!-- Enlace para ver los ingresos -->
        <router-link to="/Revenue" class="menu-item" aria-label="Ver ingresos">
          <i class="bi bi-currency-exchange icon-size"></i>  <!-- Icono de ingresos -->
          <span>Ingresos</span>
        </router-link>
        <!-- Enlace para gestionar el inventario -->
        <router-link to="/Stock" class="menu-item" aria-label="Gestionar inventario">
          <i class="bi bi-archive-fill icon-size"></i>  <!-- Icono de inventario -->
          <span>Control de Inventario</span>
        </router-link>
      </div>

      <!-- Enlace al calendario -->
      <router-link to="/Calendar" class="menu-item" aria-label="Acceder al calendario">
        <i class="bi bi-calendar-date-fill icon-size"></i>  <!-- Icono de calendario -->
        <span v-if="!isCollapsed">Calendario</span>  <!-- Texto solo si la barra no está colapsada -->
      </router-link>

      <!-- Enlace a las notas -->
      <router-link to="/Notes" class="menu-item" aria-label="Ver notas">
        <i class="bi bi-journal-bookmark-fill icon-size"></i>  <!-- Icono de notas -->
        <span v-if="!isCollapsed">Notas</span>  <!-- Texto solo si la barra no está colapsada -->
      </router-link>
    </nav>

    <!-- Menú general -->
    <nav class="menu">
      <!-- Título "GENERAL" que solo se muestra cuando la barra no está colapsada -->
      <h3 v-if="!isCollapsed">GENERAL</h3>

      <!-- Enlace a los ajustes -->
      <router-link to="/settings" class="menu-item" aria-label="Ir a ajustes">
        <i class="bi bi-gear-fill icon-size"></i>  <!-- Icono de engranaje -->
        <span v-if="!isCollapsed">Ajustes</span>  <!-- Texto solo si la barra no está colapsada -->
      </router-link>

      <!-- Enlace a soporte y ayuda -->
      <router-link to="/support" class="menu-item" aria-label="Ir a soporte">
        <i class="bi bi-tools icon-size"></i>  <!-- Icono de herramientas -->
        <span v-if="!isCollapsed">Soporte y Ayuda</span>  <!-- Texto solo si la barra no está colapsada -->
      </router-link>

      <!-- Enlace al perfil de usuario -->
      <router-link to="/profile" class="menu-item" aria-label="Ver perfil de usuario">
        <i class="bi bi-person-circle icon-size"></i>  <!-- Icono de perfil -->
        <span v-if="!isCollapsed">Perfil de Usuario</span>  <!-- Texto solo si la barra no está colapsada -->
      </router-link>
    </nav>

<!-- Envolvemos el botón con un router-link para dirigir al usuario a otro componente -->
<router-link to="/Logout" class="logout-link">
  <!-- Botón de cierre de sesión -->
  <button class="logout" aria-label="Cerrar sesión">
    <i class="bi bi-box-arrow-right"></i>  <!-- Icono de cerrar sesión -->
    <span v-if="!isCollapsed">Cerrar Sesión</span>  <!-- Texto solo si la barra no está colapsada -->
  </button>
</router-link>

  </aside>
</template>

<script setup>
// Importación de funciones necesarias desde Vue
import { ref } from 'vue';  // `ref` se usa para crear variables reactivas
import { useRouter } from 'vue-router';  // `useRouter` se usa para acceder al enrutador de Vue

// Declaración de las variables reactivas que controlarán el estado de la interfaz
const isCollapsed = ref(false);  // Controla si la barra lateral está colapsada o expandida
const showMembershipMenu = ref(false);  // Controla si el submenú de membresía está visible
const showSalesMenu = ref(false);  // Controla si el submenú de ventas está visible

// Obtener el enrutador para poder navegar entre las rutas de la aplicación
const router = useRouter();

// Métodos para manejar las acciones de los botones y las interacciones con el menú

// Método para alternar el estado de colapso de la barra lateral
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;  // Cambia el valor de `isCollapsed` (true/false)
};

// Método para alternar la visibilidad del submenú de membresía
const toggleMembershipMenu = () => {
  showMembershipMenu.value = !showMembershipMenu.value;  // Cambia el valor de `showMembershipMenu` (true/false)
};

// Método para alternar la visibilidad del submenú de ventas
const toggleSalesMenu = () => {
  showSalesMenu.value = !showSalesMenu.value;  // Cambia el valor de `showSalesMenu` (true/false)
};

// Método para redirigir a la página de usuarios
const goToUsers = () => {
  router.push('/Users');  // Usa el enrutador para redirigir a la página `/Users`
};

// Método para redirigir a la página de ingresos
const goToRevenue = () => {
  router.push('/Revenue');  // Usa el enrutador para redirigir a la página `/Revenue`
};
</script>


<style scoped>
/* Estilo para la barra lateral */
.sidebar {
  background-color: #a64b2a; /* Establece el color de fondo de la barra lateral */
  color: white; /* Establece el color del texto dentro de la barra lateral */
  display: flex; /* Establece el contenedor como un Flexbox para organizar los elementos internos */
  flex-direction: column; /* Organiza los elementos de la barra lateral de arriba hacia abajo (en una columna) */
  padding: 1rem; /* Aplica un espaciado interno de 1rem alrededor de los elementos dentro de la barra lateral */
  height: 100vh; /* Hace que la barra lateral ocupe el 100% de la altura de la ventana */
  transition: width 0.3s ease; /* Aplica una transición suave de 0.3 segundos para cambiar el ancho de la barra lateral */
  position: relative; /* Establece la posición del contenedor como relativa, para posicionar elementos dentro de él */
  width: 15vw; /* Establece el ancho de la barra lateral en un 15% del ancho de la ventana */
  max-width: 250px; /* Establece un ancho máximo de 250px para la barra lateral */
  min-width: 70px; /* Establece un ancho mínimo de 70px para la barra lateral */
  overflow-y: auto; /* Permite el desplazamiento vertical dentro de la barra lateral */
  box-sizing: border-box; /* Incluye el padding y border en el cálculo del ancho y alto de la barra lateral */
}

/* la barra de desplazamiento */
.sidebar::-webkit-scrollbar {
  width: 6px; /* Ancho de la barra de desplazamiento */
}

/* Estilo para el fondo de la barra de desplazamiento */
.sidebar::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
}

/* Estilo para la "barrita pequeña" o deslizador (thumb) de la barra */
.sidebar::-webkit-scrollbar-thumb {
  background: #979696; /* Color del deslizador */
  border-radius: 10px; /* Bordes redondeados para el deslizador */
}

/* Estilo cuando la barra lateral está colapsada */
.sidebar.collapsed {
  width: 5rem; /* Ancho reducido cuando está colapsada */
}

/* Estilo para los iconos en el menú */
.icon-size {
  font-size: 1.2rem; /* Tamaño de fuente predeterminado para los iconos */
}

/* Estilos para el contenedor del logo */
.logo {
  display: flex; /* Usamos flexbox para alinear el logo e íconos */
  align-items: center; /* Alineación vertical en el centro */
  justify-content: space-between; /* Espaciado entre los elementos */
  font-weight: bold; /* Negrita para el texto */
  font-size: 1.2rem; /* Tamaño de fuente para el texto del logo */
  margin-bottom: 1rem; /* Espacio en la parte inferior */
}

/* Estilo cuando la barra lateral está colapsada y el logo cambia su disposición */
.sidebar.collapsed .logo {
  flex-direction: column; /* Los elementos se apilan en columna */
  align-items: center; /* Alineación centrada de los elementos */
}

/* Estilo de la imagen del logo */
.logo img {
  width: auto; /* Ancho de la imagen del logo */
  height: 30px; /* Altura de la imagen del logo */
}

/* Estilo para el texto del logo */
.logo-text {
  margin-left: 10px; /* Espacio a la izquierda del texto */
  transition: opacity 0.3s; /* Transición suave para la opacidad */
}

/* Estilo del texto dentro del logo */
.logo-text span {
  font-size: 0.9rem; /* Tamaño de fuente para el texto */
  white-space: nowrap; /* Evitar que el texto se desborde */
}

/* Estilo para el botón de colapso */
.menu-toggle {
  margin-top: 6px; /* Espaciado en la parte superior */
  background: none; /* Sin fondo */
  border: none; /* Sin borde */
  color: white; /* Color blanco para el texto */
  font-size: 1.2rem; /* Tamaño de la fuente para el ícono */
  cursor: pointer; /* El cursor se convierte en puntero al pasar el ratón */
  transition: transform 0.3s ease, color 0.3s ease; /* Transiciones suaves para el cambio de color y la animación */
}

/* Estilo para el texto en los elementos del menú */
span {
  font-weight: 600; /* Pone en negrita el texto */
  font-size: 0.85rem; /* Texto más pequeño */
}

/* Estilo para cuando el botón de colapso es hover */
.menu-toggle:hover {
  color: black; /* Cambia el color a negro cuando el botón es hover */
}

/* Estilos para el menú */
nav.menu {
  margin-bottom: 1rem; /* Espacio en la parte inferior del menú */
}

/* Estilo para el encabezado del menú */
nav.menu h3 {
  margin-top: 20px; /* Espacio en la parte superior */
  margin-bottom: 1rem; /* Espacio en la parte inferior */
  font-size: 0.9rem; /* Tamaño de fuente */
  text-transform: uppercase; /* Convierte el texto a mayúsculas */
  font-weight: bolder; /* Pone el texto más en negrita */
}

/* Estilos para los elementos del menú */
.menu-item {
  display: flex; /* Usa flexbox para alinear los íconos y el texto */
  align-items: center; /* Alineación vertical centrada */
  gap: 0.75rem; /* Espacio entre los íconos y el texto */
  padding: 0.4rem 0.8rem; /* Espaciado interno de los elementos */
  border-radius: 0.5rem; /* Bordes redondeados */
  color: white; /* Color del texto */
  text-decoration: none; /* Quita el subrayado */
  font-size: 0.8rem; /* Tamaño de la fuente */
  margin-bottom: 0.35rem; /* Espaciado entre los elementos del menú */
  transition: background 0.3s; /* Transición suave en el fondo */
  box-sizing: border-box; /* Incluir padding y margin en las medidas de ancho y alto */
}

/* Estilo cuando el cursor está sobre un elemento del menú */
.menu-item:hover {
  background-color: #f8820b; /* Cambia el fondo a un color naranja cuando se pasa el ratón */
  color: black; /* Cambia el color del texto a negro */
}

/* Estilo para el submenú con desplazamiento */
.submenu {
  padding-left: 1.5rem;
  max-height: 70vh;
  overflow-y: auto;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

/* Estilo para los elementos dentro de un submenú */
.submenu .menu-item {
  font-size: 0.85rem; /* Tamaño de fuente más pequeño en los submenús */
}

/* Estilo para los elementos activos del enrutador */
.router-link-active {
  background-color: #f8820b; /* Fondo de color naranja cuando está activo */
  color: black; /* Color de texto negro cuando está activo */
}

/* Estilo para los elementos activos cuando se pasa el ratón */
.router-link-active:hover {
  background-color: #f8820b; /* Fondo naranja */
  color: black; /* Texto negro */
}

/* Estilo para que el router-link no afecte el diseño */
.logout-link {
  margin-top: auto;
  display: block;  /* Aseguramos que el link se comporte como un bloque */
  text-decoration: none;  /* Quitamos el subrayado por defecto del link */
}

/* Mantener el estilo del botón de cierre de sesión */
.logout {
  margin-top: auto; /* Espaciado en la parte superior */
  display: flex; /* Usamos flexbox para alinear los elementos */
  align-items: center; /* Alineación vertical centrada */
  gap: 0.75rem; /* Espacio entre los íconos y el texto */
  padding: 0.5rem 1rem; /* Espaciado interno del botón */
  border: none; /* Sin borde */
  background-color: #f8820b; /* Fondo color naranja */
  color: black; /* Texto en color negro */
  font-size: 0.95rem; /* Tamaño de fuente del texto */
  border-radius: 0.5rem; /* Bordes redondeados */
  justify-content: center; /* Alineación de los elementos del botón en el centro */
  cursor: pointer; /* El cursor se convierte en puntero al pasar el ratón */
  transition: background 0.3s; /* Transición suave del fondo */
  width: 100%; /* Asegura que el botón ocupe todo el ancho disponible */
  text-align: center; /* Alinea el texto dentro del botón */
}

/* Estilo cuando se pasa el ratón sobre el botón de cierre de sesión */
.logout:hover {
  background-color: #ff4300; /* Cambia el fondo a un color naranja más intenso */
  color: white; /* Cambia el texto a blanco */
}

/* Estilo cuando se pasa el ratón sobre el botón de cierre de sesión */
.logout:hover {
  background-color: #ff4300; /* Cambia el fondo a un color naranja más intenso */
  color: white; /* Cambia el texto a blanco */
}

/* Media Queries para pantallas más grandes */
@media (min-width: 768px) {
  .sidebar {
    width: 20%; /* Ancho de la barra lateral para pantallas mayores a 768px */
  }

  .sidebar.collapsed {
    width: 5rem; /* Ancho de la barra lateral colapsada para pantallas mayores */
  }
}

@media (min-width: 1024px) {
  .sidebar {
    width: 18%; /* Ancho de la barra lateral para pantallas mayores a 1024px */
  }

  .sidebar.collapsed {
    width: 90px; /* Ancho de la barra lateral colapsada para pantallas mayores */
  }
}
</style>

