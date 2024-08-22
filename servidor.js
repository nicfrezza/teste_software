const express = require('express');
const path = require('path');  // Importar o módulo 'path'
const app = express();
const port = 3000;

// Configuração do middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para enviar o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'soma.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
