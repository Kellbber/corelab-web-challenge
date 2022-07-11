## Frontend <h1>
- **rota padrão -> http://localhost:3000**
- Assim podendo ser executado junto com a Api que está na porta 3333.
## O que foi utilizado?

- [ReactTs](https://www.typescriptlang.org/pt/docs/handbook/react.html)
- [VITE](https://vitejs.dev/guide/)
- [StyledComponents](https://styled-components.com/docs)


### Por que React Typescript?
Nos traz uma confiabilidade muito maior nos componentes, assim conseguindo definir o que ele irá receber e confirmar que estamos enviando e recebendo de forma correta os objetos, arquivos e etc.

## Por que Vite?
O vite era normalmente utilizado na criação de aplicações em VueJs, porém agora traz suporte para a maioria das estruturas web. Traz uma rápida construção, além de ser mais leve que o **react-app**.


### Como iniciei o projeto:"

Utilizei o `npm init vite@latest` para instalar.
Após, utilizei `npm run dev` para iniciar o servidor.

Feito isso, removi os arquivos que não iriam ser usados, limpei os comentários e os .CSS. Sendo assim, removi tudo que iniciou na aplicação deixando somente o necessário.

#### Pastas
Criei a estroturação de pastas de acordo com o uso de mercado, separando-as no SRC.
- EXEMPLOS:

- **Assets** para guardar imagens, icons e outras mídias;
- **pages** para as páginas da aplicação...

Após a criação de pastas, utilizei o  comando `npm install --save styled-components` para trazer para a nossa aplicação uma poderosa ferramenta pra nos ajudar na estilização.

### Por que Styled Components?
Ele nos permite passar uma função como valor do estilo, podemos mudar o estilo de acordo com a props passada ao invés de ficar adicionando mil classes htmls ou criando vários CSS.

Sendo assim, parti para o componente **Home**!

Seguindo o layout enviado via e-mail, comecei pela criação dos components básicos para depois partir para suas funcionalidades.
 Após estilizar tudo, comecei a deixar funcional a aplicação.
 O primeito passo foi usar o hook [useNavigate](https://reactrouter.com/docs/en/v6/hooks/use-navigate) do [ReactRouterDom](https://www.npmjs.com/package/react-router-dom).
 Com ele, consigo chamá-lo em uma variável e o utilizar para navegar pelas rotas. E ai chegamos num ponto... como fiz as rotas?

 SIMPLES!

Criei um arquivo na raiz chamado **Router.tsx** e ele administra as rotas utilizando o React Router Dom.
Nele importamos outro arquivo da pasta **types** o routes.ts, onde fica o enum RoutePath que dirá qual rota é qual, assim ficando mais organizado e menos poluído, atribuindo uma funcionalidade para cada coisa.

Pronto, agora consigo navegar sobre as rotas! Mas ainda não temos nada funcional, correto?

Então para começarmos a "enxergar" as coisas, vamos utilizar o [Axios](https://axios-http.com/docs/intro) para consumir a nossa Api criada anteriormente.
Então na pasta services criamos um arquivo chamado Api, nele iremos fazer a chamada das rotas utilizando o Axios.
Feito isso, criamos a constante carsApi para manuzear as rotas.
No nosso caso, chamamos a getCars para fazer uma requisição na Api(que está com o Cors aberto) e chamamos todos os carros contidos lá. Com isso já conseguiriamos exibir todos os carros que possuimos, passando no componente CardCar a props seguida do valor.

Agora nós precisamos adicionar um carro.

Para isso, utlizaremos a PostCar criada no nosso arquivo **api**.
Ela funciona um pouco diferente da getCars, pois ela muda o método para POST e a rota passa um novo caminho ('/car'). Fazendi isso, ela irá nos retornar a requisição caso tudo ocorra correto ou uma mensagem de alerta no caso de erro.

Prontinho, criamos uma nova página na pasta PAGES chamada de FormCar, e lá chamamos o componente ModalForm que irá dar forma a um formulário de criação!
Mas também devemos ser capazes de atualizar nosso carro, correto? Então passamos um parâmetro na rota chamado de (update) que quando estiver true, ele traz nos inputs os valores do carro para a gente poder atualizar. Sendo assim conseguimos reaproveitar do mesmo formulário para tanto criar como atualizar.

Agora vem a parte de deletar:
- para deletar nós criamos um icon utilizando a galeria de icones do próprio react, a [ReactIcons](https://react-icons.github.io/react-icons/) e encontramos um icone que condiz com a ideia de deletar.

Sendo assim, chamamos no componenente a nossa deleteCar criada no arquivo api da pasta service e vinculamos a esse icone na ação de OnClick, ai clicando nesse icone ele chama a função e executa a exclusão do mesmo.

Agora só falta podermos favoritas e desfavoritas o carro!
Sendo assim, criamos um icone de favorite usando a ReactIcons e passamos se for true um coração colorido e se for false um coração sem cor. Vinculamos a rota FavoriteCar que dá um PATCH no nosso carro e atualiza somente se ele é favorito ou não! Legal e prático!

Pronto, podemos criar, editar, deletar e também favoritar um carro!

Agora chegou a parte de podermos pesquisar um carro pelos atributos e/ou utilizar um "marcador" para escolhermos atributos de pesquisa.

Confesso, não foi muito fácil essa parte... 
Mas consegui! primeiro fiz um [UseState](https://www.w3schools.com/react/react_usestate.asp) para poder mudar o estado do meu filter. Passei parametros de "cor", "marca", "ano" e etc todos em branco para inicializar.
Após, outro UseState para search, que é o da pesquisa sem marcador.

Após criar as regras nas chamadas (getCars por exemplo), na lista de carros criei os filters, chamando pela marca, ano, cor, preço minimo e máximo que são os que poderão ser selecionados como marcadores de pesquisa.
E caso for igual ele retorna na lista de acordo com o item marcado.

-exemplo:
marquei a marca Ford - > ele trará os carros da marca Ford e se eu pesquisar algo, será dentro desse marcador, assim trazendo o que está na marcação e o que estou digitando no input. MUITO DAORA!

e por fim, criei um outro filter com condições de serem iguais, o que eu estou digitando e o que eu tenho na lista. Sendo assim, posso pesquisar qualquer coisa do carro que irá ter o retorno.

-exemplo:

digito uma descrição e ele me traz os carros com aquela descrição, ou digito a cor e por ai vai!

E é isso! De forma beeeem resumida, consegui lhe passar tudo que fiz na aplicação!

Fico à disposição para qualquer eventual dúvida ou exclarecimento!!!

Att, Kellbber Barcarolo




