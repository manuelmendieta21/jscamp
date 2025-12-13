# 📚 Documentación del Proyecto JSCamp

## 📋 Índice
1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación y Configuración](#instalación-y-configuración)
5. [Arquitectura de la Aplicación](#arquitectura-de-la-aplicación)
6. [Componentes](#componentes)
7. [Páginas](#páginas)
8. [Funciones y Lógica de Negocio](#funciones-y-lógica-de-negocio)
9. [Comandos Disponibles](#comandos-disponibles)

---

## 🎯 Descripción General

**JSCamp** es una plataforma de búsqueda de empleo especializada en desarrolladores. El proyecto está construido con React + Vite y permite a los usuarios explorar oportunidades laborales en el sector tecnológico.

### Características principales:
- 🔍 Búsqueda de empleos por título, habilidad o empresa
- 🏢 Listado de ofertas laborales con información detallada
- 📄 Sistema de paginación para navegar entre resultados
- 🎨 Interfaz moderna y responsive
- 🚀 Navegación entre páginas con React Router

---

## 📁 Estructura del Proyecto

```
jscamp/
├── vite-react/                    # Aplicación principal con React + Vite
│   ├── src/
│   │   ├── components/            # Componentes reutilizables
│   │   │   ├── Header.jsx         # Cabecera de la aplicación
│   │   │   ├── Footer.jsx         # Pie de página
│   │   │   ├── Menu.jsx           # Menú principal y hero section
│   │   │   ├── Jobs.jsx           # Formulario de búsqueda de empleos
│   │   │   ├── JobCard.jsx        # Tarjeta individual de empleo
│   │   │   ├── JobListings.jsx    # Listado de empleos
│   │   │   ├── Pagination.jsx     # Sistema de paginación
│   │   │   ├── Search.jsx         # Componente de búsqueda
│   │   │   ├── jobsData.json      # Datos de empleos
│   │   │   └── images/            # Recursos gráficos
│   │   ├── pages/                 # Páginas de la aplicación
│   │   │   ├── Inicio.jsx         # Página de inicio
│   │   │   └── Empleos.jsx        # Página de empleos
│   │   ├── App.jsx                # Componente raíz con rutas
│   │   ├── main.jsx               # Punto de entrada de la aplicación
│   │   ├── App.css                # Estilos del componente App
│   │   └── index.css              # Estilos globales
│   ├── public/                    # Archivos públicos estáticos
│   ├── package.json               # Dependencias del proyecto
│   ├── vite.config.js             # Configuración de Vite
│   └── eslint.config.js           # Configuración de ESLint
├── jscamp_json/                   # Versión con JavaScript vanilla
├── jscamp.btn/                    # Versión con botones
├── jscampReact/                   # Versión experimental con React
└── jsVite/                        # Versión experimental con Vite
```

---

## 🛠️ Tecnologías Utilizadas

### Dependencias principales:
- **React** `^19.2.0` - Biblioteca para construir interfaces de usuario
- **React DOM** `^19.2.0` - Renderizado de React en el DOM
- **React Router DOM** `^7.9.6` - Enrutamiento para aplicaciones React

### Dependencias de desarrollo:
- **Vite** `^7.2.2` - Build tool y servidor de desarrollo
- **@vitejs/plugin-react-swc** `^4.2.1` - Plugin de React con SWC para Vite
- **ESLint** `^9.39.1` - Linter para mantener calidad de código
- **eslint-plugin-react-hooks** `^7.0.1` - Reglas de ESLint para React Hooks
- **eslint-plugin-react-refresh** `^0.4.24` - Plugin para React Fast Refresh

---

## ⚙️ Instalación y Configuración

### Requisitos previos:
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación:

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>

# 2. Navegar al directorio del proyecto
cd jscamp/vite-react

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# La aplicación estará disponible en http://localhost:5173
```

---

## 🏗️ Arquitectura de la Aplicación

### Flujo de la aplicación:

```
main.jsx (Punto de entrada)
    ↓
BrowserRouter (Configuración de rutas)
    ↓
App.jsx (Componente raíz)
    ↓
Routes (Definición de rutas)
    ├── "/" → Inicio.jsx
    └── "/empleos" → Empleos.jsx
```

### Patrón de diseño:
- **Componentes funcionales** con React Hooks
- **Composición de componentes** para reutilización
- **Estado local** con useState para manejo de datos
- **Enrutamiento declarativo** con React Router

---

## 🧩 Componentes

### 1. Header.jsx (Cabecera)

**Propósito:** Renderiza la cabecera de la aplicación con logo, navegación y botones de acción.

```jsx
export default function Cabecera()
```

**Estructura:**
- Logo de DevJobs con icono SVG
- Navegación principal (Inicio, Empleos)
- Botones de acción (Publicar empleo, Iniciar sesión)

**Características:**
- Componente estático sin props
- Navegación mediante enlaces HTML
- Diseño responsive con CSS

---

### 2. Footer.jsx (Pie de página)

**Propósito:** Muestra el pie de página con información de copyright.

```jsx
export default function Footer()
```

**Estructura:**
- Texto de copyright con año actual
- Diseño minimalista

**Características:**
- Componente simple sin estado
- Información estática

---

### 3. Menu.jsx (Menú principal)

**Propósito:** Renderiza la sección hero de la página de inicio con búsqueda y características principales.

```jsx
export default function Menu()
```

**Estructura:**
- Imagen de fondo (background.webp)
- Título y descripción principal
- Formulario de búsqueda con icono SVG
- Sección "¿Por qué DevJobs?" con 3 artículos:
  - Encuentra el trabajo de tus sueños
  - Conecta con las mejores empresas
  - Obtén el salario que mereces

**Características:**
- Importa imagen desde carpeta local
- Formulario de búsqueda con validación HTML5 (required)
- Iconos SVG inline para mejor rendimiento
- Diseño de tarjetas para características

---

### 4. Jobs.jsx (Búsqueda de empleos)

**Propósito:** Formulario de búsqueda avanzada con filtros para encontrar empleos.

```jsx
export default function Jobs()
```

**Estructura:**
- Título y descripción de la sección
- Input de búsqueda con icono
- Filtros por:
  - Tecnología (JavaScript, Python, React, Node.js, Java, C#, C, C++, Ruby, PHP)
  - Ubicación (Remoto, Ciudad de México, Guadalajara, Bogotá, Barcelona)
  - Nivel de experiencia (Junior, Mid-level, Senior, Lead)
- Elemento para mostrar filtros seleccionados

**Características:**
- Formulario con role="search" para accesibilidad
- Selects agrupados con optgroup
- IDs únicos para cada elemento del formulario

---

### 5. JobCard.jsx (Tarjeta de empleo)

**Propósito:** Renderiza una tarjeta individual con información de un empleo.

```jsx
export default function JobCard({ job })
```

**Props:**
- `job` (Object): Objeto con información del empleo
  - `id`: Identificador único
  - `titulo`: Título del puesto
  - `empresa`: Nombre de la empresa
  - `ubicacion`: Ubicación del empleo
  - `descripcion`: Descripción del puesto
  - `modalidad`: Modalidad de trabajo (remoto, presencial, híbrido)
  - `data.nivel`: Nivel de experiencia requerido
  - `data.technology`: Tecnología principal

**Estructura:**
- Contenedor article con data-attributes para filtrado
- Título del puesto
- Información de empresa y ubicación
- Descripción del empleo
- Botón de aplicación

**Características:**
- Data attributes para filtrado dinámico
- Diseño de tarjeta responsive
- Botón de acción para aplicar

---

### 6. JobListings.jsx (Listado de empleos)

**Propósito:** Renderiza el listado completo de empleos disponibles.

```jsx
export default function JobListings()
```

**Funcionalidad:**
- Importa datos desde `jobsData.json`
- Mapea cada empleo a un componente JobCard
- Pasa el objeto job completo como prop

**Estructura:**
```jsx
{jobsData.map(job => (
    <JobCard key={job.id} job={job} />
))}
```

**Características:**
- Uso de key única para optimización de React
- Renderizado dinámico basado en datos JSON
- Contenedor con título de sección

---

### 7. Pagination.jsx (Paginación)

**Propósito:** Sistema de paginación para navegar entre páginas de resultados.

```jsx
export function Pagination({ currenPage = 5, totalPages = 10, onPageChange })
```

**Props:**
- `currenPage` (Number, default: 5): Página actual
- `totalPages` (Number, default: 10): Total de páginas disponibles
- `onPageChange` (Function): Callback que se ejecuta al cambiar de página

**Lógica interna:**

#### Generación de páginas:
```jsx
const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
```
- Crea un array con números del 1 al totalPages
- Ejemplo: totalPages=10 → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#### Estados de navegación:
```jsx
const isFirstPage = currenPage === 1;
const isLastPage = currenPage === totalPages;
```
- Determina si estamos en la primera o última página
- Usado para deshabilitar botones de navegación

#### Estilos condicionales:
```jsx
const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.6 } : {};
const styleNextButton = isLastPage ? { pointerEvents: 'none', opacity: 0.6 } : {};
```
- Deshabilita visualmente los botones cuando no son aplicables
- `pointerEvents: 'none'` previene clicks
- `opacity: 0.6` indica estado deshabilitado

#### Manejadores de eventos:

**handlePrevClick** - Navega a la página anterior:
```jsx
const handlePrevClick = (event) => {
    event.preventDefault()  // Previene comportamiento por defecto del enlace
    if (isFirstPage === false) {
        onPageChange(currenPage - 1)  // Llama al callback con página anterior
    }
}
```

**handleNextClick** - Navega a la página siguiente:
```jsx
const handleNextClick = (event) => {
    event.preventDefault()
    if (isLastPage === false) {
        onPageChange(currenPage + 1)  // Llama al callback con página siguiente
    }
}
```

**handlePageChange** - Navega a una página específica:
```jsx
const handlePageChange = (event, page) => {
    event.preventDefault()
    if (page !== currenPage) {  // Solo cambia si es diferente a la actual
        onPageChange(page)
    }
}
```

**Concepto clave - preventDefault():**
> `preventDefault()` detiene el comportamiento por defecto del navegador. En este caso, previene que los enlaces `<a href="#">` recarguen la página, permitiendo manejar la navegación con JavaScript.

#### Renderizado condicional:
```jsx
{!isFirstPage && (
    <a href="#" style={stylePrevButton} onClick={handlePrevClick}>
        {/* Icono de flecha izquierda */}
    </a>
)}
```
- Solo muestra el botón "Anterior" si no estamos en la primera página

```jsx
{pages.map(page => (
    <a href="#"
        key={page}
        className={currenPage === page ? 'is-active' : ''}
        onClick={(event) => handlePageChange(event, page)}>
        {page}
    </a>
))}
```
- Renderiza todos los números de página
- Aplica clase `is-active` a la página actual
- Pasa el número de página al manejador

**Características:**
- Navegación completa (anterior, siguiente, directa)
- Estados visuales para páginas activas y deshabilitadas
- Prevención de navegación inválida
- Iconos SVG para botones de navegación
- Console.log para debugging

---

### 8. Search.jsx (Búsqueda)

**Propósito:** Componente placeholder para funcionalidad de búsqueda.

```jsx
export default function Searching()
```

**Estado actual:**
- Componente básico en desarrollo
- Muestra solo un título "Searching"

---

## 📄 Páginas

### 1. Inicio.jsx

**Propósito:** Página de inicio de la aplicación.

```jsx
export default function Inicio()
```

**Composición:**
- Header (Cabecera)
- Menu (Hero section con búsqueda y características)
- Footer (Pie de página)

**Características:**
- Página estática sin estado
- Composición de componentes
- Punto de entrada principal de la aplicación

---

### 2. Empleos.jsx

**Propósito:** Página de listado de empleos con paginación.

```jsx
export default function Empleos()
```

**Estado:**
```jsx
const [currentPage, setCurrentPage] = useState(1);
```
- `currentPage`: Controla la página actual de la paginación
- Valor inicial: 1

**Constantes:**
```jsx
const totalPages = 10;
```
- Define el número total de páginas disponibles

**Funciones:**

#### handlePageChange
```jsx
const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
}
```
**Propósito:** Actualiza la página actual cuando el usuario navega.

**Parámetros:**
- `page` (Number): Número de la nueva página

**Funcionamiento:**
1. Recibe el número de página desde el componente Pagination
2. Registra el cambio en consola (debugging)
3. Actualiza el estado con setCurrentPage
4. React re-renderiza el componente con la nueva página

**Composición:**
- Header (Cabecera)
- Jobs (Formulario de búsqueda)
- JobListings (Listado de empleos)
- Pagination (Sistema de paginación)
  - Props: onPageChange, currenPage, totalPages
- Footer (Pie de página)

**Flujo de datos:**
```
Empleos (estado: currentPage)
    ↓ (pasa como prop)
Pagination (recibe: currenPage)
    ↓ (usuario hace click)
handlePageChange (actualiza estado)
    ↓ (React re-renderiza)
Pagination (muestra nueva página activa)
```

---

## 🔧 Funciones y Lógica de Negocio

### Sistema de Paginación

#### 1. Generación dinámica de páginas
```jsx
const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
```
**Explicación:**
- `Array.from()`: Crea un nuevo array
- `{ length: totalPages }`: Define la longitud del array
- `(_, i) => i + 1`: Función mapper que genera números del 1 al totalPages
- `_`: Primer parámetro (valor) no usado, por convención se nombra con guión bajo
- `i`: Índice del array (empieza en 0)
- `i + 1`: Suma 1 para que los números empiecen en 1 en lugar de 0

**Ejemplo:**
```javascript
totalPages = 5
// Resultado: [1, 2, 3, 4, 5]
```

#### 2. Validación de límites
```jsx
const isFirstPage = currenPage === 1;
const isLastPage = currenPage === totalPages;
```
**Propósito:** Prevenir navegación fuera de los límites válidos.

**Uso:**
- Deshabilitar botón "Anterior" en primera página
- Deshabilitar botón "Siguiente" en última página
- Controlar renderizado condicional de botones

#### 3. Estilos dinámicos
```jsx
const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.6 } : {};
```
**Explicación:**
- Operador ternario: `condición ? valorSiTrue : valorSiFalse`
- Si `isFirstPage` es true: aplica estilos de deshabilitado
- Si `isFirstPage` es false: objeto vacío (sin estilos adicionales)

**Propiedades CSS aplicadas:**
- `pointerEvents: 'none'`: Deshabilita interacción del mouse
- `opacity: 0.6`: Reduce opacidad para indicar estado deshabilitado

#### 4. Prevención de comportamiento por defecto
```jsx
event.preventDefault()
```
**Concepto fundamental:**
- Los enlaces `<a>` por defecto navegan a la URL del href
- `preventDefault()` cancela este comportamiento
- Permite manejar la navegación con JavaScript
- Evita recargas de página innecesarias

**Analogía:**
> Es como poner un "alto" al comportamiento automático del navegador para tomar el control manualmente.

#### 5. Actualización de estado
```jsx
setCurrentPage(page)
```
**Funcionamiento:**
1. React detecta el cambio de estado
2. Marca el componente para re-renderizado
3. Ejecuta el render con el nuevo valor
4. Actualiza el DOM solo donde sea necesario (reconciliación)

**Ventaja:**
- React optimiza las actualizaciones
- Solo cambia lo necesario en el DOM
- Mantiene la UI sincronizada con el estado

---

## 🎨 Patrones de Diseño Utilizados

### 1. Composición de Componentes
```jsx
<Empleos>
    <Header />
    <Jobs />
    <JobListings />
    <Pagination />
    <Footer />
</Empleos>
```
**Ventajas:**
- Reutilización de código
- Separación de responsabilidades
- Fácil mantenimiento

### 2. Props Drilling
```jsx
// Padre
<Pagination onPageChange={handlePageChange} currenPage={currentPage} />

// Hijo
export function Pagination({ currenPage, onPageChange }) { ... }
```
**Flujo de datos:**
- Unidireccional (de padre a hijo)
- Predecible y fácil de debuggear

### 3. Renderizado Condicional
```jsx
{!isFirstPage && <ButtonPrev />}
{isLastPage === false && <ButtonNext />}
```
**Técnicas usadas:**
- Operador lógico AND (`&&`)
- Comparación booleana explícita

### 4. Renderizado de Listas
```jsx
{pages.map(page => (
    <a key={page} onClick={(event) => handlePageChange(event, page)}>
        {page}
    </a>
))}
```
**Buenas prácticas:**
- Uso de `key` única para optimización
- Arrow functions inline para manejadores
- Paso de parámetros adicionales al evento

---

## 📊 Estructura de Datos

### Objeto Job (jobsData.json)
```json
{
    "id": "unique-id",
    "titulo": "Título del puesto",
    "empresa": "Nombre de la empresa",
    "ubicacion": "Ciudad, País",
    "descripcion": "Descripción del puesto",
    "modalidad": "remoto|presencial|hibrido",
    "data": {
        "nivel": "junior|mid|senior|lead",
        "technology": "javascript|python|react|..."
    }
}
```

---

## 🚀 Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
- Inicia el servidor de desarrollo
- Hot Module Replacement (HMR) activado
- Disponible en http://localhost:5173

### Producción
```bash
npm run build
```
- Compila la aplicación para producción
- Optimiza y minifica el código
- Genera archivos en carpeta `dist/`

### Preview
```bash
npm run preview
```
- Previsualiza la build de producción
- Útil para testing antes de deployment

### Linting
```bash
npm run lint
```
- Ejecuta ESLint en el proyecto
- Detecta errores y problemas de estilo
- Ayuda a mantener código consistente

---

## 🔍 Conceptos Clave de React

### 1. Hooks
**useState:**
```jsx
const [currentPage, setCurrentPage] = useState(1);
```
- Permite agregar estado a componentes funcionales
- Retorna un array con [valor, función_actualizadora]
- El valor inicial se pasa como argumento

### 2. Props
```jsx
<Pagination currenPage={currentPage} onPageChange={handlePageChange} />
```
- Datos que se pasan de padre a hijo
- Son inmutables (read-only)
- Permiten configurar componentes

### 3. Event Handlers
```jsx
onClick={(event) => handlePageChange(event, page)}
```
- Funciones que responden a eventos del usuario
- Reciben el objeto event como primer parámetro
- Pueden recibir parámetros adicionales

### 4. Renderizado Condicional
```jsx
{condition && <Component />}
```
- Muestra componentes basado en condiciones
- Usa operadores lógicos de JavaScript
- Mantiene el JSX limpio y legible

### 5. Listas y Keys
```jsx
{items.map(item => <Component key={item.id} />)}
```
- `map()` transforma arrays en elementos JSX
- `key` ayuda a React a identificar elementos
- Mejora el rendimiento en actualizaciones

---

## 🎯 Mejores Prácticas Implementadas

### 1. Componentes Funcionales
- Uso exclusivo de componentes funcionales
- Más simples y fáciles de entender
- Mejor rendimiento con React Hooks

### 2. Separación de Responsabilidades
- Cada componente tiene una única responsabilidad
- Componentes pequeños y reutilizables
- Fácil testing y mantenimiento

### 3. Nombres Descriptivos
- Funciones con nombres que describen su propósito
- Variables con nombres claros
- Componentes con nombres en PascalCase

### 4. Accesibilidad
- Uso de elementos semánticos HTML5
- Atributos ARIA cuando es necesario
- role="search" en formularios de búsqueda

### 5. Optimización
- Keys únicas en listas
- Prevención de re-renders innecesarios
- Lazy loading de imágenes (potencial mejora)

---

## 🐛 Debugging y Logging

### Console.log estratégico
```jsx
console.log('render Pagination')  // En Pagination.jsx
console.log(page);                // En handlePageChange
```
**Propósito:**
- Verificar cuándo se renderiza un componente
- Rastrear cambios de estado
- Debuggear flujo de datos

**Recomendación:**
- Remover console.logs en producción
- Usar herramientas de desarrollo de React
- Implementar logging más robusto si es necesario

---

## 📝 Notas Adicionales

### Áreas de Mejora Potencial

1. **Gestión de Estado Global:**
   - Implementar Context API o Redux para estado compartido
   - Evitar props drilling en componentes profundos

2. **Búsqueda y Filtrado:**
   - Implementar lógica de búsqueda funcional
   - Conectar filtros con el listado de empleos
   - Agregar debouncing en búsqueda

3. **Paginación Real:**
   - Conectar paginación con datos reales
   - Implementar carga de datos por página
   - Agregar indicador de carga

4. **Persistencia:**
   - Guardar filtros en localStorage
   - Mantener página actual en URL
   - Implementar historial de búsquedas

5. **Testing:**
   - Agregar tests unitarios con Jest
   - Tests de integración con React Testing Library
   - Tests E2E con Cypress

6. **Performance:**
   - Implementar React.memo en componentes
   - Lazy loading de componentes
   - Optimización de imágenes

7. **Accesibilidad:**
   - Navegación por teclado completa
   - Lectores de pantalla
   - Contraste de colores WCAG

---

## 📞 Soporte y Contribución

Para contribuir al proyecto:
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

---

## 📄 Licencia

Este proyecto es parte de un ejercicio de aprendizaje de React y Vite.

---

**Última actualización:** 2025
**Versión:** 0.0.0
**Autor:** JSCamp Team
