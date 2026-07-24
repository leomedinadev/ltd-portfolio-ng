# Especificaciones Técnicas — hotfix/improvements
> Basado en: [`personal_portfolio_improvements.md`](./personal_portfolio_improvements.md)  
> Rama: `hotfix/improvements`  
> Fecha: Mayo 2026

---

## Alcance

Este documento traduce cada mejora del documento de producto en cambios concretos de código: archivo, línea y valor exacto a modificar.

---

## 🔴 Mejoras Críticas

---

### SPEC-01 · Título de pestaña del navegador

**Archivo:** `src/index.html`

| Estado actual | Estado deseado |
|---|---|
| `<title>LtdPorfolioNg</title>` | `<title>Leonardo Medina \| Full Stack Developer</title>` |

**Cambio:**
```html
<!-- Antes -->
<title>LtdPorfolioNg</title>

<!-- Después -->
<title>Leonardo Medina | Full Stack Developer</title>
```

**Nota:** El `AppComponent` también llama a `titleService.setTitle()` en `src/app/app.ts`. Actualizar el signal `$title` para que coincida:
```ts
// Antes
protected readonly $title = signal('Portafolio Leo Tech Dev');

// Después
protected readonly $title = signal('Leonardo Medina | Full Stack Developer');
```

---

### SPEC-02 · Foto de perfil profesional

**Archivo afectado:** `public/` (asset) + `src/app/pages/porfolio/hero/hero.html` (referencia ya correcta)

**Acción:** Reemplazar el archivo `public/leo1.png` con una foto real profesional manteniendo el mismo nombre de archivo (`leo1.png`) para no tener que tocar el template.

- Formato recomendado: `.webp` o `.png`
- Dimensiones mínimas: `400×400 px` (la imagen se renderiza en un círculo de `192×192 px` en mobile, `260×260 px` en desktop)
- Si se cambia el nombre del archivo, actualizar `ngSrc="leo1.png"` en `hero.html` línea 8

**Estado:** ⚠️ Requiere asset externo — no es cambio de código.

---

### SPEC-03 · Botón "Descargar CV" en el hero

**Archivos:**
- `src/app/commons/constants.ts` — añadir URL del CV
- `src/app/pages/porfolio/hero/hero.html` — añadir botón
- `public/` — subir el PDF del CV público

**1. Agregar constante en `constants.ts`:**
```ts
LINKS: {
  GITHUB: 'https://github.com/leomedinadev',
  LINKEDIN: 'https://www.linkedin.com/in/leonardo-medina-arias-305484164',
  CV: '/leonardo-medina-cv-2026.pdf',   // ← añadir
},
```

**2. Añadir botón en `hero.html` dentro del `<nav>` (después del botón Contáctame):**
```html
<social-pill [url]="leoDev.LINKS.CV" [download]="true">
  <!-- ícono de descarga (inline SVG o componente) -->
  Descargar CV
</social-pill>
```

> `social-pill` ya acepta `[href]` vía `[url]`. Verificar si `SocialPill` soporta el atributo `download` — si no, añadir `@Input() download = false` y enlazarlo en el template del componente.

**3. Archivo PDF:**
- Nombre: `leonardo-medina-cv-2026.pdf`
- Ubicación: `public/leonardo-medina-cv-2026.pdf`
- Versión: **pública** (sin teléfono, con `leo@elmedina.dev`)

---

### SPEC-04 · Corregir texto placeholder de Proyectos

**Archivo:** `src/app/pages/porfolio/projects/projects.html`

| Estado actual | Estado deseado |
|---|---|
| `Estamos construyendo algo increíble` | `Estoy construyendo algo increíble` |

**Cambio:**
```html
<!-- Antes (línea 15) -->
<h1>Estamos construyendo algo increíble</h1>
<p>
  Nuevos proyectos de <strong>software</strong> están en desarrollo.
  Muy pronto tendrás novedades.
</p>

<!-- Después -->
<h1>Estoy construyendo algo increíble</h1>
<p>
  Próximamente. Estoy trabajando en mis primeros proyectos OSS — vuelve pronto.
</p>
```

---

### SPEC-05 · Formulario / enlace de contacto funcional

**Archivo:** `src/app/pages/porfolio/hero/hero.html` y `src/app/components/footer/footer.html`

**Acción mínima (sin backend):** Cambiar el `mailto:` para que use el correo destino correcto en ambos archivos.

En `hero.html` (línea 35):
```html
<!-- Antes -->
<social-pill [url]="'mailto:' + leoDev.EMAIL">

<!-- El EMAIL en constants.ts actualmente es leo_medina14@hotmail.com -->
<!-- Una vez configurado leo@elmedina.dev, actualizar en constants.ts: -->
EMAIL: 'leo@elmedina.dev',
```

En `footer.html` (línea 13):
```html
<!-- Antes -->
<a id="contacto" href="mailto:leo_medina14@hotmail.com" class="hover:underline">Contacto</a>

<!-- Después -->
<a id="contacto" href="mailto:leo@elmedina.dev" class="hover:underline">Contacto</a>
```

> **Opción avanzada:** Integrar Formspree — crear cuenta en `formspree.io`, obtener el endpoint del formulario y reemplazar el `mailto:` con un `<form action="https://formspree.io/f/{id}" method="POST">`. Requiere crear un componente `ContactForm` nuevo.

---

## 🟡 Mejoras Importantes

---

### SPEC-06 · Página Blog / Artículos (con routing)

**Objetivo:** Blog como página independiente accesible desde el navbar — no como sección inline del home. Al dar click en un artículo se navega a una subpágina de detalle.

---

#### Cambios en el Navbar

**Archivo:** `src/app/components/header/header.html` (o el componente de navegación actual)

Añadir enlace "Blog" en el navbar:
```html
<a routerLink="/blog" routerLinkActive="active">Blog</a>
```

---

#### Routing

**Archivo:** `src/app/app.routes.ts`

```ts
{
  path: 'blog',
  loadComponent: () => import('./pages/blog/blog-list/blog-list').then(m => m.BlogListComponent),
},
{
  path: 'blog/:slug',
  loadComponent: () => import('./pages/blog/blog-detail/blog-detail').then(m => m.BlogDetailComponent),
},
```

---

#### Página de lista — `blog-list`

**Archivos a crear:**
- `src/app/pages/blog/blog-list/blog-list.ts`
- `src/app/pages/blog/blog-list/blog-list.html`
- `src/app/pages/blog/blog-list/blog-list.scss`

Muestra cards con resumen de cada artículo. Al hacer click navega a `/blog/:slug`.

**Card mínima:**
```html
@for (article of articles; track article.slug) {
  <a [routerLink]="['/blog', article.slug]">
    <span>{{ article.tag }}</span>
    <h3>{{ article.title }}</h3>
    <p>{{ article.summary }}</p>
    <time>{{ article.date }}</time>
  </a>
}
```

**Estado vacío:**
```html
@if (articles.length === 0) {
  <p>Próximamente — sígueme en <a [href]="leoDev.LINKS.DEVTO" target="_blank">Dev.to</a></p>
}
```

---

#### Página de detalle — `blog-detail`

**Archivos a crear:**
- `src/app/pages/blog/blog-detail/blog-detail.ts`
- `src/app/pages/blog/blog-detail/blog-detail.html`
- `src/app/pages/blog/blog-detail/blog-detail.scss`

Lee el `:slug` de la ruta con `ActivatedRoute`, busca el artículo en `ARTICLES` y renderiza el contenido completo.

```ts
readonly article = computed(() => {
  const slug = this.route.snapshot.paramMap.get('slug');
  return Constants.PROFILE_DEV.ARTICLES.find(a => a.slug === slug) ?? null;
});
```

---

#### Modelo de datos en `constants.ts`

Ampliar el tipo de `ARTICLES` para soportar `slug`, `summary` y `content`:

```ts
ARTICLES: [
  // vacío por ahora
] as {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  content: string;   // HTML o Markdown renderizado
  url: string;       // enlace externo Dev.to (opcional)
}[],
```

---

#### Quitar sección Blog del home

**Archivo:** `src/app/app.html` (o `porfolio.html`)

Eliminar `<app-blog>` del template principal — el blog vive únicamente en su propia ruta `/blog`.

---

### SPEC-07 · Actualizar años de experiencia a +8

**Archivo:** `src/app/commons/constants.ts`

| Ubicación | Estado actual | Estado deseado |
|---|---|---|
| `DESCRIPTION` (hero) | `+7 años de experiencia` | `+8 años de experiencia` |
| `DESCRIPTION2` (sobre mí) | `más de siete años` (si existe) | `más de ocho años` |

**Cambio en `constants.ts`:**
```ts
// Antes
DESCRIPTION: `+7 años de experiencia. <strong> Software Developer Full Stack</strong>...`,

// Después
DESCRIPTION: `+8 años de experiencia. <strong> Software Developer Full Stack</strong>...`,
```

---

### SPEC-08 · Conectar dominio elmedina.dev

**No es cambio de código Angular** — es configuración de infraestructura:

1. **Cloudflare DNS:** Añadir registro `CNAME elmedina.dev → leomedinadev.github.io`
2. **GitHub Pages:** Settings → Pages → Custom domain → `elmedina.dev` → activar "Enforce HTTPS"
3. **Archivo CNAME:** Crear `public/CNAME` con contenido:
   ```
   elmedina.dev
   ```
   (angular-cli-ghpages lo incluirá automáticamente en el deploy)
4. **`angular.json`:** El `base-href` actual es `/ltd-porfolio-ng/`. Con dominio propio cambia a `/`:
   ```json
   "build:pro": "ng build --configuration=production --base-href /"
   ```
   Y en `package.json` actualizar el script `build:pro`.

---

### SPEC-09 · Actualizar footer

**Archivo:** `src/app/components/footer/footer.html`

```html
<!-- Antes (línea 4-6) -->
<span class="text-sm text-center text-zinc-800/90 dark:text-zinc-200/90">
  {{currentYear}}
  <a href="https://github.com/leomedinadev/" class="hover:underline">leomedinadev</a>. Casi
  todos los derechos reservados
</span>

<!-- Después -->
<span class="text-sm text-center text-zinc-800/90 dark:text-zinc-200/90">
  © {{currentYear}} Leonardo Medina · elmedina.dev. Casi todos los derechos reservados.
</span>
```

---

### SPEC-10 · Email de contacto actualizado

**Condición:** Requiere que `leo@elmedina.dev` esté configurado en Cloudflare Email Routing.

**Archivos a actualizar:**
- `src/app/commons/constants.ts` → `EMAIL: 'leo@elmedina.dev'`
- `src/app/components/footer/footer.html` línea 13 → `href="mailto:leo@elmedina.dev"`

> El hero usa `leoDev.EMAIL` desde constants, así que un solo cambio en constants actualiza el hero. El footer tiene el email hardcodeado — corregir también allí.

---

## 🟢 Mejoras Opcionales

---

### SPEC-13 · Meta tags SEO

**Archivo:** `src/index.html`

Añadir dentro de `<head>`:
```html
<meta name="description" content="Leonardo Medina — Full Stack Developer con +8 años de experiencia en APIs, backend y productos digitales. Ecuador." />
<meta property="og:title" content="Leonardo Medina | Full Stack Developer" />
<meta property="og:description" content="Full Stack Developer especializado en Angular, Spring Boot, NestJS y AWS. Ecuador." />
<meta property="og:image" content="https://elmedina.dev/og-image.png" />
<meta property="og:url" content="https://elmedina.dev" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Checklist de implementación

| SPEC | Descripción | Prioridad | Archivos clave |
|------|-------------|-----------|----------------|
| SPEC-01 | Título de pestaña | 🔴 Crítica | `index.html`, `app.ts` |
| SPEC-02 | Foto profesional | 🔴 Crítica | `public/leo1.png` |
| SPEC-03 | Botón Descargar CV | 🔴 Crítica | `constants.ts`, `hero.html`, `public/*.pdf` |
| SPEC-04 | Texto "Estoy" en proyectos | 🔴 Crítica | `projects.html` |
| SPEC-05 | Email de contacto funcional | 🔴 Crítica | `constants.ts`, `footer.html` |
| SPEC-06 | Sección Blog/Artículos | 🟡 Importante | `pages/blog/`, `app.routes.ts`, `navbar` |
| SPEC-07 | +8 años de experiencia | 🟡 Importante | `constants.ts` |
| SPEC-08 | Dominio elmedina.dev | 🟡 Importante | `public/CNAME`, `angular.json` |
| SPEC-09 | Footer actualizado | 🟡 Importante | `footer.html` |
| SPEC-10 | Email leo@elmedina.dev | 🟡 Importante | `constants.ts`, `footer.html` |
| SPEC-13 | Meta tags SEO | 🟢 Opcional | `index.html` |
