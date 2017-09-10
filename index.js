// Declarando todas as dependencias:
// Importando express (framework):
const express = require('express');
// Instanciando a classe express no objeto app (para usar as função da classe express dentro deste programa)
const app = express();

// Importando handlebars (template engine):
const handlebars = require('express-handlebars');
// declaro que, para o objeto app, eu vou usar na função engine o template engine handlebars
// o parametro defaultLayout é o layout padrão de todas as páginas. No nosso projeto, vamos usar apenas cabeçalho e rodapé padrões.
app.engine('handlebars', handlebars({defaultLayout: 'principal'}));
// "liga" o handlebars para que ele seja o mecanismo de reinderização de html à medida em que as requisições http forem sendo efetuadas
app.set('view engine', 'handlebars');
// referencio a pasta onde vão ficar todos os componentes das minhas páginas html que serão reinderizadas via handlebars:
app.use(express.static('assets'));

// importando o body-parser (middleware):
const bodyParser = require('body-parser');
// "liga" o body-parser para que ele possa ser usado na leitura, formatação, e envio de dados de formulario (como json):
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// importando a biblioteca fs - file system (biblioteca do express - ou do node?):
var fileSystem = require('fs');

// DECLARAR NA DOCUMENTAÇÃO:
// importando o util (middleware):
// o util auxilia a mostrar corretamente os objetos que estamos trabalhando no console.log:
const util = require('util');

// objetos JSON:
// contatosCadastrados:
const listaContatosJson = require('./dados/contatosCadastrados.json');
// sobre: quem faz parte do projeto:
const listaSobreJson = require('./dados/quemSomos.json');

// Ligando o servidor para ele receber as requisições:
var server = app.listen(3000, () => {
  var host = server.address().host;
  var port = server.address().port;
  console.log('>>> MSG-INF: O servidor foi inicializado na porta [' + port + '], no endereço [' + host + ']' );
});

// função que auxilia a exibir as informações de log das requisições no terminal
// em definicao
function logControle(metodo, rota, status, acao) {
  console.log(`>>> MSG-INF: Execução do método "${metodo}", rota "${rota}", e o status foi "${status} e a ação seguinte na rota foi "${acao}"`);
  return;
}

// Rota index:
// Métodos: GET (exibição de dados na tela)
// Envio de dados: não há
// Leitura de arquivo: não há

app.get('/', (request, response) => {
  // testes para primeira exibicao
  //response.send(`<h1>Olá!</h1`)
  // resposta à requisição: reinderizar index.handlebars
  response.render('index');
  // log do que foi feito na requisição
  var metodo = request.method;
  var rota = "/index";
  var status = response.status;
  var acao = "render";
  logControle(metodo, rota, status, acao);
});

// Rota contatos:
// Métodos: GET (exibição de dados na tela)
// Envio de dados: não há (na v2)
// Leitura de arquivo: contatosCadastrados.json

app.get('/contatos', (request, response) => {
  // resposta à requisição: reinderizar contatos.handlebars
  response.render('contatos', {contatos: true, listaContatos: listaContatosJson});
  // log do que foi feito na requisição
  var metodo = request.method;
  var rota = "/contatos";
  var status = response.status;
  var acao = "render";
  logControle(metodo, rota, status, acao);
});

// Rota sobre:
// Métodos: GET (exibição de dados na tela)
// Envio de dados: não há (na v2)
// Leitura de arquivo: quemSomos.json

app.get('/quemSomos', (request, response) => {
  // resposta à requisição: reinderizar contatos.handlebars
  response.render('quemSomos', {contatos: true, quemSomos: listaSobreJson});
  // log do que foi feito na requisição
  var metodo = request.method;
  var rota = "/contatos";
  var status = response.status;
  var acao = "render";
  logControle(metodo, rota, status, acao);
});
