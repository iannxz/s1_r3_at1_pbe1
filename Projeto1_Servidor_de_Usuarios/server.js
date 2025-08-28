const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => { 
  console.log(`Servidor de usuários! Ativo na porta ${PORT}`)
});
