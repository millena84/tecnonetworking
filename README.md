# tecnonetworking

### Documentação do passo a passo para colocar o projeto painel colaborativo de tecnologia no ar.

### Objetivo do projeto:
Criar uma rede de contatos com conhecimentos em tecnologia para troca de experiências, através de cursos, meetups, palestras, hangouts e etc.

### Funcionalidades:
Home: contém informações de eventos relevantes relacionados à tecnologia.

Contatos: contém a lista de pessoas que já fazem parte da rede, com os quais você pode entrar em contatos.

Formulário: para novas pessoas se cadastrarem na rede.

Sobre: informações dos participantes do projeto.

## PASSO A PASSO DO DESENVOLVIMENTO (para efeito de aprendizado):

*atenção*:

aqui vão conter comentários e observações que são óbvias, ou até não estão explicadas da melhor maneira, mas considerando que esse projeto faz parte de um curso, achamos que seria legal e importante para nós escrever tudo aqui, assim garantimos que nosso aprendizado está caminhando

*x)*


##### SPRINT 1: 07+08/09:


##### Preparação do ambiente de desenvolvimento:
* 1) Escolha do framework / middlewares e etc:

-> Framework = Express: para que o node.js trabalhe com uma interface web

*lembrete sobre framework:* é um conjunto de bibliotecas unidas e focadas em "resolver" determinado tipo de "problema". O FRAMEwork (frame = quadro) tem diretrizes a serem seguidas (ou seja, é 'travado').

`$ npm install express`

-> Template engine = handlebars: para trabalhar com o node.js fazendo a reinderização das páginas

*lembrete sobre template engine:* (aqui fiquei na dúvida, quem puder nos corrigir, eu agradeço rs) é um middleware que auxiliam o backend (no nosso caso, o nodejs), a trabalhar com a reinderização de páginas html de forma dinâmica.

*lembrete 2:* toda lógica está rodando no servidor. O handlebars vai atuar como facilitador para a criação de rodas no código do backend, e com a reinderização das páginas conforme forem realizadas as requisições http.

--> criarm dentro da pasta do projeto, a estrutura: *./views/layouts*:

---> views é onde ficarão todas as rotas da aplicação

---> layouts é onde ficará o layout padrão cabeçallho e rodapé

`$ npm install express-handlebars `


--> Middleware express-session: para trabalhar com sessões e cookies.

`$ npm express-session `

--> Middleware body-parser: para trabalhar com objetos json a partir de uma subimissão de dados em um formulário html

`$ npm body-parser`

*lembrete sobre middlewares:* são funcionalidades que estão agrupadas em uma biblioteca, e vão sendo executadas 'separadamente' conforme vai desenrolando a lógica de funcionamento da minha aplicação.

--> Função nativa fs: para fazer a gravação de arquivos (não precisa instalar)

* 2) criação da estrutura de pastas para o desenvolvimento da aplicação.

obs:. a estrutura de pastas precisa seguir as diretrizes dos frameworks / middlewares e-ou templates engine usados no projeto.

* 3) escolha do template

* 4) protótipo



##### SPRINT 2: 09/09:

* 5) Montar estrutura de JSON dos eventos que vão aparecer na home (para essa fase do curso, será um JSON fixo):

eventos.json:

*em definição*

* 6) Montar estrutura de JSON dos contatos que já fazem parte da rede:

contatosCadastrados.json:

*em definição*

* 7) Pensar na estrutura JSON dos contatos novos:

contatosNovos.json:

*em definição*

* 8) criação do index.js (coração da aplicação): carregar a home e mostrar um log de inicialização no terminal;

* 9) desenhar o cabeçalho e rodapé

* 10) criação do main.handlebars: codificar o cabeçalho e o rodapé

* 11) desenhar a home

* 12) alteração da index.handlebars: codificar a estrutura do desenho

* 13) disponilizar os eventos dentro da home (lendo do json)

* 14) desenhar contatos

* 15) alteração da contatos.handlebars: codificar a estrutura do desenho

* 16) disponilizar os contatosCadastrados dentro da home (lendo do json)


##### SPRINT 3: 10/09:

*em definição*



### Diário do desenvolvimento:


*SPRINT 1 - 07 e 08/09:*

Objetivo inicial:

* ter o protótipo pronto e funcionando (para depois importar os pedaços do html para os arquivos handlebars

* montar toda a estrutura do projeto no computador

* testar o uso do mongoDB na leitura e gravação

* testar o uso do fileSystem do express (caso não conseguíssemos usar o mongoDB no primeiro momento)

* testar o jsonfile (caso o fileSystem não funcionasse)

Comentários:

Não foi possível usar o mongoDB e nem o jsonfile. Ainda estamos buscando uma solução para a inclusão de novos contatos na rede (já que a gravação direto no arquivo não funciona corretamente - o json perde a formatação e dá um erro de leitura). A meta foi subestimada, pois os testes de uso do mongoDB, file System e jsonfile demoraram muito mais tempo do que o previsto, invadindo assim o início da próxima sprint.

Status: meta não alcançada

Dificuldades:

* os testes dos módulos para usar no projeto tomaram muito mais tempo do que o previsto.


*SPRINT 2 - 09/09:*

Objetivo inicial:

* ter o index.js roteando as páginas: index e contatos (e usando cabeçalho e rodapé da main)

* ter a estrutura da main.handlebars

* ter a estrutura da index.handlebars

* ter a estrutura da contatos.handlebars

* exibir na página de contatos os contatos já cadastrados de forma dinâmica

Comentários:

Os testes dos módulos da sprit 1 invadiram a maior parte do sprint 2. Será necessário um replanejamento, considerando que não será possível cumprir a meta da Sprint.

Status: em andamento

Dificuldades:

* as atividades do sprint anterior acabaram invadindo o time deste sprint.



*=>>>> COLA COMANDOS PRINCIPAIS GITHUB:*


`echo "# tecnonetworking" >> README.md`

`git init`

`git add README.md`

`git commit -m "first commit"`

`git remote add origin https://github.com/millena84/tecnonetworking.git`

`git push -u origin master`

*Autoras: Millena Ferreira (millena84) e Jessica Raunith (jessicaraunith)*
