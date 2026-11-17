# Cómo Administrar los CVs del Portfolio

## Pasos para actualizar los archivos de descarga:

### 1. Prepara tus archivos PDF
- Asegúrate de tener tus CVs actualizados.
- Renombra los archivos siguiendo este esquema:
  - Español: **`Guillermo_Farfan_CV.pdf`**
  - Inglés: **`Guillermo_Farfan_CV_EN.pdf`**

### 2. Coloca los archivos en la carpeta `public/CV`
Copia ambos archivos a la carpeta `public/CV/` de este proyecto.

### 3. Sincroniza y Despliega
Para que los cambios se vean en vivo, ejecuta:

```bash
git add .
git commit -m "update: refresh CV files"
git push origin main
npm run deploy
```

## Estructura de Archivos recomendada

```
Fernando-Farfan-Portfolio/
├── public/
│   ├── CV/
│   │   ├── Guillermo_Farfan_CV.pdf     ← Versión Español
│   │   ├── Guillermo_Farfan_CV_EN.pdf  ← Versión Inglés
│   │   └── (12 CVs por especialidad, ES/EN)
│   └── favicon.svg
├── src/
│   └── data.js  ← (Aquí se configuran los links de descarga)
└── ...
```

## Solución de problemas (Caché)

Si después de actualizar los archivos sigues viendo la versión vieja:
1. Asegúrate de que el comando `npm run deploy` terminó con éxito.
2. Limpia la caché del navegador (`Ctrl + F5`) o prueba en una ventana de incógnito.
3. El sitio tiene una versión en el pie de página (ej: v1.1.0) para ayudarte a identificar si los cambios se aplicaron.

