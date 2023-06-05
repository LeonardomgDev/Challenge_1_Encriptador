const area_texto = document.querySelector(".area_texto");
const mensaje_encriptado = document.querySelector(".mensaje_encriptado");

function encriptacion(str_encriptada){

    let matriz_codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    str_encriptada = str_encriptada.toLowerCase();

    for(let n = 0; n < matriz_codigo.length; n++){
    //Este for va a contener la operación de sustitución durante toda la longitud de la string proporcionada por el usuario

        if(str_encriptada.includes(matriz_codigo[n][0])){
        //Este if va a corroborar si existe un valor dentro de nuestra matriz de sustitución y lo va a reemplazar

            str_encriptada = str_encriptada.replaceAll(matriz_codigo[n][0], matriz_codigo[n][1]);
            //Proceso de encriptación

        }

    }

    return str_encriptada
    //La función devuelve el string ya encriptado
}

function boton_encriptar(){

    const texto_encriptado = encriptacion(area_texto.value);
    mensaje_encriptado.value = texto_encriptado;
    area_texto.value = "";
    mensaje_encriptado.style.backgroundImage = "none";
    //La función realiza la llamada a la función "encriptacion" y muestra el mensaje encriptado

}