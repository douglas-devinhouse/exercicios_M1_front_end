class Pessoa{
    nome;
    #cpf;

    constructor(nome,cpf){
        this.nome = nome;
        this.#cpf = cpf;
    }

    imprime(){
        console.log(`Exercício 07: ${this.nome} - ${this.#cpf}`);
        document.querySelector("#pExercicio7").innerHTML = `${this.nome} - ${this.#cpf}`;
    }
}

export default Pessoa;
