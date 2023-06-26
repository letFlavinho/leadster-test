Olá, me chamo Flávio Bulhões. Sou desenvolvedor especializado em front-end, aqui irei comentar os passos por trás do conjunto do projeto envolvendo o teste de front end da vaga, isso será extremamente válido para meu aprendizado, agregará muito no meu futuro. Então...

```
     npx create-next-app@latest

```

Este comando é a coisa mais eficiente da criação do projeto Next, Next é uma biblioteca de React, junto com este comando já posso configurar muitas coisas como ESLint, TypeScript e mais, muito rápido já trás tudo que eu preciso, a pasta app para otimizar o sistema de rotas no projeto, podia até ter colocado logo um TailWind fácil, mas nesse projeto vamos usar o Styled Components, é isso mesmo que eu vou colocar agora no projeto.

```
     npm install styled-components@5.3.10 @types/styled-components

```

Precisei rodar este comando para instalar no meu projeto com TypeScript os tipos do styled-components junto com o mesmo. Agora dá para fazer tudo que eu preciso sem nenhum possível erro envolvendo styled components com typescript. Agora eu sigo criando os itens dos quais vão ser reaproveitados com um possível segmento do projeto, na pasta components estes se encontrarão.

Aqui tenho duas opções, posso usar inclusive as duas ao mesmo tempo. Como o produto consiste em uma single page, ou seja, uma página será o suficiente para as funcionalidades do projeto, então posso começar a fazer tudo de uma vez num só arquivo tsx e depois fragmentar as sessões da página, transformando-as em componentes, como também posso fazer o contrário, fazendo os componentes antes e encaixando na página depois, não tem problema, a ordem dos fatores não altera o resultado. O importante é que a parte visual é feita primeiro com o objetivo de no momento da tratativa de dados, funcionar independente do visual, pois a lógica já estará estabelecida na hora que eu fizer.
