export default {
  global: {
    Name: 'Equipos, utensilios y herramientas de la cocina internacional',
    Description:
      'Las normas de higiene y seguridad en la cocina aseguran la limpieza, el orden y la prevención de accidentes. Destacan prácticas como lavarse las manos, usar ropa ajustada y mantener áreas limpias. Herramientas internacionales incluyen el caquelón, tajín y molcajete, representando tradiciones culinarias. La cocina internacional resalta sabores únicos de países como Argentina, España, Turquía y México.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normas de higiene',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Normas de seguridad',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas y equipos de cocina internacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cocina internacional',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/93610225_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normas de higiene',
      referencia:
        'Rimac Seguros. (s. f.). Ergonomía física. Estándares y requisitos legales nacional e internacional.',
      tipo: 'Artículo',
      link:
        'https://prevencionlaboralrimac.com/Cms_Data/Contents/RimacDataBase/Media/fasciculo-prevencion/FASC-8588152601892167690.pdf',
    },
    {
      tema: 'Herramientas y equipos de cocina internacional',
      referencia:
        'Imaginativa Perú. (2016). Equipamiento de cocina profesional. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=D0Xte3DgEx0&ab_channel=ImaginativaPer%C3%BA',
    },
    {
      tema: 'Cocina internacional',
      referencia: 'Bàguena, N. (2007). Las religiones y la cocina.',
      tipo: 'Artículo',
      link:
        'https://www.afuegolento.com/articulo/las-religiones-la-cocina/354/',
    },
    {
      tema: 'Cocina internacional',
      referencia:
        'Requena, A. (2008). En clave mediterránea. Universidad Internacional del Mar.',
      tipo: 'Documento',
      link: 'http://www.um.es/LEQ/MAR/unico.pdf',
    },
    {
      tema: 'Cocina internacional',
      referencia:
        'GialloZafferano. (2018, 5 de marzo). Risotto alla milanese - Ricetta originale [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9bEepqRKtJU',
    },
    {
      tema: 'Cocina internacional',
      referencia: 'Tasty. (2017, 7 de marzo). Ratatouille [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vJlH9ZIYy4I',
    },
    {
      tema: 'Cocina internacional',
      referencia:
        'CocinaLab. (2019, 15 de junio). Ceviche de pescado peruano - Receta tradicional [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rt8TnS-jQy4',
    },
  ],
  glosario: [
    {
      termino: 'Cocina internacional',
      significado:
        'fusión de tradiciones, ingredientes y técnicas culinarias de diversas culturas.',
    },
    {
      termino: 'Esterilla de <em>sushi</em>',
      significado:
        'alfombrilla de bambú utilizada para formar rollos de <em>sushi</em>.',
    },
    {
      termino: '<em>Fondue</em>',
      significado:
        'plato tradicional suizo preparado en un caquelón con queso derretido.',
    },
    {
      termino: '<em>Hangiri</em>',
      significado:
        'utensilio japonés de madera para mezclar y enfriar arroz de <em>sushi</em>.',
    },
    {
      termino: 'Laminadora',
      significado: 'máquina para extender y cortar masa de pasta fresca.',
    },
    {
      termino: 'Lavado de manos',
      significado:
        'acción de limpiar las manos con agua y jabón para eliminar suciedad y gérmenes.',
    },
    {
      termino: 'Molcajete',
      significado:
        'mortero mexicano usado para triturar alimentos como especias y salsas.',
    },
    {
      termino: 'Normas de higiene',
      significado:
        'reglas para mantener la limpieza y evitar contaminaciones en la cocina.',
    },
    {
      termino: 'Normas de seguridad',
      significado:
        'recomendaciones para prevenir accidentes en el entorno de cocina.',
    },
    {
      termino: 'Tajín marroquí',
      significado:
        'utensilio de barro con tapa cónica para cocinar guisos del <em>Magreb</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Armendáriz, J. (2017). Seguridad e higiene en la manipulación de alimentos (3ª ed.). Ediciones Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Braun, D. (2015). Higiene en la cocina: Guía para evitar la contaminación de los alimentos. Larousse.',
      link: '',
    },
    {
      referencia:
        'Colhogar. (2021). Higiene alimentaria: 10 normas básicas de manipulación de alimentos.',
      link:
        'https://www.colhogar.com/es/higiene-y-salud/higiene-en-el-hogar/10-normas-basicas-de-manipulacion-de-alimentos/',
    },
    {
      referencia:
        'El País. (2025, 8 de febrero). Los utensilios y cacharros indispensables para los cocineros.',
      link:
        'https://elpais.com/gastronomia/2025-02-08/los-utensilios-y-cacharros-indispensables-para-los-cocineros.htmlelpais.com',
    },
    {
      referencia:
        'Electrolux Professional. (2022). 10 reglas de higiene en la cocina.',
      link:
        'https://www.electroluxprofessional.com/la/10-reglas-de-higiene-en-la-cocina/',
    },
    {
      referencia:
        'Go Red for Women. (2024). Equipo y utensilios de cocina esenciales.',
      link:
        'https://www.goredforwomen.org/es/healthy-living/healthy-eating/cooking-skills/meal-planning/essential-kitchen-equipment-and-utensils',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Oswaldo Acosta Romero ',
          cargo: 'Experto temático',
          centro:
            'Centro de Des​arrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raul Mosquera',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
