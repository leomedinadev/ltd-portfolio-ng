# Mejoras — Portafolio Personal elmedina.dev
> Sitio actual: [leomedinadev.github.io/ltd-portfolio-ng](https://leomedinadev.github.io/ltd-portfolio-ng)  
> Dominio destino: `elmedina.dev`  
> Revisado: Mayo 2026

---

## Resumen ejecutivo

El portafolio actual es un sólido v1 — diseño limpio, dark theme profesional, estructura correcta y contenido de experiencia relevante. Los cambios necesarios son todos menores: ninguno requiere rediseño. Con estos ajustes queda listo para circular en un CV y publicarse bajo `elmedina.dev`.

---

## Mejoras críticas (hacer antes de publicar)

### 1. Título de la pestaña del navegador
**Problema:** La pestaña del navegador muestra `LtdPorfolioNg` — el nombre interno del proyecto Angular.  
**Impacto:** Es lo primero que ve cualquier visitante y lo primero que indexa Google.  
**Solución:** Cambiar el `<title>` en `index.html` a algo como:
```
Leonardo Medina | Full Stack Developer
```
O con más contexto:
```
Leonardo Medina | Full Stack Developer · APIs & Backend · Ecuador
```

---

### 2. Foto de perfil profesional
**Problema:** La foto actual es un avatar ilustrado estilo anime. Tiene personalidad pero reduce credibilidad en contextos de reclutamiento.  
**Impacto:** Empleadores y reclutadores — la audiencia principal de `elmedina.dev` — generan más confianza con una foto real.  
**Solución:** Reemplazar con foto profesional real.
- No necesita ser de estudio — fondo neutro y buena iluminación son suficientes
- Tono: serio pero accesible, no demasiado formal
- El avatar puede seguir siendo útil para `leobuilds.dev` (marca comercial con personalidad)

---

### 3. Botón "Descargar CV" en el hero — estrategia de dos versiones
**Problema:** No existe un acceso directo al CV desde la sección principal.  
**Impacto:** Es lo primero que busca un reclutador al llegar al sitio.  
**Solución:** Añadir botón en el hero junto a los botones de LinkedIn/GitHub/Contacto:
```
[ LinkedIn ]  [ GitHub ]  [ Contactame ]  [ Descargar CV ↓ ]
```

#### ⚠️ Privacidad del CV — decisión tomada

Un CV descargable desde un sitio público es accesible por cualquier persona, bots incluidos. Por eso se manejan **dos versiones**:

**CV público** (el que se descarga desde `elmedina.dev`):
- ✓ Nombre completo
- ✓ Título: Full Stack Developer
- ✓ Correo: `leo@elmedina.dev`
- ✓ LinkedIn URL
- ✓ GitHub URL
- ✓ Ubicación: Ecuador
- ✗ **Sin teléfono** — dato demasiado sensible para exposición pública

**CV privado** (el que se envía directamente al aplicar a un puesto):
- Todo lo anterior +
- ✓ Número de teléfono
- ✓ Cualquier dato adicional requerido por la empresa

> **Razonamiento:** El teléfono no tiene filtro — cualquiera puede llamar o escribir por WhatsApp sin contexto. El correo `leo@elmedina.dev` es precisamente para ese contacto profesional, tiene filtros de spam, y si genera ruido se crea un alias nuevo. Los reclutadores de calidad siempre prefieren contacto por LinkedIn o email de todas formas.

- Nombre sugerido del archivo público: `leonardo-medina-cv-2026.pdf`

---

### 4. Texto del placeholder de Proyectos
**Problema:** Dice "**Estamos** construyendo algo increíble" — el plural "estamos" queda incoherente en un portafolio personal.  
**Solución:** Cambiar a primera persona singular:
> *"Estoy construyendo algo increíble — muy pronto tendrás novedades."*

O una versión más directa y honesta:
> *"Próximamente. Estoy trabajando en mis primeros proyectos OSS — vuelve pronto."*

---

### 5. Formulario de contacto funcional
**Problema:** El botón "Contáctame" lleva a... (pendiente de verificar destino). No se vio un formulario funcional.  
**Solución:** Asegurarse de que el formulario envíe correctamente a `leo@elmedina.dev` una vez configurado el correo. Opciones:
- **Formspree** (gratis, fácil de integrar en Angular) — `formspree.io`
- **EmailJS** — envío directo desde el frontend sin backend
- **Enlace mailto** como fallback: `mailto:leo@elmedina.dev`

---

## Mejoras importantes (hacer en las primeras semanas)

### 6. Sección de Blog / Artículos
**Por qué:** El plan de Fase 1 contempla publicar un artículo técnico por semana. El portafolio debe tener esta sección desde el inicio aunque empiece vacía — muestra intención y estructura.  
**Solución:** Añadir sección "Artículos" o "Blog" con cards que enlacen a Dev.to.
```
Artículos
→ Card con título, fecha, tag tecnológico, enlace a Dev.to
→ Estado vacío con CTA: "Próximamente — sígueme en Dev.to"
```

---

### 7. Actualizar años de experiencia
**Problema:** El hero dice "+7 años" pero el plan documenta 8 años de experiencia y el "Sobre mí" dice "más de siete años".  
**Solución:** Unificar a **"+8 años"** en hero y en el texto de "Sobre mí".

---

### 8. Dominio y URL
**Acción pendiente:** Una vez registrado `elmedina.dev` en Cloudflare, apuntar el dominio al GitHub Pages del repositorio actual.  
**Pasos:**
- En Cloudflare → DNS → añadir registro CNAME: `elmedina.dev` → `leomedinadev.github.io`
- En el repositorio de GitHub → Settings → Pages → Custom domain → `elmedina.dev`
- Activar "Enforce HTTPS" en GitHub Pages
- Actualizar el `base href` en Angular si es necesario (`angular.json`)

---

### 9. Actualizar footer
**Problema:** El footer dice `2026 leomedinadev. Casi todos los derechos reservados`.  
**Solución:**
```
© 2026 Leonardo Medina · elmedina.dev
```
El "casi todos los derechos reservados" puede quedarse si va con tu estilo — es un guiño divertido. Decidir si es el tono que quieres para el portafolio dirigido a reclutadores.

---

### 10. Email de contacto actualizado
**Acción pendiente:** Una vez configurado el correo en Cloudflare Email Routing, actualizar todos los enlaces de contacto del sitio para usar `leo@elmedina.dev` en lugar de cualquier correo personal anterior.

---

## Mejoras opcionales (Fase 1 avanzada)

### 11. Sección de idiomas
Añadir indicador de nivel de idiomas — especialmente inglés, ya que los clientes globales en Upwork lo valorarán.
```
Español — Nativo
Inglés  — Avanzado (lectura/escritura técnica)
```

### 12. Certificaciones o cursos relevantes
Si tienes certificaciones de AWS, Google Cloud, o similares, añadir una sección pequeña. Genera credibilidad extra para el segmento de clientes enterprise.

### 13. Meta tags para SEO
Añadir en `index.html`:
```html
<meta name="description" content="Leonardo Medina — Full Stack Developer con +8 años de experiencia en APIs, backend y productos digitales. Ecuador." />
<meta property="og:title" content="Leonardo Medina | Full Stack Developer" />
<meta property="og:image" content="https://elmedina.dev/assets/og-image.png" />
```

### 14. Analytics
Añadir **Plausible** (privacidad-friendly, $9/mes) o **Google Analytics** (gratis) para saber cuántas personas visitan el portafolio y desde dónde llegan.

---

## Checklist de publicación

| # | Mejora | Prioridad | Estado | Observación |
|---|--------|-----------|--------|-------------|
| 1 | Cambiar título de pestaña | 🔴 Crítica | ✅ Realizado | |
| 2 | Foto profesional real | 🔴 Crítica |  ✔ Omitido | Se omite por ahora, no es tan relevante para el dueño del portafolio. | 
| 3 | Botón "Descargar CV" (versión pública sin teléfono) | 🔴 Crítica | ✔ Omitido | Pendiente subir el pdf correcto. Se oculta boton, por ahora no se considera relevante. |
| 4 | Corregir "Estamos" → "Estoy" | 🔴 Crítica | ✅ Realizado | |
| 5 | Formulario de contacto funcional | 🔴 Crítica | ✅ Realizado | Pendiente verificar/actualizar el correo. (Se deja correo leo7medina@gmail.com) |
| 6 | Sección Blog/Artículos | 🟡 Importante | ✅ Realizado | Página `/blog` con lista y detalle por slug. Enlace en navbar. |
| 7 | Actualizar años de experiencia a +8 | 🟡 Importante | ✅ Realizado | |
| 8 | Conectar dominio elmedina.dev | 🟡 Importante | ⬜ Pendiente | |
| 9 | Actualizar footer | 🟡 Importante | ✅ Realizado | |
| 10 | Email leo@elmedina.dev en contacto | 🟡 Importante | ✅ Realizado | |
| 11 | Sección de idiomas | 🟢 Opcional | ⬜ Pendiente | |
| 12 | Certificaciones | 🟢 Opcional | ⬜ Pendiente | |
| 13 | Meta tags SEO | 🟢 Opcional | ✅ Realizado | |
| 14 | Analytics (Plausible/GA) | 🟢 Opcional | ⬜ Pendiente | |

---

## Lo que ya funciona bien — no tocar

- Diseño dark theme limpio y profesional ✓
- Navegación clara con scroll suave ✓
- Sección de Experiencia laboral con descripciones reales ✓
- Stack tecnológico visual con logos ✓
- Badge "Disponible para trabajar" ✓
- Toggle de modo oscuro/claro ✓
- Bio en "Sobre mí" bien redactada y específica ✓
- Links a LinkedIn y GitHub en el hero ✓

---

*← Ver plan completo en [`01_fase1_leotech.md`](./01_fase1_leotech.md) · Ejecución en [`personal_branding_execution.html`](./personal_branding_execution.html)*
