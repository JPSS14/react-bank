# React Bank

React Bank é um simulador de banco, onde busco testar o uso do Sass e treinar o desenvolvimento de interfaces, além de enfatizar o uso de React, Next js e seus benefícios. Logo percebi que era possível implementar regras de negócio, seguem algumas abaixo.

![react-bank-count](https://user-images.githubusercontent.com/40327303/115132319-84375000-9fd5-11eb-8654-9635fb90b03b.png)

![react-bank-friend](https://user-images.githubusercontent.com/40327303/115132308-771a6100-9fd5-11eb-851a-7cef2763df4e.png)

# Regra de negócio

## Saldo
Inserir saldo

## Pix 
Abre a lista de amigos com suas informações e chaves de pix, você pode transferir qualquer valor desde que não supere seu saldo atual ou plano.

## Transferência
Abre a lista de amigos com o número de suas respectivas contas. Você pode transferir qualquer valor desde que não supere seu saldo atual ou plano.

## Planos
Existem 3 tipos de planos cada um com seus requisitos e vantagens.

### Prata
Requisito: Ter no mínimo R$ 1000,00 de saldo.
Vantagens: Ficar com até R$ - 1000,00, ter R$ 1000,00 no cartão de crédito e pegar R$ 1000,00 de empréstimo.

### Ouro
Requisito: Ter no mínimo R$ 5000,00 de saldo.
Vantagens: Ficar com até R$ - 5000,00, ter R$ 5000,00 no cartão de crédito e pegar R$ 5000,00 de empréstimo.

### Platina
Requisito: Ter no mínimo R$ 15000,00 de saldo.
Vantagens: Ficar com até R$ - 15000,00, ter R$ 15000,00 no cartão de crédito, pegar R$ 15000,00 de empréstimo e pode fazer financiamento de casas e carros.

## Produtos
Existem 4 categorias de produtos(smartphones, carros, casas e viagens), os produtos podem ser pagos com o saldo(débito), crédito, empréstimo, e em alguns casos financiamento. Também é possível fazer combinações como saldo + crédito. O financiamento só é permitido para carros e casas com o plano platina.

## Empréstimo
O empréstimo só é permitido para planos e o limite é de acordo com cada plano, o valor será atribuído ao seu saldo. Para pagar o empréstimo deverá ser descontado do seu saldo o valor do empréstimo + 20% de acréscimo.

## Crédito
Pode ser solicitado caso participe de algum plano, e seu limite é de acordo com seu plano.

## Dívidas
É apresentado todos os créditos que foram usados, empréstimos em aberto e financiamentos. Todos só podem ser pagos com o saldo.
