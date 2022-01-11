import Pessoa from './pessoa.js';

class Funcionario extends Pessoa {
    cargo;
    salario;
    constructor(nome,cpf, cargo, salario){
        super(nome, cpf);
        this.cargo = cargo;
        this.salario = salario;
    }

    imprime() {
        console.log(`Exercício 09: ${this.nome} - ${this.cargo}`);
        window.alert(`Exercício 09: ${this.nome} - ${this.cargo}`);
    }

    static calcularFolha = vetor => {
        return vetor.reduce((acc, cur) => acc + cur.salario,0);
    }
}

export default Funcionario;
