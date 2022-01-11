import Pessoa from './pessoa.js';
import Funcionario from './funcionario.js';

const pessoa = new Pessoa("Douglas", "12345678909");
pessoa.imprime();

let arrayFunc = [];

arrayFunc.push(new Funcionario("Maria","987654325152","Full-Stack Dev Jr.",2400));
arrayFunc.push(new Funcionario("Douglas","12345678909","Full-Stack Dev Pl.",4800));
arrayFunc.push(new Funcionario("Virginia","111222333474","Full-Stack Dev Sr.",8600)); 

/*
    A função abaixo foi refatorada conforme solicitado no exercício 10
*/

// function calcularFolha(){
//     let totalFolha = 0;
//     for(let i = 0; i < arrayFunc.length; i++) {
//         totalFolha += arrayFunc[i].salario
//     }
//     return totalFolha;
// }

btnCalcFolha.addEventListener('click', () => {
    let totalFolha = Funcionario.calcularFolha(arrayFunc);
    document.querySelector("#pExercicio8").innerHTML = `R$ ${totalFolha}`;
})

btnExibirCargo.addEventListener('click', () => {
    arrayFunc.forEach(element => {
        element.imprime();
    });
})


