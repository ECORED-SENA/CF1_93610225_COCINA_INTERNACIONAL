<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normas, herramientas y tradiciones de la cocina internacional',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Reconocer las normas de higiene y seguridad en la cocina, así como la identificación de herramientas y tradiciones culinarias de diferentes culturas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la forma correcta de mantener la higiene al probar alimentos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          titulo_aprobado: '¡BUEN TRABAJO!',
          titulo_reprobado: 'VUELVA A INTENTARLO',
          opciones: [
            {
              id: 'a',
              texto: 'Usar la misma cuchara para toda la preparación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar los dedos para probar directamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Usar una cuchara limpia y lavarla inmediatamente después.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Probar con cualquier utensilio disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué utensilio es típico para preparar <em>fondues</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crepera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Caquelón.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Laminadora de pasta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esterilla de <em>sushi</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué material es común para una esterilla de <em>sushi</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plástico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bambú.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Metal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Madera maciza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la norma para las uñas en la cocina?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pueden estar largas y con esmalte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deben estar limpias y cortas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo se requiere que estén limpias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No importa el estado de las uñas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta sirve para triturar alimentos en la cocina mexicana?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasapuré.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Molcajete.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Wok.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Donabe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué norma es fundamental al usar equipos eléctricos en la cocina?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar usarlos durante la noche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usarlos con las manos mojadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tener las manos secas antes de usarlos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limpiarlos solo después de su uso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué utensilio japonés se utiliza para preparar arroz de <em>sushi</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crepera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Hangiri</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Wok</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Molcajete.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué país es conocido por el uso de tajines para cocinar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Argentina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'México.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Marruecos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Japón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Es importante que el cabello esté completamente recogido al cocinar.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Los cuchillos deben mantenerse desafilados para evitar accidentes.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué utensilio se utiliza para preparar purés y salsas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Molcajete.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tajín marroquí.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pasapuré.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Esterilla de <em>sushi</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué norma de seguridad es esencial al trabajar cerca de fuego?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar ropa ajustada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener las toallas alejadas del fuego.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cortar alimentos lejos de la llama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dejar utensilios cerca del borde de la mesa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué herramienta es usada para formar bolas de frutas o vegetales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hangiri.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuchara Parisien.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Laminadora de pasta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Molcajete.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué característica distingue a la cocina mexicana?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de especias como comino y pimienta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Platos con sabores fuertes y picantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Preparación al vapor de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo de ingredientes prehispánicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué elemento debe incluir una cocina para cumplir con las medidas de emergencia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un congelador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extintores y un botiquín.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Llamas altas para cocinar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Laminadoras y tajines.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
