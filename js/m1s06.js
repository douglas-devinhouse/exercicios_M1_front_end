
let mensagemOla = (nome) => {
    if(nome)
        return `Olá ${nome}`;        
    else
        return "Olá mundo!";
}

btnOlaMundo.addEventListener('click', () => {
    document.querySelector("#pExercicio1").innerHTML = mensagemOla();
});

btnOlaNome.addEventListener('click', () => {
    let nome = document.querySelector("#nome").value;
    document.querySelector("#pExercicio2").innerHTML = mensagemOla(nome);
});

const ARRAY_NUMEROS = [1,2,3,4,5,6,7,8,9];
document.querySelector("#pExercicio3Array").innerHTML = ARRAY_NUMEROS;

let arrayInvertido = [];

btnInverterArray.addEventListener('click', ()=> {    
    for (let i = 8; i >= 0; i--) {
        arrayInvertido.push(ARRAY_NUMEROS[i]);
    }
    document.querySelector("#pExercicio3ArrayInvertido").innerHTML = arrayInvertido;
});    

btnFind.addEventListener('click', () => {
    let encontrado = () => {     
        valor = ARRAY_NUMEROS.find(elemento => elemento > 5);
        return valor;
    }
    if(encontrado)
        document.querySelector("#pExercicio4").innerHTML = encontrado();
})


function ehImpar(num){
    return num % 2 !== 0;
}

let arrayImpares = ARRAY_NUMEROS.filter(ehImpar);

btnFilter.addEventListener('click', () => {
    document.querySelector("#pExercicio5").innerHTML = arrayImpares;
})

function calcQuadrados(num){
    return num**2;
}
let arrayQuadrados = ARRAY_NUMEROS.map(calcQuadrados);
btnQuadrados.addEventListener('click', () => {
    document.querySelector("#pExercicio6").innerHTML = arrayQuadrados;
})


