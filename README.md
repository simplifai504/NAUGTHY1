# Cómo ver este proyecto con Live Server (paso a paso)

Este proyecto usa Next.js. Ya está configurado para generar una versión **estática** (un `index.html`) que puedes abrir con la extensión **Live Server** en VS Code.

## Requisitos
- Visual Studio Code
- Extensión "Live Server" (autor: Ritwick Dey)
- Node.js 20 LTS o superior (recomendado). También funciona con >= 18.17.0.

## 1) Instalar/actualizar Node.js (si es necesario)
Si al construir aparece un mensaje como "Node.js >= 18.17.0 es requerido", actualiza Node a la versión LTS:

- Descarga el instalador desde: https://nodejs.org/en (elige **LTS** para Windows).
- Ejecuta el instalador y sigue los pasos (deja las opciones por defecto). 
- Cierra y vuelve a abrir VS Code para que tome la nueva versión de Node.
- Verifica en la terminal de VS Code:
```powershell
node -v
```
Deberías ver algo como `v20.x.x`.

## 2) Instalar dependencias
En la carpeta del proyecto (donde está este README):
```powershell
npm install
```

## 3) Exportar el sitio estático
Genera la carpeta `out/` con el `index.html` listo para Live Server:
```powershell
npm run export
```
Esto creará la carpeta `out/` en la raíz del proyecto.

## 4) Abrir con Live Server
- En VS Code, abre la carpeta `out/`.
- Abre el archivo `out/index.html`.
- Clic derecho en `index.html` > "Open with Live Server".

¡Listo! Se abrirá tu sitio en el navegador.

## Alternativa: modo desarrollo
Si prefieres ver el proyecto en modo dev (Hot Reload):
```powershell
npm run dev
```
Luego visita http://localhost:3000 en tu navegador.

> Nota: El modo dev también requiere Node >= 18.17.0 (recomendado 20 LTS).

## Solución de problemas
- "You are using Node.js 18.15.0..." → Actualiza Node (ver paso 1).
- Se abre Live Server pero no carga bien → Asegúrate de abrir `out/index.html` (no `app/page.tsx`).
- Imágenes o estilos no se ven → Vuelve a ejecutar `npm run export` después de cualquier cambio.
- No encuentro Live Server → En VS Code, ve a "Extensiones" (Ctrl+Shift+X), busca "Live Server" (autor: Ritwick Dey) e instálala.

## Scripts útiles
- `npm run export`: Construye y exporta el sitio estático a `out/`.
- `npm run dev`: Arranca el servidor de desarrollo.

## Vista rápida (ASP.NET estático con Live Server)
Si sólo quieres abrir la versión estática que estamos usando ahora mismo:

1) En VS Code, abre la carpeta raíz del proyecto (donde está este README).
2) Clic derecho en `index.html` (raíz) > "Open with Live Server".
	- Ese `index.html` redirige automáticamente a `aspnet/Naughty-static.html`.
3) Forza refresco cuando cambies imágenes o videos: `Ctrl+F5`.

Archivos de medios:
- Videos: `aspnet/videos/hero*.mp4` (el héroe y el About eligen la mejor resolución disponible).
- Imágenes: `aspnet/images/photo*.jpg|jpeg`.

