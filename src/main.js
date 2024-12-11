// Importar Vue
import { createApp } from "vue";
import App from "./App.vue";

// Importar Router
import router from "./router";

// Importar Pinia (gestión de estado)
import { createPinia } from "pinia";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Firebase
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8rU7mLMFBY2NET4ftWStfZF_uUPVF52g",
  authDomain: "landingpage-ac6ad.firebaseapp.com",
  projectId: "landingpage-ac6ad",
  storageBucket: "landingpage-ac6ad.appspot.com",
  messagingSenderId: "800738198901",
  appId: "1:800738198901:web:1a65e7b759a8fdc8d2ff3c",
};

// Inicializar Firebase
initializeApp(firebaseConfig);

// Configurar Font Awesome
library.add(fas, far, fab);

// Crear la aplicación
const app = createApp(App);

// Usar Pinia para la gestión de estado
const pinia = createPinia();
app.use(pinia);

// Usar Router para manejar rutas
app.use(router);

// Registrar el componente de Font Awesome
app.component("font-awesome-icon", FontAwesomeIcon);

// Montar la aplicación
app.mount("#app");
