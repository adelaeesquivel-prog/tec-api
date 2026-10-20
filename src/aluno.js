import conexao from "./banco.js"; //importando a conexao com bnco de dados

//Função ler: vai ler os alunos do banco de dados (no momento inicial não temos nenhum);

function ler(res){
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados)=> {
        //verificando se há erro, e caso positivo define os status para 400(Bad request) e apresenta o codigo do erro em formato json
         if(erro){
            res.status(400).json(erro.code);
            return;
         }
         //verifica se tem registros no banco de dados, caso não tenha, define os status para 204 (sem conteudo)
         if(resultados === 0){
            res.status(204).end();
            return
         }

         //define o status com 200 (ok) e exibe os resultados
         res.status(200).json(resultados);
    })
}

//inserindo alunos no banco de dados
function inserir(aluno,res){
    const sql = "INSERT INTO alunos SET ?"; //O MYSQL2 com o "SET ?" faz com que o Mysql entenda todos os dados recebidos serao atribuidos na ordem enviada, aos campos da tabela alunos.

    conexao.query(sql, aluno,(erro) => {
        if(erro){
            res.status(400).json(erro.code);
         }else {
            res.status(201).json({"status" : "aluno inserido"}) //alem de responder com status 201, adicionamos uma mensagem amigavel para confirmar q o usuario foi inserido no banco de dados
        }
    })

}

//exibindo UM aluno
function lerUm(id, res){
    const sql = "SELECT * FROM alunos WHERE id= ?";
    conexao.query(sql, id, (erro, resultados) => {
        //checando se existe conteudo
        if(resultados.length ===0){
            res.status(204).res.end;
            return;
        }
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }
    })
}

export {ler, inserir, lerUm}; 