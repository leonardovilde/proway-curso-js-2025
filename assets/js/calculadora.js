// functio para que serve? executar um trecho de codigo que tem o objetivo de resolver algum problema
function realizarSoma() {
       // pegar o campo (input) que contem o id="campo-numero1"
       let inputNumero1 = document.querySelector("#campo-numero1");
       // pegar o valor (numero digitado) do campo numero 1
       let numero1 = parseInt(inputNumero1.value);

       let inputNumero2 = document.querySelector("#campo-numero2");
       let numero2 = parseInt(inputNumero2.value);

      alert("Soma: "+ (numero1 + numero2));
}

function apresentarVariaveis(){
    let nome = "Pedro";
    let sobrenome = "Carlos";

    let idade = 20;

    let salario = 1800.20;

    let empregado = false; // falso = false, verdadeiro = true

    // comentario em linha
    /* comentario em bloco pode conter varias linhas */
    /* 
           string = armazenar texto
           int = numero inteiro
           float = numero com virgula
           boolean = tipo logico (vdd, falso)
    */
   // Adicionar 15 reais de aumento para o pedro
   let aumento = 15.00;
   salario = salario + aumento
   alert("Nome: "+ nome + " Salario: " + salario)
   // + => concatenar (juntar duas coisas)
   // + => somar (2+2 => 4)
}

function apresentarIdade(){
    let dataNascimento = new Date (2010, 7, 15);
    let anoNascimento = dataNascimento.getFullYear();
    
    let dataHoraAtual = new Date();
    let anoAtual = dataHoraAtual.getFullYear(); //2025
   
    // calcular idade 
    let idade = anoAtual - anoNascimento;
    
   
   
    console.log("idade:" +idade);

    if (idade <= 17){
        console.log("Menor de idade");
    } 
    else{
        console.log("Adulto");
    }
}

