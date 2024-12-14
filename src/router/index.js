// Importar las funciones necesarias de Firebase para la autenticación
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Importar las funciones necesarias de Vue Router para crear rutas y gestionar la navegación
import { createRouter, createWebHistory } from "vue-router";

// Crear la instancia del enrutador de Vue
const router = createRouter({
    history: createWebHistory(), // Define el tipo de historia del navegador para las rutas, en este caso usa el historial del navegador
    routes: [
        // Definición de las rutas de la aplicación con sus correspondientes componentes
        { path: "/", component: () => import("../components/Inicio.vue") },
        { path: "/Users", component: () => import("../components/Usuarios.vue") },
        { path: "/Plans", component: () => import("../components/AdministrarPlanes.vue") },
        { path: "/Employees", component: () => import("../components/Colaboradores.vue") },
        { path: "/Revenue", component: () => import("../components/Ingresos.vue") },
        { path: "/Stock", component: () => import("../components/ControlDeInventario.vue") },
        { path: "/Calendar", component: () => import("../components/Calendario.vue") },
        { path: "/Notes", component: () => import("../components/Notas.vue") },
        { path: "/Settings", component: () => import("../components/Ajustes.vue") },
        { path: "/Support", component: () => import("../components/SoporteYAyuda.vue") },
        { path: "/Profile", component: () => import("../components/PerfilDeUsuario.vue") },
    ]
});

// Función para obtener el usuario autenticado actual
const getCurrentUser = () => {
    // Devuelve una promesa que maneja la autenticación de forma asincrónica
    return new Promise((resolve, reject) => {
        // Se suscribe al listener de autenticación de Firebase para detectar cambios en el estado de autenticación
        const removeListener = onAuthStateChanged(
            getAuth(), // Obtiene la instancia de autenticación de Firebase
            (user) => {
                removeListener(); // Elimina el listener después de obtener el usuario
                resolve(user); // Resuelve la promesa con el usuario autenticado
            },
            (error) => {
                removeListener(); // Elimina el listener en caso de error
                reject(error); // Rechaza la promesa si ocurre un error
            }
        );
    });
};

// Middleware global que se ejecuta antes de cada cambio de ruta
router.beforeEach(async (to, from, next) => {
    // Verifica si la ruta a la que se intenta acceder requiere autenticación
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        try {
            // Intenta obtener el usuario autenticado actual
            const user = await getCurrentUser();
            if (user) {
                // Si hay un usuario autenticado, permite el acceso a la ruta
                next();
            } else {
                // Si no hay usuario autenticado, muestra una alerta y redirige a la página de inicio de sesión
                alert("You don't have access!");
                next("/SignIn"); // Redirige a la página de inicio de sesión
            }
        } catch (error) {
            // Si ocurre un error al obtener el usuario, lo registra en la consola
            console.error("Error fetching current user:", error);
            // Redirige a la página de inicio de sesión en caso de error
            next("/SignIn");
        }
    } else {
        // Si la ruta no requiere autenticación, permite el acceso sin restricciones
        next();
    }
});

// Exporta la instancia del enrutador para ser utilizada en la aplicación
export default router;
