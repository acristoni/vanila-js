const toggle = document.getElementById('toggle');
const dropcontent = document.getElementById('drop-content')
var opcao = 0;

toggle.addEventListener('click', aparecerMenu);

function aparecerMenu() {

    if (opcao === 0) {
        dropcontent.style.display = 'none';
         return opcao = 1;    
    } 
    
    if (opcao === 1) {
        dropcontent.style.display = 'flex';
        dropcontent.style.flexDirection = 'column';
        return opcao = 0;
    }
 
}

