// Escopo determina quais são os dados que podem ser acessados em uma determinada parte do código

let nome = 'Denner'; // escopo global (pode ser acessada por todo o arquivo)

{
    let nome = 'Gabriel';
    console.log(nome);
}

console.log(nome);

// outro caso:

{
    let idade = 19;
}

console.log(idade); // ReferenceErro - idade is not defined

// let e const possuem escopo de bloco, já o var é de escopo global

{
    var teste = 'Testando var';
}

console.log(teste);