# DATOS PARA LA WEB DE LA AUXILIAR

colores:
	--auxiliar1: rgb(223, 172, 18);
	--auxiliar2: rgb(0, 129, 74);
	--marcado: rgb(rgb(0, 204, 255));

estilos globales para la barra de scroll

.dil-barra-desplazamiento{

/* Estilos de la barra de desplazamiento */
scrollbar-width: thin; /* Ancho de la barra de desplazamiento */
scrollbar-color: #a92020 #0feb03; /* Color de la barra y el fondo de la barra */
}

/* Estilos para la barra de desplazamiento */
.dil-barra-desplazamiento::-webkit-scrollbar {
width: 12px; /* Ancho de la barra de desplazamiento */
}

.dil-barra-desplazamiento::-webkit-scrollbar-thumb {
background-color: var(--auxiliar1); /* Color de la barra de desplazamiento */
}

.dil-barra-desplazamiento::-webkit-scrollbar-track {
background-color: black;
}

.light .dil-barra-desplazamiento::-webkit-scrollbar-thumb {
background-color: var(--auxiliar2); /* Color de la barra de desplazamiento */
}

.light .dil-barra-desplazamiento::-webkit-scrollbar-track {
	background-color: white;
	}