//importando o express (instalando via terminal)
import express from 'express';
const app = express();
const porta = 3000;
 
/*ROTAS */
//Configuirando rota para o inicio da aplicação
app.get('/', function(req, res){
    res.send('API de alunos com nodeJS, express e MySQLn');
});

//Rota para visualizar TODOS os alunos
app.get('/alunos',(req, res)=>{
    res.send('Dados de todos os alunos');
});

//Rota/EndPoint para visualizar UM os alunos
app.get('/alunos/:id',(req, res) => {
    res.send('Dados de um  aluno qualquer');
});

//Endpoint para INSERIR um aluno no banco de dados
app.post('/alunos',(req, res) => {
    res.send('Cadastrando um aluno');
    });

// Endpoint para ATUALIZAR TODOS OS DADOS de UM ALUNO
app.put('/alunos/:id',(req, res) => {
    res.send('Atualizar os dados de um aluno');
});
 
 
// Endpoint para ATUALIZAR ALGUNS OS DADOS de UM ALUNO
 app.patch('/alunos/:id',(req, res) => {
    res.send('Atualizando alguns dados de um aluno');
});
 
 
// Endpoint para DELETAR UM ALUNO
 app.delete('/alunos/:id',(req, res) => {
    res.send('Deletar os  dados de um aluno');
});
 


 /* SERVIDOR */
app.listen(porta, () =>{
    console.log(`Servidor ouvindo na porta ${porta}`);
})

