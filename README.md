## 🛠️ E1-M7 Ejercicio

### **Configuración de la Conexión a la Base de Datos 🐘**

**Objetivo:** Aprender el proceso fundamental para conectar una aplicación Node.js a una base de datos PostgreSQL. Utilizarás el paquete `pg`, la librería estándar para esta tarea, y configurarás un "pool" de conexiones, que es la práctica recomendada para gestionar las conexiones de manera eficiente y robusta.

**Prerrequisitos:** Para completar este ejercicio, necesitas tener acceso a una base de datos PostgreSQL. Puede ser una instancia local en tu computadora (usando Docker, por ejemplo) o una base de datos remota. Debes tener a mano los siguientes datos de conexión:

- **Usuario** (`user`)
- **Host** (`host`)
- **Nombre de la base de datos** (`database`)
- **Contraseña** (`password`)
- **Puerto** (`port`, por defecto es 5432)

---

**Instrucciones:**

Se utilizará PNPM como gestor de paquetes, en lugar de NPM.

#### **Paso 1: Instalación del Paquete**

1.  Abre la terminal en la carpeta de tu proyecto.
2.  Instala el paquete `pg` a través de PNPM:

    ```
    pnpm install pg
    ```

---

#### **Paso 2: Creación del Script de Conexión**

1.  Crea un nuevo archivo en tu proyecto. Un buen nombre sería `db-connect.js` o simplemente `db.js`.
2.  Dentro de este archivo, importa la clase `Pool` desde la librería `pg`:

    ```
    const { Pool } = require('pg');
    ```

---

#### **Paso 3: Configuración del Pool de Conexiones**

Un "pool" gestiona un conjunto de conexiones abiertas a la base de datos, permitiendo que tu aplicación las reutilice en lugar de abrir y cerrar una nueva conexión para cada consulta.

1.  Crea un objeto de configuración con tus credenciales de la base de datos.
2.  Crea una nueva instancia de `Pool`, pasándole tu objeto de configuración.

---

#### **Paso 4: Verificación de la Conexión con Async/Await**

Para confirmar que tu configuración es correcta, intentarás obtener un "cliente" del pool.

1.  Crea una función asíncrona (ej: `verificarConexion`).
2.  Dentro de esta función, utiliza un bloque `try...catch` para manejar el resultado de la conexión.
    - **Bloque `try`:** Usa `await pool.connect()` para intentar establecer una conexión. Si la promesa se resuelve, significa que la conexión fue exitosa. Imprime un mensaje de éxito en la consola.
    - **Bloque `catch`:** Si la promesa es rechazada (por credenciales incorrectas, base de datos no disponible, etc.), el error será capturado. Imprime un mensaje de error claro en la consola junto con el objeto de error (`err`).
    - **Importante:** La llamada a `pool.connect()` reserva un cliente del pool. En una aplicación real, siempre debes liberarlo con `client.release()` cuando termines de usarlo. Para esta simple prueba, nos enfocaremos solo en el éxito o fracaso de la conexión inicial.

3.  Llama a tu función asíncrona para que se ejecute.

---

#### **Paso 5: Ejecución del Script**

1.  Guarda tu archivo `db-connect.js`.
2.  Ejecútalo desde la terminal:

    ```
    node db-connect.js
    ```

3.  Observa el resultado en la consola. Deberías ver tu mensaje de "Conexión exitosa" o un mensaje de error detallado que te ayudará a depurar cualquier problema con tu configuración.

---

**Conceptos a Aplicar:**

- **Node-Postgres (`pg`):** La librería o "driver" estándar para interactuar con bases de datos PostgreSQL desde Node.js.
- **Pool de Conexiones (`Pool`):** La práctica recomendada para gestionar conexiones a la base de datos de forma eficiente, evitando la sobrecarga de crear y destruir conexiones constantemente.
- **Programación Asíncrona:** El uso de `async/await` para manejar operaciones que toman tiempo, como establecer una conexión de red con una base de datos.
- **Manejo de Errores:** El uso indispensable del bloque `try...catch` para capturar y gestionar fallos de conexión de manera controlada, evitando que la aplicación se detenga abruptamente.

---

## 📚 Archivos de Apoyo para Aprendizaje

Esta carpeta incluye varios archivos para ayudarte a entender completamente el ejercicio:

### 🎯 Para Empezar Rápido

- **[RESUMEN_RAPIDO.md](RESUMEN_RAPIDO.md)** - Guía de 2 minutos con lo esencial
- **[INDEX.md](INDEX.md)** - Índice completo y guía de lectura recomendada

### 💻 El Código

- **[db-connect.js](db-connect.js)** - Script principal con explicaciones detalladas en españold
- **[config/db.js](config/db.js)** - Configuración profesional para reutilizar en toda la app
- **[app.js](app.js)** - Ejemplos prácticos de funciones útiles (CRUD, transacciones, etc)

### 📖 Documentación Detallada

- **[GUIA_COMPLETA.md](GUIA_COMPLETA.md)** - Tutorial exhaustivo con todos los temas
- **[CONCEPTOS_CLAVE.js](CONCEPTOS_CLAVE.js)** - Resumen de conceptos importantes con ejemplos
- **[COMPARACION_ENFOQUES.js](COMPARACION_ENFOQUES.js)** - 5 formas diferentes de conectarse + comparativa

### ⚙️ Configuración

- **[.env.example](.env.example)** - Template seguro de variables de entorno
- **[.gitignore](.gitignore)** - Protege tus credenciales
- **[package.json](package.json)** - Dependencias del proyecto

### 📊 Flujo Recomendado

1. **2 minutos**: Lee [RESUMEN_RAPIDO.md](RESUMEN_RAPIDO.md)
2. **5 minutos**: Ejecuta `npm install && cp .env.example .env && npm start`
3. **15 minutos**: Lee el código en [db-connect.js](db-connect.js) (está lleno de comentarios)
4. **30 minutos**: Lee [GUIA_COMPLETA.md](GUIA_COMPLETA.md) para entender en profundidad
5. **Opcional**: Estudia [CONCEPTOS_CLAVE.js](CONCEPTOS_CLAVE.js) y [COMPARACION_ENFOQUES.js](COMPARACION_ENFOQUES.js)

### ✅ Lo que aprenderás

✓ Qué es un Pool de Conexiones  
✓ Cómo conectar Node.js a PostgreSQL  
✓ Async/await y Promesas  
✓ Try/catch/finally para errores  
✓ Variables de entorno para seguridad  
✓ Mejores prácticas profesionales  
✓ Cómo debuggear problemas de conexión

**Se elige para este ejercicio el uso de PNPM en vez de NPM**