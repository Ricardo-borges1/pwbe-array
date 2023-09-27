/********************************************************************************
 * Objetivo: Trabalhar com os conceitos de array e Json
 * Data: 27/09/2023
 * Autor: Ricardo Borges do Amaral
 * Versão 1.0
 ********************************************************************************/


// [ ] -> significa uma estrtura de Array
// { } -> significa uma estrutura Json

const conceitoArray = function(){
    //Criando um array e atribuindo conteuido a ele 
    let listaDenome = ['Jose', 'Maria', 'Luiz', 'Ana', true];


    // cria tabela mostrando os índices
    console.log(listaDenome);
    console.table(listaDenome);


    // exibe apenas um conteúdo do array, através do índice 
    console.log(listaDenome [0])


    // typeof -> retorna um tipo de dado do array ou do conteudo de cada indice //
    console.log (typeof (listaDenome))
    console.log (typeof (listaDenome [3]))

    listaDenome [1] = 'Maria da Silva';
    console.table(listaDenome);

    // push -> adiciona novos elementos ao meu array, porém no fim dele, na sequencia// 
    listaDenome.push('André da Silva')
    listaDenome.push('Carlos da Silva', 'Suzane da Silva', 'Julia da Silva')
    console.table (listaDenome);

    // unshift -> adiciona novos elementos, porem no inicio do array
    // CUIDADO pois ele reorganiza todos os índices e seus conteúdos 
    listaDenome.unshift('Nathalia da Silva', 'Pedro da Silva');
    console.table (listaDenome);


    // pop -> remove elementos do fim, do ultimo indice
    listaDenome.pop ();
    console.table (listaDenome);


    // exclui os indices, (3,3) = remova o indice 3, 3 posições
    listaDenome.splice(3,3);
    console.table ( listaDenome);

  // remove do inicio, faz o processo inverso do unshift 
    listaDenome.shift();
    console.table ( listaDenome);
}

const percorrendoArray = function(){
    let listaDeProdutos = [
    'mouse', 
    'teclado', 
    'monitor', 
    'computador', 
    'caixa de som',
    'impressora',
    'fone de ouvido',
    'web cam',
    'microfone',
    'hd',
    'memória'
]

    //length -> retorna a quantidade de elementos de um array
    // console.log(listaDeProdutos.length);


//--------------------------------------------------------------------------------------//

    //WHILE

   // let cont = 0;
    //while (cont < listaDeProdutos.length){
        //console.log (`nome do Produto: ${listaDeProdutos[cont]}`);
       // cont +=1;
   //}


  //--------------------------------------------------------------------------------------//


   //FOR
   //for(let cont=0 ; cont <listaDeProdutos.length; cont++){
    //console.log (`nome do Produto: ${listaDeProdutos[cont]}`);

   //}


   //--------------------------------------------------------------------------------------//


    //FOREACH -> estrutura de repetição feita para trabalhar com array, ele gerencia o índice, ele pega o arrray "Lista de produtos" 
    //e ele cria na memoria uma replica dsse array, pegando o conteudo do array e joga numa variavel de callback

   // listaDeProdutos.forEach(function(produto){
    //console.log (`Nome do Produto: ${produto}`)

   // })

   //--------------------------------------------------------------------------------------//


   //IndexOf -> Permite localizar um conteudo de um array e retorna o seu índice
   console.log (listaDeProdutos.indexOf ('fone de ouvido'));


   // Includes -> retorna verdadeiro se ele encontrar e falso se ele nao encontrar, devolve um booleano
   console.log(listaDeProdutos.includes('impressora'));

}

const filtrarProduto = function(nomeProduto){
 let listaDeProdutos = [
    'mouse', 
    'teclado', 
    'monitor', 
    'computador', 
    'caixa de som',
    'impressora',
    'fone de ouvido',
    'web cam',
    'microfone',
    'hd',
    'memória'
];


let nome = nomeProduto;
let status = false
let cont = 0;
    //Usando o indexOf
        //if (listaDeProdutos.indexOf(nome) >= 0) 
            //status = true;

    //Usando o includes
        //if(listaDeProdutos.includes(nome))
            //status = listaDeProdutos.includes(nome);

    // Fazendo o filtro manual 
        listaDeProdutos.forEach(function(produto){
            if (produto.toUpperCase() == nome.toUpperCase())
            cont ++;
        })


    return cont;

}


// usado para executar nossa função
//conceitoArray();
//percorrendoArray();

console.log (filtrarProduto('Impressora'));

