var botao = 0;

function mudarCor() {

    switch (botao) {
        case 0:
            document.body.style.backgroundColor = "red";
            document.getElementById("titulo").innerHTML = "Background Color: Red";
            botao = 1;
            break
        case 1:
            document.body.style.backgroundColor = "yellow";
            document.getElementById("titulo").innerHTML = "Background Color: Yellow";
            botao = 2;
            break
        case 2:
            document.body.style.backgroundColor = "blue";
            document.getElementById("titulo").innerHTML = "Background Color: Blue";
            botao = 3;
            break
        case 3:
            document.body.style.backgroundColor = "green";
            document.getElementById("titulo").innerHTML = "Background Color: Green";
            botao = 0;
            break
    }

}