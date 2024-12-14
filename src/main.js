// Importar Vue
import { createApp } from "vue"; // Se importa la función `createApp` de Vue para crear la instancia de la aplicación
import App from "./App.vue"; // Se importa el componente raíz de la aplicación (App.vue)

// Importar Router
import router from "./router"; // Se importa la configuración del router para manejar las rutas de la aplicación

// Importar Pinia (gestión de estado)
import { createPinia } from "pinia"; // Se importa la función `createPinia` para crear la tienda de Pinia, que es un sistema de gestión de estado para Vue

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Se importa el CSS de Bootstrap para usar sus estilos predeterminados
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Se importa el JavaScript de Bootstrap con su funcionalidad (incluye poppers.js)
import "bootstrap-icons/font/bootstrap-icons.css"; // Se importa el CSS para los íconos de Bootstrap

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core"; // Se importa la función `library` de Font Awesome para gestionar los íconos
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // Se importa el componente `FontAwesomeIcon` para usar íconos de Font Awesome en Vue
import { fas } from "@fortawesome/free-solid-svg-icons"; // Se importan los íconos sólidos de Font Awesome
import { far } from "@fortawesome/free-regular-svg-icons"; // Se importan los íconos regulares de Font Awesome
import { fab } from "@fortawesome/free-brands-svg-icons"; // Se importan los íconos de marcas de Font Awesome

// Firebase
import { initializeApp } from "firebase/app"; // Se importa la función `initializeApp` para inicializar Firebase

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8rU7mLMFBY2NET4ftWStfZF_uUPVF52g", // Clave de API para autenticar la aplicación con Firebase
  authDomain: "landingpage-ac6ad.firebaseapp.com", // Dominio de autenticación de Firebase
  projectId: "landingpage-ac6ad", // ID del proyecto en Firebase
  storageBucket: "landingpage-ac6ad.appspot.com", // Bucket de almacenamiento de Firebase
  messagingSenderId: "800738198901", // ID de remitente para mensajería
  appId: "1:800738198901:web:1a65e7b759a8fdc8d2ff3c", // ID de la aplicación para Firebase
};

// Inicializar Firebase
initializeApp(firebaseConfig); // Se inicializa la aplicación de Firebase con la configuración proporcionada

// Configurar Font Awesome
library.add(fas, far, fab); // Se añaden los conjuntos de íconos (sólidos, regulares y de marcas) a la biblioteca de Font Awesome

// Crear la aplicación
const app = createApp(App); // Se crea la instancia de la aplicación Vue pasando el componente raíz (App.vue)

// Usar Pinia para la gestión de estado
const pinia = createPinia(); // Se crea la tienda de Pinia
app.use(pinia); // Se agrega Pinia a la aplicación para la gestión de estado

// Usar Router para manejar rutas
app.use(router); // Se agrega el router a la aplicación para manejar la navegación entre componentes

// Registrar el componente de Font Awesome
app.component("font-awesome-icon", FontAwesomeIcon); // Se registra el componente de Font Awesome para que pueda ser utilizado en cualquier parte de la aplicación

// Montar la aplicación
app.mount('#app'); // Se monta la aplicación en el elemento con el id 'app' del HTML, lo que hace que Vue se encargue del DOM
