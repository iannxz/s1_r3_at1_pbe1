const express = require("express");
const app = express();

const PORT = 3002;

app.listen(PORT, () => { 
  console.log(`Servidor de Pedidos! Ativo na porta ${PORT}`)
});