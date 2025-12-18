# Cómo Agregar tu CV al Portfolio

## Pasos para que el botón "Descargar CV" funcione:

### 1. Prepara tu archivo PDF
- Asegúrate de tener tu CV en formato PDF
- Renombra el archivo a: **`CV-Guillermo-Fernando-Farfan.pdf`**
- Tamaño recomendado: menos de 2MB

### 2. Coloca el PDF en la carpeta `public`
Copia tu archivo PDF a esta ubicación:
```
c:\Users\Fernando\OneDrive\Desktop\Fernando-Farfan-Portfolio\public\CV-Guillermo-Fernando-Farfan.pdf
```

### 3. Verifica localmente (opcional)
```bash
npm run dev
```
Abre http://localhost:5173/ y prueba el botón "Descargar CV"

### 4. Despliega los cambios
```bash
npm run deploy
```

### 5. Verifica en el sitio en vivo
Visita https://fernandofarfan.github.io/Fernando-Farfan-Portfolio/ y prueba el botón

## Estructura de Archivos

```
Fernando-Farfan-Portfolio/
├── public/
│   ├── README.md
│   └── CV-Guillermo-Fernando-Farfan.pdf  ← Tu CV aquí
├── src/
│   └── App.jsx (configurado con la ruta correcta)
└── ...
```

## Notas Importantes

✅ **La carpeta `public` ya está creada**
✅ **El código ya está configurado para buscar el archivo**
✅ **Solo necesitas copiar tu PDF a la carpeta `public`**

⚠️ **El nombre del archivo debe ser exactamente:** `CV-Guillermo-Fernando-Farfan.pdf` (con guiones, sin espacios)

## Cambiar el CV en el futuro

Para actualizar tu CV:
1. Reemplaza el archivo PDF en la carpeta `public`
2. Ejecuta `npm run deploy`
3. Los cambios se reflejarán en el sitio en vivo

¡Listo! Una vez que copies tu CV a la carpeta `public`, el botón funcionará automáticamente.
