<template>

  <body>
    <!-- Cuerpo del documento -->
    <section id="home">


      <!-- Contenedor principal -->
      <div>
        <!-- Barra de navegación principal -->
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <!-- Logo o marca del sitio -->
            <router-link to="/" class="navbar-brand" @click="closeMenu">
              <!-- Ícono de FontAwesome para representar la marca -->
              <font-awesome-icon :icon="['fas', 'dumbbell']" /> TIME FIT
            </router-link>
            <!-- Botón colapsable para pantallas pequeñas -->
            <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>


            <!-- Menú de navegación -->
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">

                <!-- Elemento de navegación: Home -->
                <li class="nav-item">
                  <router-link to="/" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Inicio
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Users" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Usuarios
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Plans" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Administrar Planes
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Employees" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Colaboradores
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Revenue" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Ingresos
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Stock" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Control del inventario
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Calendar" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Calendario
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Notes" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Notas
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Settings" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Adjustes
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Support" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Soporte y Ayuda
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Profile" class="nav-link" @click="closeMenu">
                    <!-- Ícono de FontAwesome para el enlace -->
                    <font-awesome-icon :icon="['fas', 'house']" /> Perfil de Usuario
                  </router-link>
                </li>

                <li>
                  <button @click="handleSignOut" v-if="isLoggedIn" class="sign-out"> Sign out</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <!-- Vista del enrutador donde se renderizan las rutas -->
      <router-view></router-view>

      <!-- Pie de página -->
      <footer class="footer mt-auto">
        <!-- Contenedor principal del pie de página -->
        <div class="container">

          <!-- Sección del pie de página: Acerca de nosotros -->
          <div class="row">
            <div class="col-md-4 mb-md-0">
              <!-- Columna del pie de página que ocupa 4 columnas en pantallas medianas -->
              <h5>About us</h5>
              <p>At Time Fit, we believe in the power of technology to transform gym management and enhance the user
                experience. Our mission is to simplify daily gym operations by providing an intuitive platform that
                combines management, personalization, and community in one place. </p>
            </div>
            <!-- Sección del pie de página: Enlaces rápidos -->
            <div class="col-md-4 mb-md-0">
              <h5>Quick Links</h5>
              <ul class="list-unstyled footer-links">
                <li>
                  <router-link to="/" @click="handleButtonClick('home')">Home</router-link>
                </li>
                <li>
                  <router-link to="/AboutUS" @click="handleButtonClick('aboutus')">About Us</router-link>
                </li>
                <li>
                  <router-link to="/Contact" @click="handleButtonClick('contact')">Contact</router-link>
                </li>
                <li>
                  <router-link to="/Pricing" @click="handleButtonClick('pricing')">Plans and Pricing</router-link>
                </li>
                <li>
                  <router-link to="/Features" @click="handleButtonClick('features')">Features</router-link>
                </li>
                <li>
                  <router-link to="/SignIn" @click="handleButtonClick('signin')">Sign up</router-link>
                </li>
                <li>
                  <router-link to="/Login" @click="handleButtonClick('login')">Log in</router-link>
                </li>
              </ul>
            </div>

            <!-- Sección del pie de página: Redes sociales -->
            <div class="col-md-4">
              <h5>Follow us</h5>
              <div class="social-icons">
                <!-- Íconos de redes sociales -->
                <a href="https://www.facebook.com/share/jzzyVZB7yX5Y89pT/" class="social-icon"
                  target="_blank">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
                <a href="https://x.com/timefit31" class="social-icon" target="_blank">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
                <a href="https://www.instagram.com/time_fit31/" class="social-icon" target="_blank">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <a href="https://github.com/CesarSanchez19/landing_page_time_fit" class="social-icon" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección de derechos de autor -->
        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>&copy; <span id="year"></span> Developed by Time Fit. TI31BIS DSM. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </body>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;

// Lógica de autenticación y verificación del usuario
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user; // Verifica si hay un usuario autenticado
  });
});

// Manejo del cierre de sesión
const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      router.push("/"); // Redirige a la página principal tras cerrar sesión
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
};


// Método para alternar el menú desplegable
const toggleMenu = () => {
  const menu = document.getElementById("navbarNav");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
};

// Método para cerrar el menú desplegable
const closeMenu = () => {
  const menu = document.getElementById("navbarNav");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
};

// Método para desplazarse suavemente a la parte superior de la página
const scrollToSection = (sectionId) => {
  nextTick(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
};

// Manejar el clic en los enlaces de la lista y redirigir
const handleButtonClick = (route) => {
  // Primero desplazarse hacia la parte superior de la página
  scrollToSection('home');

  // Realizar la navegación a la ruta correspondiente después del desplazamiento
  setTimeout(() => {
    if (route === 'home') {
      router.push('/');
    } else if (route === 'aboutus') {
      router.push('/AboutUS');
    } else if (route === 'contact') {
      router.push('/Contact');
    } else if (route === 'pricing') {
      router.push('/Pricing');
    } else if (route === 'features') {
      router.push('/Features');
    } else if (route === 'signin') {
      router.push('/SignIn');
    } else if (route === 'login') {
      router.push('/Login');
    }
  }, 500); // Esperar medio segundo para que el desplazamiento se complete antes de redirigir
};
</script>


<style scoped>
/* Importación del archivo CSS de Bootstrap para utilizar sus estilos predeterminados */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

/* Importación de la fuente "Poppins" desde Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* Estilo global para el cuerpo del documento */
body {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  /* Por defecto, es Poppins, y si no, continua con el resto */
  /* Define la fuente general para el cuerpo */
  background-color: #272829;
  /* Establece un color de fondo oscuro */
}

/* Cambia la fuente del pie de página */
body footer {
  font-family: 'Poppins', 'sans-serif';
  /* Define la fuente "Poppins" para el footer */
}

.sign-out {
  background: #F8820B;
  /* Fondo naranja */
  color: black;

  border-color: #F8820B;
  /* Texto negro */
  font-size: 16px;
  /* Tamaño del texto */
  font-weight: bold;
  /* Texto en negrita */
}

/* Hover en el botón de registro */
.sign-out:hover {
  background: linear-gradient(#FF4300, #FF6400);
  /* Degradado de naranja */
  border-color: #FF6400;
  /* Sin borde visible */
  color: rgb(255, 255, 255);
  /* Texto blanco */
}

/* Estilo para la barra de navegación */
.navbar {
  background-color: #983E00;
  /* Color de fondo de la barra */
  padding: 12px 0;
  /* Relleno interno vertical */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* Sombra alrededor de la barra */
  transition: all 0.3s ease;
  /* Transición suave para cambios en la barra */
}

/* Estilo para el logo de la barra de navegación */
.navbar-brand {
  font-weight: bold;
  /* Texto en negrita */
  color: #fff !important;
  /* Color del texto */
  font-size: 18px;
  /* Tamaño de fuente */
  text-transform: uppercase;
  /* Texto en mayúsculas */
  letter-spacing: 1px;
  /* Espaciado entre letras */
}

.navbar-brand:hover{
  color: #B1D690 !important;
}


/* Estilo para los enlaces de navegación */
.nav-link {
  color: #ecf0f1 !important;
  /* Color del texto */
  font-weight: 500;
  /* Peso del texto */
  text-transform: uppercase;
  /* Texto en mayúsculas */
  padding: 10px 15px !important;
  /* Espaciado interno */
  margin: 0 5px;
  /* Margen horizontal */
  position: relative;
  /* Posicionamiento relativo */
  transition: color 0.3s ease;
  /* Transición suave para cambios de color */
  font-size: 12px;
  /* Tamaño de fuente */
}

/* Estilo de los íconos dentro de los enlaces */
.nav-link i {
  margin-right: 8px;
  /* Espaciado derecho */
  font-size: 1em;
  /* Tamaño del ícono */
}

/* Estilo cuando se pasa el cursor sobre los enlaces de navegación */
.nav-link:hover {
  color: #B1D690 !important;
  /* Cambia el color del texto al pasar el cursor */
}

/* Efecto visual debajo del enlace cuando se pasa el cursor */
.nav-link::after {
  content: "";
  /* Elemento vacío como línea decorativa */
  position: absolute;
  /* Posicionamiento absoluto */
  bottom: -3px;
  /* Colocado debajo del texto */
  left: 50%;
  /* Centrando inicialmente */
  width: 0;
  /* Oculto inicialmente */
  height: 4px;
  /* Grosor de la línea */
  background-color: #B1D690;
  /* Color de la línea */
  transition: all 0.3s ease;
  /* Transición suave */
  transform: translateX(-50%);
  /* Centrando la línea */
}

/* Expande la línea al pasar el cursor */
.nav-link:hover::after {
  width: 100%;
  /* Ancho completo */
  left: 0;
  /* Ajusta la posición a la izquierda */
  transform: translateX(0);
  /* Restablece la posición */
}

/* Estilo para el botón de colapso en pantallas pequeñas */
.navbar-toggler {
  border-color: #fff;
  /* Color del borde */
}

/* Ícono personalizado para el botón de colapso */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.85)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Estilos responsivos para pantallas pequeñas */
@media (max-width: 991px) {
  .navbar-nav {
    background-color: transparent;
    /* Fondo degradado */
    padding: 20px;
    /* Relleno interno */
    border-radius: 10px;
    /* Bordes redondeados */
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    /* Acomoda los elementos en columna */
    align-items: center;
    /* Centra horizontalmente */
    justify-content: center;

    /* Margen superior */
  }

  .nav-link:hover {
    color: #B1D690 !important;
    /* Cambia el color del texto al pasar el cursor */
  }


  .nav-link {
    text-align: center;
    /* Centra el texto */
    justify-content: center;
    /* Centra el contenido */
    margin: 5px 0;
    /* Margen vertical */
  }

  .nav-link::after {
    display: none;
    /* Oculta la línea decorativa */
  }

  .footer {
    text-align: center;
    /* Centra el texto del pie de página */
  }

  .social-icons {
    margin-top: 20px;
    /* Margen superior para los íconos sociales */
  }

  .sign-out {
    text-align: center;
    margin-top: 15px;
  }
}

/* Estilo para el pie de página */
footer {
  background: #983E00;
  /* Color de fondo */
  color: white;
  /* Color del texto */
  padding: 50px 0 20px;
  /* Espaciado interno */
  position: relative;
  /* Posicionamiento relativo */
  overflow: hidden;
  /* Oculta contenido desbordante */
}

/* Encabezados dentro del pie de página */
.footer h5 {
  color: #fff;
  /* Color del texto */
  font-weight: 600;
  /* Peso del texto */
  margin-bottom: 20px;
  /* Margen inferior */
  position: relative;
  /* Posicionamiento relativo */
  display: inline-block;
  /* Comportamiento en línea */
}

/* Línea decorativa debajo de los encabezados del footer */
.footer h5::after {
  content: '';
  /* Línea decorativa */
  position: absolute;
  /* Posicionamiento absoluto */
  left: 0;
  /* Alineado a la izquierda */
  bottom: -5px;
  /* Colocado debajo del texto */
  width: 50px;
  /* Ancho inicial */
  height: 2px;
  /* Altura */
  background-color: #B1D690;
  /* Color de la línea */
  transition: width 0.3s ease;
  /* Transición suave */
}

/* Ancho completo de la línea al pasar el cursor */
.footer h5:hover::after {
  width: 100%;
  /* Ancho completo */
}

/* Estilo para párrafos y listas en el footer */
.footer p,
.footer ul {
  color: #fff;
  /* Color del texto */
  font-weight: 300;
  /* Peso del texto */
}

/* Estilo de los íconos sociales */
.social-icon {
  font-size: 1.8rem;
  /* Tamaño del ícono */
  margin-right: 20px;
  /* Margen derecho */
  color: white;
  /* Color inicial */
  transition: all 0.3s ease;
  /* Transición suave */
}

/* Cambia el color y posición de los íconos sociales al pasar el cursor */
.social-icon:hover {
  color: #B1D690;
  /* Cambia el color */
  transform: translateY(-5px);
  /* Mueve el ícono hacia arriba */
}

/* Estilo para los enlaces en el footer */
.footer a {
  color: white;
  /* Color del texto */
  text-decoration: none;
  /* Elimina el subrayado */
  transition: color 0.3s ease;
  /* Transición de color */
}

/* Cambia el color de los enlaces al pasar el cursor */
footer a:hover {
  color: #B1D690;
}

/* Estilo para elementos de lista en el footer */
.footer-links li {
  margin-bottom: 10px;
  /* Margen inferior */
  transition: transform 0.3s ease;
  /* Transición suave */
}

/* Desplaza los elementos de la lista al pasar el cursor */
.footer-links li:hover {
  transform: translateX(5px);
  /* Movimiento hacia la derecha */
}

/* Estilo para el año dinámico */
#year {
  font-weight: bold;
  /* Negrita */
  color: B1D690;
  /* Color */
}

/* Sección de copyright */
.copyright {
  /* Fondo degradado */
  padding: 15px 0;
  /* Espaciado interno */
  margin-top: 30px;
  /* Margen superior */
}
</style>
