
const input = document.querySelector(".input");
const texto2 = document.querySelector(".texto2");
const letras = /^[a-z0-9 .,;:()¡!¿?""]*$/;

function btnEncriptar(){
    if (input.value == "") {} 
        else if (!letras.test(input.value) || input.value.length === 0) {
        
            alert("Solo ingrese letras minúsculas y sin acentos");
    
         }
         
    else {

        const textoEncriptado = encriptar(input.value)
        texto2.value = textoEncriptado;
        texto2.style.backgroundImage = "none"
        input.value = "";

    }
    
}

function encriptar(fraseEncriptada){
    let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for( let i = 0; i < codigo.length; i++){
        
        if(fraseEncriptada.includes(codigo[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(codigo[i][0],codigo[i][1])

            document.getElementById("texto").style.display = "none";
            document.getElementById("copiar").style.display = "show";
            document.getElementById("copiar").style.display = "inherit";
        }
    }
    return fraseEncriptada;
    
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(input.value)
    texto2.value = textoDesencriptado;
    texto2.style.backgroundImage = "none";
    input.value = "";
}

function desencriptar(fraseDesencriptada){
    let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for(let i=0; i<codigo.length; i++){
        if(fraseDesencriptada.includes(codigo[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(codigo[i][1], codigo[i][0])

            document.getElementById("texto").style.display = "none";
            document.getElementById("copiar").style.display = "show";
            document.getElementById("copiar").style.display = "inherit";
        }
    }
    return fraseDesencriptada;
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
}
