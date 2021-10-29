<h1 align="center">
<img src="https://media-exp1.licdn.com/dms/image/C4D1BAQHfQr7OKzw3qw/company-background_10000/0/1625601466872?e=2159024400&v=beta&t=FhYCbZr68ojz3lfyYUPV-M4lziID87ji6A-oat_okZ4" title="We Are ACCT" />
</h1>

<h3 align="center">
  Hiring Coders <br> Desafio Final <br>  Grupo 25
</h3>

<p align="center">
  <a href="#-sobre o desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#diagrama-da-estrutura-do-projeto">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#repositórios">Repositórios</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#dependências-entre-repositórios">Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>
</p>

## 👨🏻‍💻 Sobre o desafio

- <p>Desenvolver um projeto com o uso de API, sendo que os grupos serão divididos em 3 apresentações (em datas diferentes para bancas diferentes)!
- O projeto deverá ser o mesmo para os 3 grupos, o que muda é a temática da API que eles vão puxar, que deve estar relacionada com o mercado de cada patrocinador!! Sendo eles:
  - [AWS](https://aws.amazon.com/pt/)</br>
  - [ACCT](https://acct.global)</br>
  - [Corebiz](https://www.corebiz.ag/pt/)
  </p>

### Repositório original do projeto
https://github.com/victorhgadioli/hiringcoders2021-finalChallenge
### VTEX IO API + AWS

- Com o projeto criado anteriormente no VTEX IO do desafio 1 criar uma API para servir os projetos e os pedidos vendidos (API VTEX).

### AWS API Gateway

- Criar uma API para gerenciamento de venda ativa na AWS - O objetivo desta API é gerenciar os clientes que se cadastraram em uma lead ou os clientes que já compraram no e-commerce, fazendo com que a equipe de pós-venda possa entrar em contato com os clientes tentando fazer venda Ativa/Casada ou UPSELL.

### VTEX Hook

- Agora que você tem uma API na AWS e uma API ne VTEX, faça uma ligação entre as duas APIs. Ao concluir uma compra, verificar se o usuário que finalizou é o mesmo usuário cadastrado na lead da API AWS, marcar este usuário que era somente um prospect na lead agora como cliente.

### A temática proposta para o Grupo 25 foi a ACCT</br>

#### Front-End
Neste front-end teremos a temática da ACCT, com logo, cores, a missão e valores da ACCT em uma página de **sobre**
- Nesta página de **Sobre**, mostrar as virtudes do serviço da ACCT
- https://acct.global/pt/sobre-nos/
![sobre-nos](https://user-images.githubusercontent.com/1951762/131201433-6f58da5d-2453-4324-a95e-53fed286c5aa.png)
- Criar uma página para trazer os dados da API VTEX IO criada no tópico acima, para trazer a lista de produtos cadastrados.
- Criar uma página para trazer a lista das leads cadastradas na API Gateway na AWS, listando os clientes cadastrados

#### Critério opcional
- Criar um item no adm do VTEX para trazer o conteúdo das leads cadastradas na API Gateway AWS

### 💻 Desenvolvedores
- [André Moraes](https://github.com/andreLTMoraes)
- [Anna Laura](https://github.com/alauraivani)
- [Cristiano Souza Santana](https://github.com/CristianoSantan)
- [Fabiano Pereira](https://github.com/ifabianoi)
- [Maria (Marrô) Rosa Müller ](https://github.com/Marro-Muller)
- [Otávio Cleyderman Ferraz Faria](https://github.com/OtavioCleyderman)
- [Pedro Laranjeira](https://github.com/pedroasso)
- [Reginaldo Oliveira](https://github.com/Reginaldo007oliveira)
- [Victor Martins](https://github.com/VictorFerreiraMartins)
- [Victor Hugo Gadioli](https://github.com/victorhgadioli)




## Diagrama da estrutura do projeto

<img alt="diagrama" width="800px" src="https://user-images.githubusercontent.com/1951762/131526574-e23c1be1-babd-47df-9117-7c5967fff523.jpg"></img>

## Repositórios

Cada app da VTEX e as funções lambdas da AWS terão seus próprios repositórios para controle individual. Desta forma, conflitos entre arquivos são evitados e a linkagem entre os apps apenas acontecem dentro do sistema do VTEX IO.

- [Loja](https://github.com/victorhgadioli/hiringcoders2021-finalChallenge)
- [Formulário de cadastro de lead](https://github.com/victorhgadioli/hiringcoders2021-finalChallenge-leadFormBlock)
- [Tabela de leads](https://github.com/victorhgadioli/hiringcoders2021-finalChallenge-leadTableBlock)
- [API de leads na AWS](https://github.com/victorhgadioli/hiringcoders2021-finalChallenge-AWS-API)
- [Serviço de GraphQL para leads](https://github.com/victorhgadioli/hiringcoders2021-finalChallenge-GraphQL-service)
- [VTEX Hook](https://github.com/victorhgadioli/hiringcoders2021-finalChallenge-VTEX-Hook)



## Dependências entre repositórios

Esta parte é essencial para o correto funcionamento da integração dos apps dos repositórios. As linkagens dos apps ao sistema do VTEX IO deve iniciar pelo app que não possui dependência de outros apps da VTEX. Já o funcionamento do AWS API Gateway é essencial para que o Serviço de GraphQL possa retornar dados mas não é pré-requisito para linkar este app ao sistema do VTEX IO.

<img alt="dependencias" width="800px" src="https://user-images.githubusercontent.com/1951762/131526653-a2c21f9c-33b2-4de1-a06e-a6e266135a66.jpg"></img>



## 🚀 Tecnologias

Tecnologias que utilizamos para desenvolver esta API Rest:

- [VTEX IO](https://vtex.io/)
- [React](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [AWS DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)
- [AWS Lambda](https://aws.amazon.com/pt/lambda/)
- [GraphQL](https://graphql.org/)

## 🏆 Resultado

[<img src="https://i.ytimg.com/vi/VLG98BJXcL4/hqdefault.jpg" width="50%">](https://youtu.be/VLG98BJXcL4)

