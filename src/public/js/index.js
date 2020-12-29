window.onload = function () {
    var prevResult = document.getElementById("prevResult");
    var resultOperation = document.getElementById("resultOperation");
    var statusSocket = document.getElementById("statusSocket");
    var equal = document.getElementById("equal");
    var socket = new WebSocket("ws://hidden-beyond-24619.herokuapp.com/");

    equal.onclick = function(){
        var exp = prevResult.value;
        if(exp){
            if(socket.readyState === 1){
                socket.send(exp);
            }
            else{
                //Caso o socket não funcione, tente fazer local
                try{
                    resultOperation.value = "Valor local: " + eval(exp);
                }
                catch{
                    resultOperation.value = "Falha ao realizar a operação";
                }
            }
        }
    }

    socket.onerror = function (error) {
        statusSocket.innerHTML = "Erro ao conectar no socket.";
        statusSocket.className = "fechada";
    };

    socket.onopen = function (event) {
        statusSocket.innerHTML =
          "Conectado ao servidor: " + event.currentTarget.url;
          statusSocket.className = "aberta";
    };

    socket.onclose = function (event) {
        statusSocket.innerHTML = "Websocket desconectado.";
        statusSocket.className = "fechada";
    };

    socket.onmessage = function (event) {
        var message = event.data;
        console.log(message);
        resultOperation.value = "Valor Remoto: " + message;
        prevResult.value = "";
    }
}

function insert(num){
    prevResult.value = prevResult.value + num;
}

function equal(){
    var exp = prevResult.value;
    if(exp){
        socket.send(exp);
    }
}
function c(){
    prevResult.value = "";
}
function back(){
    var exp = prevResult.value;
    prevResult.value = exp.substring(0, exp.length-1);
}