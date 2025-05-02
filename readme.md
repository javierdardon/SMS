# 🛠️ Sistema de Gestión de Entregas

Este proyecto es una API construida con **NestJS**, que permite gestionar **eventos** y sus respectivas **personas asociadas**. Incluye integración con base de datos **MariaDB** mediante Docker y persistencia de datos entre reinicios.

---

## 🧱 Tecnologías utilizadas

- **NestJS** con TypeORM
- **MariaDB** (vía contenedor)
- **Docker + Docker Compose**
- **Git** para control de versiones

---

## 🚀 Puesta en marcha

### 1. Requisitos previos

Asegurarse de tener instalado en el sistema:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)  
  (en Windows: habilitar la opción para usar contenedores de Linux)
- [Git](https://git-scm.com/)  
  (para clonar el repositorio)

---

### 2. Clonar el repositorio

```bash
git clone https://github.com/javierdardon/SMS.git
cd SMS
3. Levantar los contenedores
Desde la raíz del proyecto:


docker compose up --build
Esto hará lo siguiente:

Construir el backend con una imagen de Node.

Crear un contenedor MariaDB 11.1.

Usar el volumen db-data/ para persistir la base de datos entre reinicios.

Ejecutar el archivo db-init/init.sql que crea las tablas e inserta datos de prueba la primera vez que se monta el volumen.

📂 Estructura del backend (/backend)
src/

eventos/
Módulo para gestionar eventos (crear, consultar)

personas/
Módulo de personas asociadas a un evento

entities/
Entidades Evento y Persona con relaciones bidireccionales definidas en TypeORM

app.module.ts
Registra los módulos y configura TypeORM (synchronize: true para autogenerar las tablas)

create-evento.dto.ts
Define el formato del JSON que permite crear un evento junto con sus personas.

📤 Endpoint de carga masiva
El siguiente endpoint permite registrar un evento y múltiples personas en un solo request.


POST /eventos
Content-Type: application/json
Ejemplo de payload:
json
Copiar
Editar
{
  "fecha": "2025-08-15",
  "razon": "Entrega de víveres a comunidades rurales",
  "personas": [
    {
      "nombre": "Mario",
      "apellido": "López",
      "dpi": "1234567890101",
      "telefono": "12345678",
      "direccion": "Aldea El Milagro"
    },
    {
      "nombre": "Lucía",
      "apellido": "Cruz",
      "dpi": "9876543210102",
      "telefono": "87654321",
      "direccion": "Barrio La Esperanza"
    }
  ]
}
El backend primero guarda el evento, luego asocia y persiste todas las personas con ese evento.

📝 Consideraciones de entorno
La base de datos no se borra al reiniciar gracias al volumen db-data/.

Si el volumen se elimina, init.sql lo volverá a crear con datos mínimos de arranque.

El proyecto se puede ejecutar igual en Linux, macOS y Windows si Docker está correctamente instalado.

No se requiere .env por ahora, ya que las credenciales están codificadas en app.module.ts para fines de desarrollo.

⚙️ Primer uso del repositorio
Después de clonar el proyecto y verificar que Docker funciona:


docker compose up --build
La API estará disponible en:



http://localhost:3000/eventos
Podés probar los endpoints con herramientas como Postman o Insomnia.

📦 Ignorados en Git
El archivo .gitignore ya incluye:

node_modules/

db-data/

.env (si en el futuro se usa)

🤝 Contribuciones
Para modificar el proyecto o trabajar en equipo:

Hacer fork o clonar el repositorio

Asegurarse de tener configurado Git con usuario y email

Crear ramas nuevas por funcionalidad

🧪 Tests (opcional)
NestJS ya incluye estructura básica para pruebas. Los archivos *.spec.ts pueden usarse con:

bash
Copiar
Editar
npm run test
📌 Notas finales
Este backend fue diseñado para ser totalmente portable.
Con un solo comando, cualquier desarrollador puede levantarlo sin depender de configuraciones locales complejas.