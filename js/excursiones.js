let excursiones=[
    {
        id:1,
        nombre:"Circuito chico",
        descripcion:"Es el recorrido más tradicional de Bariloche, un paseo atrapante en el que la ciudad, los bosques, los lagos y las montañas se integran en un solo paisaje",
        precio: 10000,
        destino:"Bariloche",
        dificultad:"Baja",
        traslado: true,
        duracion:"4hs",
        guia: true,
        cupo:30,
        img: "../img/circuitoChico.webp"

    },
    {
        id:2,
        nombre:"Ruta de los 7 lagos",
        descripcion:"La Ruta de los 7 Lagos es un pintoresco recorrido que conecta las localidades de San Martín de los Andes y Villa La Angostura, en la provincia de Neuquén, Argentina",
        precio: 30000,
        destino:"Bariloche",
        dificultad:"Baja",
        traslado:true,
        duracion:"10hs",
        guia: false,
        cupo:25,
        img: "../img/ruta7Lagos.png"
    },
    {
        id:3,
        nombre:"Paseo en Barco a isla la Victoria y bosque de Arrayanes",
        descripcion:"El paseo en barco a la Isla Victoria y al Bosque de Arrayanes es una experiencia fascinante que te sumergirá en la belleza natural de la región de los lagos en Argentina, específicamente en el Parque Nacional Nahuel Huapi.",
        precio:45000,
        destino:"Bariloche",
        dificultad:"Baja",
        traslado: false,
        duracion:"5hs",
        guia: true,
        cupo:40,
        img: "../img/islaLaVictoria.webp"

    },
    {
        id:4,
        nombre:"Cataratas lado Argentino",
        descripcion:"Visitarás el lado argentino de las Cataratas del Iguazú y sentirás de cerca la intensidad de la naturaleza.",
        precio: 21000,
        destino:"Puerto Iguazu,Misiones",
        dificultad:"Media",
        traslado: true,
        duracion:"10hs",
        guia: false,
        cupo:30,
        img: "../img/cataratasLA.webp"

    },
    {
        id:5,
        nombre:"Ruinas de San Ignacio",
        descripcion:"Explorarás ruinas del siglo XVII en el pueblo de San Ignacio y te sorprenderás al explorar cuevas llenas de piedras preciosas",
        precio:37000,
        destino:"Puerto Iguazu,Misiones",
        dificultad:"Baja",
        traslado: false,
        duracion:"12hs",
        guia: true,
        cupo:30,
        img: "../img/ruinasSanIgnacio.webp"

    },
    {
        id:6,
        nombre:"Excursion a Minas de Wanda",
        descripcion:"La excursión a las Minas de Wanda ofrece a los visitantes la oportunidad de explorar un fascinante sitio arqueológico y geológico en la provincia de Misiones, Argentina",
        precio:15000,
        destino:"Puerto Iguazu,Misiones",
        dificultad:"Media",
        traslado: false,
        duracion:"10hs",
        guia: true,
        cupo:15,
        img: "../img/MinasWanda.webp"
        

    },
    {
        id:7,
        nombre:"Tour de Alta Montaña",
        descripcion:"El tour de alta montaña en Mendoza, Argentina, ofrece una experiencia espectacular que te lleva a través de los impresionantes paisajes de los Andes. ",
        precio:28000,
        destino:"Mendoza",
        dificultad:"Media",
        traslado: true,
        duracion:"10hs",
        guia: true,
        cupo:25,
        img: "../img/tourAltaMontaña.webp"
        

    },
    {
        id:8,
        nombre:"Visita a Bodegas",
        descripcion:"Mendoza es una de las capitales mundiales del vino, es por esto que los invitamos a conocer y experimentar como es el proceso de producción y elaboración de vinos reconocidos a nivel mundial. ",
        precio:39000,
        destino:"Mendoza",
        dificultad:"Baja",
        traslado: true,
        duracion:"5hs",
        guia: true,
        cupo:20,
        img: "../img/visitaABodegas.webp"

    },
    {
        id:9,
        nombre:"Excursion a Valle de Uco",
        descripcion:"Visitarás el Valle de Uco, famoso por los impresionantes paisajes del Cordón del Plata y sus premiadas bodegas. Recorra esta región, formada por colinas y volcanes de más de 6000 metros de altura.",
        precio:29000,
        destino:"Mendoza",
        dificultad:"",
        traslado: true,
        duracion:"10hs",
        guia: true,
        cupo:30,
        img: "../img/ValleDeUco.jpg"

    },
    {
        id:10,
        nombre:"Cascadas de Copina",
        descripcion:"",
        precio:9000,
        destino:"Sierras de Cordoba",
        dificultad:"Baja",
        traslado: true,
        duracion:"10hs",
        guia: true,
        cupo:15,
        img: "../img/copina.webp"

    },
    {
        id:11,
        nombre:"Cerro Champaqui",
        descripcion:"El Cerro Champaquí, ubicado en la provincia de Córdoba, es el pico más alto de las Sierras y ofrece una emocionante experiencia de trekking para los amantes de la naturaleza y los aficionados a las caminatas.",
        precio:45000,
        destino:"Sierras de Cordoba",
        dificultad:"Alta",
        traslado: false,
        duracion:"3dias",
        guia: true,
        cupo:15,
        img: "../img/CerroChampaqui.jpg"

    },
    {
        id:12,
        nombre:"Los Gigantes, Cerro Mogote",
        descripcion:"Con una altura de 2370 metros sobre el nivel del mar, el Cerro Mogote es considerado el más alto del macizo Los Gigantes. Una maravilla natural ubicada al extremo norte de Sierras Grandes, todo un paraíso para los amantes del trekking.",
        precio:12000,
        destino:"Sierras de Cordoba",
        dificultad:"Media",
        traslado: true,
        duracion:"12hs",
        guia: true,
        cupo:15,
        img: "../img/losGigantes.jpg"

    },
    {
        id:13,
        nombre:"Maravillas del Rio Yuspe",
        descripcion:"Aguas bajo de los Gigantes, el hermoso Río Yuspe toma cuerpo y atraviesa la montaña durante varios kilometros, formando recovecos, playitas de arena, cajones y ollas sumamente bellas, exclusivas y poco conocidas!",
        precio:9000,
        destino:"Sierras de Cordoba",
        dificultad:"Baja",
        traslado: false,
        duracion:"10hs",
        guia: true,
        cupo:10,
        img: "../img/rioYuspe.jpg"

    }
];