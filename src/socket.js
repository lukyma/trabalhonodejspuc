const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const arithmeticModule = require("nodeaula2/modules/arithmeticModule");
const app = express();

//Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

//Inicializa um instancia de servidor websocket a partir do servidor http
const wss = new WebSocket.Server({ server });

// Função responsável por manusear a conexão websocket
wss.on("connection", (ws) => {
  // Função que trata as mensagens recebidas pelo servidor
  ws.on("message", (message) => {
    ws.send(arithmeticModule.arithmeticExpression(message));
  });
});

//Inicia o servidor
server.listen(65336, () => {
  console.log("Servidor conectado: " + server.address().port);
});

module.exports = wss;