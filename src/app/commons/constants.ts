export const Constants = {
  PROFILE_DEV: {
    NAME: 'Leonardo Medina',
    DESCRIPTION: `+8 años de experiencia. <strong> Software Developer Full Stack</strong> de Ecuador 🇪🇨. Especializado en desarrollo de aplicaciones web.`,
    DESCRIPTION2: 'Soy un desarrollador <strong>Full Stack</strong> apasionado por crear soluciones tecnológicas innovadoras y escalables.\nTransformo ideas en proyectos reales con código limpio y eficiente, tanto en el diseño y arquitectura.',
    EMAIL: 'leo7medina@gmail.com',
    LINKS: {
      GITHUB: 'https://github.com/leomedinadev',
      LINKEDIN: 'https://www.linkedin.com/in/leonardo-medina-arias-305484164',
      CV: '/HEMOGRAMA-MANCHAS.pdf', // TODO: reemplazar con el CV real (leonardo-medina-cv-2026.pdf)
    },
    ARTICLES: [
      // {
      //   slug: 'migrando-monolito-microservicios-nestjs-aws',
      //   title: 'Migrando un monolito a microservicios con NestJS y AWS: lecciones aprendidas',
      //   date: 'Mayo 2026',
      //   tag: 'Backend',
      //   summary: 'Lecciones reales de una migración en producción: cómo dividimos un sistema monolítico del sector asegurador en microservicios usando NestJS, AWS y una estrategia incremental.',
      //   content: '<p>Contenido completo próximamente...</p>',
      //   url: 'https://dev.to/leomedinadev',
      // },
      // {
      //   slug: 'angular-signals-guia-practica',
      //   title: 'Angular Signals: guía práctica para dejar de pensar en RxJS para todo',
      //   date: 'Abril 2026',
      //   tag: 'Frontend',
      //   summary: 'Signals cambia la forma en que gestionamos el estado en Angular. Cuándo usarlos, cuándo no, y cómo conviven con Observables en proyectos reales.',
      //   content: '<p>Contenido completo próximamente...</p>',
      //   url: 'https://dev.to/leomedinadev',
      // },
      // {
      //   slug: 'nestjs-graphql-api-desde-cero',
      //   title: 'Construyendo una API GraphQL con NestJS desde cero: lo que nadie te cuenta',
      //   date: 'Marzo 2026',
      //   tag: 'Backend',
      //   summary: 'Una guía honesta sobre los puntos de dolor de GraphQL en NestJS: N+1, autenticación con guards, paginación cursor-based y testing de resolvers.',
      //   content: '<p>Contenido completo próximamente...</p>',
      //   url: 'https://dev.to/leomedinadev',
      // },
      // {
      //   slug: 'aws-lambda-cold-start-estrategias',
      //   title: 'Cold starts en AWS Lambda: estrategias reales para reducirlos en producción',
      //   date: 'Febrero 2026',
      //   tag: 'Cloud',
      //   summary: 'El cold start arruina la experiencia de usuario si no lo controlas. Revisamos Provisioned Concurrency, SnapStart para Java y opciones con Node.js y NestJS.',
      //   content: '<p>Contenido completo próximamente...</p>',
      //   url: 'https://dev.to/leomedinadev',
      // },
      // {
      //   slug: 'tailwind-css-componentes-sin-caos',
      //   title: 'Tailwind CSS en proyectos grandes: cómo mantener los componentes sin caos',
      //   date: 'Enero 2026',
      //   tag: 'Frontend',
      //   summary: 'Con Tailwind es fácil que los templates se vuelvan ilegibles. Patrones de organización, cuándo extraer componentes y cómo combinarlo bien con Angular.',
      //   content: '<p>Contenido completo próximamente...</p>',
      //   url: 'https://dev.to/leomedinadev',
      // },
      // {
      //   slug: 'spring-boot-oracle-migracion',
      //   title: 'Integrando Spring Boot con Oracle en una migración cloud: errores y soluciones',
      //   date: 'Diciembre 2025',
      //   tag: 'Backend',
      //   summary: 'Drivers, connection pools, queries con hints específicos de Oracle y los errores más raros que encontramos al mover una app Java hacia AWS RDS Oracle.',
      //   content: '<p>Contenido completo próximamente...</p>',
      //   url: 'https://dev.to/leomedinadev',
      // },
    ] as { slug: string; title: string; date: string; tag: string; summary: string; content: string; url: string }[],
    EXPERIENCE: [
      {
        date: "Actualmente...",
        title: "Full Stack Developer",
        company: "Clave Technologies",
        description:
          "Participación en la modernización de sistemas del sector asegurador, contribuyendo en la migración de un monolito hacia la nube de AWS y su integración con Oracle. " +
        "Además, he participado en iniciativas internas orientadas a la adopción de arquitecturas modernas basadas en microservicios, API's GraphQL y NestJS, fortaleciendo mi experiencia y ampliando mis conocimientos en tecnologías cloud.",
      },
      {
        date: "Junio 2018",
        title: "Consultor Técnico",
        company: "Kruger Corporation",
        description:
          "Participación en múltiples proyectos, desde su inicio hasta etapas avanzadas de desarrollo. " +
        "Involucrado en la creación e integración de sistemas utilizando Java (Spring Boot/Spring Framework), Angular (TypeScript) y Node.js. " +
        "Contribuí en soluciones orientadas a la gestión operativa y logística, incluyendo flujos de apertura de locales," +
        " recepción de mercadería, pedidos especiales, distribución de uniformes y notificaciones móviles.",
      },
      {
        date: "Abril 2017",
        title: "Desarrollador de Software",
        company: "PalmaPlast",
        // description: "Responsable de la creación y mantenibilidad del módulo de inventarios, y otros modulos de la plataforma, componentes y utilidades para la creación y desarrollo del aplicativo web."
        // description: "Durante mi etapa como desarrollador de software, tuve la oportunidad de diseñar y construir desde cero el módulo de inventarios de la plataforma, un componente clave para la gestión de los recursos de la empresa. Además, participé en el desarrollo de diversas funcionalidades que mejoraron procesos internos, como la proyección de pedidos, la bitácora de mantenimiento de maquinaria y la integración contable de las transacciones de inventario. Todo el desarrollo se realizó en PHP utilizando el framework Yii, priorizando siempre la escalabilidad y mantenibilidad del código."
        description: "Responsable del diseño, desarrollo y mantenimiento del módulo de inventarios desde su creación," +
        " así como de la implementación de otros módulos y utilidades dentro de la plataforma web. " +
        "Participé en la mejora de procesos internos mediante soluciones como la proyección de pedidos, " +
        "la bitácora de mantenimiento y la integración contable de transacciones de inventario, utilizando Yii PHP Framework ."
      }
    ],
    BUILDING_PROJECTS: true,
    PROJECTS: [
      {
        title: "1 SVGL - A beautiful library with SVG logos",
        description:
          "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        link: "https://svgl.vercel.app/",
        github: "https://github.com/pheralb/svgl",
        image: "pokemon_bolbasor.jpg",
        technologies: [],
        buttons: [
          {
            icon: "eye",
            text: "View Project",
            url: ""
          },
          {
            icon: "github",
            text: "Github",
            url: ""
          }
        ]
      },
      {
        title: "2 AdventJS - Retos de programación con JavaScript y TypeScript",
        description:
          "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
        link: "https://adventjs.dev",
        github: "https://github.com/pheralb/svgl",
        image: "charizard.jpg",
        technologies: ["Angular", "Tailwind CSS"],
        buttons: [
          {
            icon: "eye",
            text: "View Project",
            url: ""
          },
          {
            icon: "github",
            text: "Github",
            url: ""
          }
        ]
      },
      {
        title: "3 AdventJS - Retos de programación con JavaScript y TypeScript",
        description:
          "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
        link: "https://adventjs.dev",
        github: "https://github.com/pheralb/svgl",
        image: "picachu.jpg",
        technologies: [],
        buttons: [
          {
            icon: "eye",
            text: "View Project",
            url: ""
          },
          {
            icon: "github",
            text: "Github",
            url: ""
          }
        ]
      },
      {
        title: "4 AdventJS - Retos de programación con JavaScript y TypeScript",
        description:
          "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
        link: "https://adventjs.dev",
        github: "https://github.com/pheralb/svgl",
        image: "boxeadorPokemon.jpg",
        technologies: [],
        buttons: [
          {
            icon: "eye",
            text: "View Project",
            url: ""
          },
          {
            icon: "github",
            text: "Github",
            url: ""
          }
        ]
      },
    ],
  }
}
