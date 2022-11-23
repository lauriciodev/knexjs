let database = require("./database");

//insert comando para inserir dados no banco de dados!;

/* let dados = [
  {
    nome: "terraria",
    preco: 10.1,
  },
  {
    nome: "resident evil",
    preco: 410.1,
  },
  {
    nome: "gta san andreas",
    preco: 310.1,
  },
];

database
  .insert(dados)
  .into("games")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  });
 */

//consultando dados;

/* database
  .select(["id", "preco"])
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  }); */

/* varias consultas

database
  .insert({ nome: "lord of the rings", preco: 334 })
  .into("games")
  .then((data) => {
    database
      .select(["id", "nome"])
      .table("games")
      .then((data) => {
        console.log(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  })
  .catch((erro) => {
    console.log(erro);
  });
 */

//where condições em consultas;

/* database
  .select()
  .whereRaw("nome = 'lord of the rings' OR preco < 50")
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  }); */

//where
// ou = .orWhere({ id: 2 })
// escrevendo diretamente a query //whereRow("preco > 40");

//database.raw(" aqui pode ser passado qualquer codigo sql");

/* database
  .raw("select * from games")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  });
 */

/* database
  .where({ id: 9 })
  .delete()
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  });
 */

/* 
atualizando dados

database
  .where({ id: 2 })
  .update({ nome: "god of war ghost of sparta" })
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  });
 */

//manipulando a ordem das consultas de  dados

/* database
  .select()
  .table("games")
  .orderBy("nome", "asc")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  });
 */

/* 
consultando dados associados.

  database
  .insert({
    nome: "unreal",
    game_id: 7,
  })
  .table("estudios")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  }); */
