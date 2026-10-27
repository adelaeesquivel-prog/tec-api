//importando o express (instalando via terminal)
import express from 'express';
import cors from 'cors';
import {ler, inserir, lerUm, atualizar, excluir} from './src/aluno.js';

const app = express();
const porta =  process.env.PORT || 3000;

//habilitando o express para trabalhar com formato JSON
app.use(express.json());

//habilitando o express para trabalhar com formato URL Encoded (formulario)
app.use(express.urlencoded({extended : true}));


//habilitando CORS
app.use(cors());
 
/*ROTAS */
//Configuirando rota para o inicio da aplicação
app.get('/', function(req, res){
    res.send('API de alunos com nodeJS, express e MySQLn');
});

//Rota para visualizar TODOS os alunos
app.get('/alunos',(req, res)=>{
    //res.send('Dados de todos os alunos');
    ler(res);
});

//Rota/EndPoint para visualizar UM os alunos
app.get('/alunos/:id',(req, res) => {
    //requisicao de parametro id
    const id = parseInt(req.params.id);
    lerUm(id, res);
});

//Endpoint para INSERIR um aluno no banco de dados
app.post('/alunos',(req, res) => {
   // res.send('Cadastrando um aluno');

   //capturando os dados apartir do corpo da requisição
   const novoAluno = req.body;
   inserir(novoAluno, res);
    });

// Endpoint para ATUALIZAR TODOS OS DADOS de UM ALUNO
app.put('/alunos/:id',(req, res) => {
    //res.send('Atualizar os dados de um aluno');

    
});
 
 
//PATCH: Endpoint para ATUALIZAR todos/ALGUNS  DADOS de UM ALUNO
 app.patch('/alunos/:id',(req, res) => {
     //res.send('Atualizando alguns dados de um aluno');
      const id = parseInt(req.params.id);
      const aluno = req.body;
      atualizar(id, aluno, res);
 
});
 
 
// Endpoint para DELETAR UM ALUNO
 app.delete('/alunos/:id',(req, res) => {
   // res.send('Deletar os  dados de um aluno');
   const id = parseInt(req.params.id);
   excluir(id, res);
});
 


 /* SERVIDOR */
app.listen(porta, () =>{
    console.log(`Servidor ouvindo na porta ${porta}`);
})

