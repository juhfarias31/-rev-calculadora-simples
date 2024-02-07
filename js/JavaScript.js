function Calculadora(){
    var texto = document.querySelector("#texto");
    var v1 = parseInt(document.getElementById("valor1").value);
    var v2 = parseInt(document.getElementById("valor2").value);
    var operador = document.getElementById("operador").value;
            
    if ( operador == "Somar" ){
       texto.innerHTML = ("o resultado é: ",v1+v2);
    }

    else if (operador == "Subtrair"){
        texto.innerHTML = ("o resultado é: ",v1-v2);
    }

    else if (operador == "Multiplicar"){
        texto.innerHTML = ("o resultado é: ",v1*v2);
    }
    else if (operador == "Dividir"){
        texto.innerHTML = ("o resultado é: ",v1/v2);
    }

    else{
        texto.innerHTML = ("Nenhum operador relacionado!");
    }
        }