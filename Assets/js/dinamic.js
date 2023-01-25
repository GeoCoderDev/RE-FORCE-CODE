// Texto dinamico, efecto de completar frase

const typed = new Typed(".texto-dnmc",{
    strings: ["Continua tu camino, enfrenta un desafio, inicia un recorrido, plantea un objetivo, emprende un viaje, persigue un sueño... y encontraras una dicha tan grande como el amanecer.",
    "Las acciones con repercusiones necesitan unificar parte del espacio y tiempo. - Steve Jobs.",
    "La singularidad de las cosas invaden la curiosidad humana asi como el desarrollo de nuevas irregularidades en el tiempo y el espacio. - Yod.",
    "Pero jamas, aunque intenten traer una realidad esta sera sobrescrita o separada de la original - Robin Williams."],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 3500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
