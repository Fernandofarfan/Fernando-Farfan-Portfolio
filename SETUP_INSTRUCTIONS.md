# Instrucciones para Configurar Formspree

Para que el formulario de contacto funcione, necesitas crear una cuenta gratuita en Formspree:

## Pasos:

1. **Crear cuenta en Formspree**
   - Ve a https://formspree.io/
   - Regístrate con tu email (es gratis)

2. **Crear un nuevo formulario**
   - Una vez dentro, haz clic en "New Form"
   - Dale un nombre (ej: "Portfolio Contact")
   - Copia el Form ID que te dan (algo como `xpznabcd`)

3. **Actualizar el código**
   - Abre el archivo `src/components/ContactForm.jsx`
   - En la línea 14, reemplaza `YOUR_FORM_ID` con tu Form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/xpznabcd', {
   ```

4. **Listo!**
   - Los mensajes llegarán al email con el que te registraste en Formspree
   - Puedes cambiar el email de destino en la configuración de Formspree

---

# Instrucciones para Google Analytics

Si quieres agregar Google Analytics:

1. **Crear cuenta**
   - Ve a https://analytics.google.com/
   - Crea una propiedad para tu sitio web

2. **Obtener ID de medición**
   - Copia tu Measurement ID (formato: `G-XXXXXXXXXX`)

3. **Actualizar index.html**
   - Abre `index.html`
   - Descomenta las líneas 34-41
   - Reemplaza `YOUR_GA_ID` con tu Measurement ID

---

# Agregar URLs a Proyectos

Para agregar links a tus proyectos:

1. Abre `src/data/projects.js`
2. Rellena los campos `demo` y `repo` con las URLs:
   ```javascript
   demo: "https://mi-proyecto-demo.com",
   repo: "https://github.com/tuusuario/tu-repo"
   ```

---

# Agregar Testimonios

Para agregar testimonios:

1. Abre `src/data/testimonials.js`
2. Agrega objetos siguiendo el formato del ejemplo
3. Puedes agregar una foto opcional

