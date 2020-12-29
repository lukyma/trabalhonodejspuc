import express from "express";
import http from "http";
import WebSocket from "ws";
import arithmeticModule from "nodeaula2/modules/arithmeticModule";
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
server.listen(process.env.PORT || 9090, () => {
  console.log("Servidor conectado:", server.address().port);
});

export default {
    wss
}