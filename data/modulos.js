const modulosData = [
  {
    id: 1,
    nombre: "Módulo 3.0: Orientación de estudiantes al proceso educativo del tercer año",
    docente: "Javier Mineros",
    resumen: "Inducción al tercer año, creación de equipos de trabajo y recopilación de portafolios y códigos QR institucionales.",
    herramientas: ["Portafolio digital", "Códigos QR", "Lineamientos generales"],
    quizzes: [
      {
        pregunta: "¿Cuál fue una de las actividades iniciales clave requeridas en este módulo 3.0?",
        opciones: [
          "La creación de tu equipo de trabajo y el portafolio del módulo",
          "Desarrollar consultas SQL complejas",
          "Configurar servidores Apache con XAMPP"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 2,
    nombre: "Módulo 3.2: Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Javier Mineros",
    resumen: "Diagnóstico, optimización y aseguramiento de la infraestructura lógica y física de sistemas informáticos operativos.",
    herramientas: ["Sistemas Operativos", "Hardware", "Bitácoras de soporte"],
    quizzes: [
      {
        pregunta: "¿Qué busca el mantenimiento y aseguramiento de la operación informática?",
        opciones: [
          "Garantizar la estabilidad operativa del sistema informático",
          "Diseñar interfaces gráficas en Figma",
          "Crear diapositivas publicitarias"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 3,
    nombre: "Módulo 3.3: Administración de Bases de Datos",
    docente: "Arcides Canales",
    resumen: "Gestión de bases de datos, actividades de Power BI, fases de planificación y ejecución de dashboards y proyectos finales.",
    herramientas: ["Power BI", "SQL", "Dashboards", "XAMPP", "phpMyAdmin"],
    quizzes: [
      {
        pregunta: "¿Qué herramienta analítica se implementó de manera destacada en este módulo de bases de datos?",
        opciones: [
          "Power BI para la creación de dashboards y reportes",
          "Editores de video profesional",
          "Programas de diseño de modas"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 4,
    nombre: "Módulo 3.4: Elaboración de documentación de Sistemas informáticos",
    docente: "Arcides Canales",
    resumen: "Desarrollo de guías en Python, arquitectura de software dividida en fases (Fase 1 a Fase 7), y redacción de manuales y documentos finales.",
    herramientas: ["Python", "Markdown", "Arquitectura de Software", "Documentación técnica"],
    quizzes: [
      {
        pregunta: "¿Qué lenguaje y enfoque principal se utilizó para las guías prácticas iniciales de este módulo?",
        opciones: [
          "Python para crear aplicaciones y guías individuales",
          "Ensamblaje de circuitos de alta tensión",
          "Edición de audio multicanal"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 5,
    nombre: "Módulo 3.8: Proyecto innovador de Desarrollo de Software",
    docente: "Javier Mineros",
    resumen: "Desarrollo integral de proyectos de software, manuales de sistema, avances con entregas parciales, exposiciones y defensa de la aplicación final.",
    herramientas: ["React Native", "PHP", "C#", "Supabase", "Git / GitHub"],
    quizzes: [
      {
        pregunta: "¿Qué entregables formaron parte del proceso de evaluación de este proyecto innovador?",
        opciones: [
          "Avances de proyecto, manuales de sistema, exposiciones y entrega final",
          "Exámenes exclusivos de memorización histórica",
          "Pruebas de redacción literaria"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 6,
    nombre: "Modulo 4: Puesta en marcha de la empresa en asociatividad cooperativa",
    docente: "Arcides Canales",
    resumen: "Desarrollo de proyectos empresariales y técnicos: Proyecto Augustine-Arduino, WinForms y ASPX, desarrollo en .NET MAUI y tienda virtual con PrestaShop.",
    herramientas: ["Arduino", "WinForms", "ASPX", ".NET MAUI", "PrestaShop"],
    quizzes: [
      {
        pregunta: "¿Qué plataforma de e-commerce se trabajó de forma individual en este módulo?",
        opciones: [
          "PrestaShop",
          "WordPress básico",
          "Excel avanzado"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 7,
    nombre: "Modulo 3: Conversación de inglés sobre mantenimiento de sistemas informáticos",
    docente: "Arcides Canales",
    resumen: "Prácticas de bases de datos conectadas con IA y gestión de metodologías ágiles orientadas al mantenimiento informático.",
    herramientas: ["CRUD con IA", "Scrum", "Inglés técnico"],
    quizzes: [
      {
        pregunta: "¿Qué metodología ágil se abordó en la Práctica 10 de este módulo?",
        opciones: [
          "Scrum",
          "Cascada tradicional",
          "Lego Technic"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 8,
    nombre: "Modulo 2: Desarrollo de componentes para dispositivos móviles",
    docente: "Arcides Canales",
    resumen: "Creación y autoevaluación de prácticas móviles avanzadas utilizando tecnologías multiplataforma orientadas a dispositivos móviles.",
    herramientas: [".NET MAUI", "Prácticas móviles", "Componentes UI"],
    quizzes: [
      {
        pregunta: "¿Qué tecnología multiplataforma se empleó de manera reiterada en las prácticas (Práctica 7, 8, 9)?",
        opciones: [
          ".NET MAUI",
          "Ensamblador",
          "COBOL"
        ],
        correcta: 0
      }
    ]
  },
  {
    id: 9,
    nombre: "BTVDS 3.1: Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Arcides Canales",
    resumen: "Programación Orientada a Objetos (POO), herencia, polimorfismo, acceso a datos, Code First con ASP.NET Razor y conexiones con interfaces gráficas.",
    herramientas: ["POO", "C#", "ASP.NET Razor", "Code First", "SQL Server"],
    quizzes: [
      {
        pregunta: "¿Qué conceptos fundamentales de la programación se evaluaron en las prácticas iniciales (Práctica 1 y 2)?",
        opciones: [
          "POO, Herencia y Polimorfismo",
          "Diseño de modas y patronaje",
          "Mantenimiento de redes físicas"
        ],
        correcta: 0
      }
    ]
  }
];
