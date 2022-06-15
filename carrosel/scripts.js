/*******PRIMEIRO CÓDIGO FEITO SEM DECLARAÇÃO DE OBJETOS****/
/*
var opcao = 0;
var img = document.getElementById("image");
var nome = document.getElementById("autor");
var titulo = document.getElementById("titulo");
var texto = document.getElementById("info");

function voltarCompleto() {
    voltar();
    carrosel();
}

function avancarCompleto() {
    avancar();
    carrosel();
}


function voltar () {
    if (opcao > 0) {
        opcao--;
    } else {
        opcao = 2;
    }

}

function avancar () {
    if (opcao < 2) {
        opcao++;
    } else {
        opcao = 0;
    }

}

function carrosel() {
    switch (opcao) {
        case 0:
            //imagem
            img.setAttribute('src', 'eu.jpg');
            //nome
            nome.innerHTML = "Adonai Cristoni"            
            //titulo
            titulo.innerHTML = "Desenvolvedor de Software"
            //texto
            texto.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            break
        case 1:
            //imagem
            img.setAttribute('src', 'amor.jpg');
            //nome
            nome.innerHTML = "Elaine Bernardo Cristoni"
            //titulo
            titulo.innerHTML = "Evangelista - Bacharel em Teologia"
            //texto
            texto.innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            break
        case 2:
            //imagem
            img.setAttribute('src', 'miguel.png');
            //nome
            nome.innerHTML = "Miguel Bernardo Cristoni"        
            //titulo
            titulo.innerHTML = "Chibolete"
            //texto
            texto.innerHTML = "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            break
    }
}*/

/**********SEGUNDO CÓDIGO FEITO COM DECLARAÇÃO DE OBJETOS PARA CADA AUTOR****/
var arrayPessoal = [
    adonai = {
        imgSrc: 'eu.jpg',
        nome: 'Adonai Cristoni',
        titulo: 'Desenvolvedor de Software',
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    elaine = {
        imgSrc: 'amor.jpg',
        nome: 'Elaine Bernarndo Cristoni',
        titulo: 'Evangelista - Bacharel em Teologia',
        texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },

    miguel = {
        imgSrc: 'miguel.png',
        nome: 'Miguel Bernarndo Cristoni',
        titulo: 'Chibolete',
        texto: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
]

var opcao = 0;
var img = document.getElementById("image");
var nome = document.getElementById("autor");
var titulo = document.getElementById("titulo");
var texto = document.getElementById("info");

function voltarCompleto() {
    voltar();
    carrosel();
}

function avancarCompleto() {
    avancar();
    carrosel();
}


function voltar () {
    if (opcao > 0) {
        opcao--;
    } else {
        opcao = 2;
    }

}

function avancar () {
    if (opcao < 2) {
        opcao++;
    } else {
        opcao = 0;
    }

}

function carrosel() {
        
    const item = arrayPessoal[opcao];
    img.src = item.imgSrc;
    nome.textContent = item.nome;
    titulo.textContent = item.titulo;
    texto.textContent = item.texto;

}

