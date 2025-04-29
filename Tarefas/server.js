const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let tasks = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push(task);
        res.status(201).json({ message: 'Tarefa adicionada com sucesso' });
    } else {
        res.status(400).json({ message: 'A tarefa não pode estar vazia' });
    }
});
app.get('/', (req, res) => {
    res.send('Servidor funcionando! 🚀');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});