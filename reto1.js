
const teclado = {
    1 : [],
    2 : ["a", "b", "c"],
    3 : ["d", "e", "f"],
    4 : ["g", "h", "i"],
    5 : ["j", "k", "l"],
    6 : ["m", "n", "o"],
    7 : ["p", "q", "r", "s"],
    8 : ["t", "u", "v"],
    9 : ["w", "x", "y", "z"]
};

const permutar = (digito1, digito2)=>{
    let resultado = "";

    teclado[digito1].forEach(val1 => {
        
        teclado[digito2].forEach(val2 =>{
            resultado = resultado + "," + val1 + val2;
        })

    });

    

    return resultado;
}


const permutarCadena = (digitos) => {

    if(digitos.length == 0)
        return "";

    if(digitos.length == 1)
        return teclado[digitos];
        
    //Si llega aquí digitos tiene al menos 2 valores
    let resultado = "";

    for(let i = 0; i < digitos.length; i++){
        
        const digito1 = digitos[i];
        //console.log("val1", digito1);

        //Tengo que crear una cadena con todos los digitos menos digitos[i]
        if(i + 1 >= digitos.length) //Si ya no tengo más digitos adelante
            return resultado;

        //Si llego aquí tengo 2 valores para permutar
        const subCadena = digitos.slice(i +1,);
        //console.log("subCadena", subCadena);

        resultado += permutar(digito1, subCadena[0]);
        
        

    }


    return resultado; //Aunque creo que nunca llega aquí

};

const digitos = new String("23"); 

console.log(permutarCadena(digitos));

