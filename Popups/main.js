
function abrir_ventana()
{
    window.open("https://www.pinterest.es/");
}

function parar_abrir()
{
    clearTimeout(pop);
}

//se crea el intervalo, cada vez que se abre una nueva ventana se esperará 3 segundos para abrir la siguiente
pop = setInterval ("abrir_ventana()", 3000);