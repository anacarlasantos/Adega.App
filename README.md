# Adega.App
Este repositório contém o código para uma aplicação simples MEAN (MongoDB, Express.js, Angular, Node.js). A aplicação consiste em um servidor básico implementado usando Node.js e Express.js, com o MongoDB como banco de dados.

Sumário
Pré-requisitos
Instalação
Configuração
Uso
Endpoints
Contribuições
Licença
Pré-requisitos
Certifique-se de ter o seguinte software instalado em sua máquina:

Node.js - Tempo de execução JavaScript
MongoDB - Banco de dados NoSQL
Instalação
Clone o repositório em sua máquina local:

bash
Copy code
git clone https://github.com/seu-nome-de-usuário/aplicacao-mean-stack.git
Navegue até o diretório do projeto:

bash
Copy code
cd aplicacao-mean-stack
Instale as dependências necessárias:

bash
Copy code
npm install
Configuração
Configure as configurações de conexão do MongoDB no arquivo index.js. Atualize a URL de conexão no método mongoose.connect.

javascript
Copy code
mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true, useUnifiedTopology: true })
Uso

Inicie o servidor executando o seguinte comando:
bash
Copy code
npm start
Isso iniciará o servidor na porta padrão (3000).

Endpoints

GET /produto
Retorna uma lista de produtos.
POST /produto
Adiciona um novo produto. Envie os detalhes do produto no corpo da solicitação no formato JSON.
GET /produto/:id
Retorna um produto específico com base no ID.
PUT /produto/update/:id
Atualiza um produto com base no ID. Envie os detalhes do produto a serem atualizados no corpo da solicitação no formato JSON.
DELETE /produto/delete/:id
Deleta um produto com base no ID.




Este repositório também contém o código-fonte para uma aplicação React Native voltada para a criação, edição e visualização de produtos. A aplicação interage com um servidor remoto para enviar e receber dados relacionados a produtos. Abaixo estão os detalhes dos componentes CreateProduct, Home, e Profile:

Sumário
Pré-requisitos
Instalação
Uso
Componente CreateProduct
Descrição
Funcionalidades
Modo de Uso
Componente Home
Descrição
Funcionalidades
Modo de Uso
Componente Profile
Descrição
Funcionalidades
Modo de Uso
Contribuições
Licença
Pré-requisitos
Certifique-se de ter o seguinte software instalado em sua máquina:

Node.js - Tempo de execução JavaScript
Expo - Ferramenta para desenvolvimento React Native
Instalação
Clone o repositório em sua máquina local:

bash
Copy code
git clone https://github.com/seu-nome-de-usuário/app-react-native.git
Navegue até o diretório do projeto:

bash
Copy code
cd app-react-native
Instale as dependências necessárias:

bash
Copy code
npm install
Uso
Inicie a aplicação utilizando o Expo:

bash
Copy code
expo start
Isso iniciará o aplicativo React Native no Expo DevTools.


Componente CreateProduct
Descrição
O componente CreateProduct é responsável pela criação e edição de produtos. Ele integra funcionalidades de interação com a câmera ou galeria para o upload de imagens. Além disso, permite ao usuário preencher detalhes do produto, como nome, preço, tipo, país de origem, região e descrição.

Funcionalidades
Criação de Produto:
Permite ao usuário preencher os detalhes do produto e salvá-los no servidor.
Suporta o upload de imagens da câmera ou galeria.
Edição de Produto:
Se a rota incluir parâmetros (route.params), o componente assume que está sendo utilizado para editar um produto existente.
Carrega automaticamente os detalhes do produto existente para edição.

Modo de Uso
Preenchimento de Detalhes:
Os detalhes do produto, como nome, preço, tipo, país de origem, região e descrição, são inseridos nos campos apropriados.
Upload de Imagem:
O botão "Upload de Imagem" permite ao usuário escolher uma imagem da câmera ou galeria para associar ao produto.
Ação:
O botão "Salvar" cria um novo produto ou atualiza um existente, dependendo da presença de route.params.
Em caso de sucesso, exibe um alerta e redireciona o usuário para a tela inicial.
Modal de Upload de Imagem:
Ao pressionar o botão de upload de imagem, um modal é exibido, fornecendo opções para escolher uma imagem da câmera ou galeria.
Componente Home
Descrição
O componente Home é responsável por exibir uma lista de produtos recuperados do servidor. Ele inclui um carrossel no topo, que pode ser personalizado conforme necessário.

Funcionalidades
Recuperação de Dados:
Utiliza Redux para gerenciar o estado global e compartilhar dados entre componentes.
Recupera dados do servidor remoto e os exibe na lista.

Modo de Uso

Carrossel:
Um carrossel é exibido no topo da tela com dados fictícios (dummyData). Pode ser personalizado para exibir produtos em destaque, banners ou qualquer conteúdo desejado.
Lista de Produtos:
Abaixo do carrossel, uma lista de produtos é exibida. Cada item da lista é clicável, redirecionando para a tela de detalhes do produto.
Ação do Botão FAB:
O botão FAB (Floating Action Button) no canto inferior direito direciona o usuário para a tela de criação de produtos (CreateProduct).
Atualização de Dados:
A lista pode ser atualizada puxando para baixo, o que aciona a função fetchData para recuperar dados atualizados do servidor.
Componente Profile
Descrição
O componente Profile exibe detalhes específicos de um produto selecionado. Permite a visualização, edição e exclusão do produto.

Funcionalidades
Visualização de Detalhes:
Exibe detalhes do produto, como nome, preço, tipo, país de origem, região e descrição.
Contato:
Permite a comunicação por e-mail ou chamada telefônica.
Edição e Exclusão:
Oferece a funcionalidade de editar o produto ou excluí-lo permanentemente.
Modo de Uso

Visualização de Detalhes:
Apresenta detalhes do produto, incluindo nome, preço, tipo, país de origem, região, descrição, e outras informações relevantes.
Ações de Contato:
Os botões "Email" e "Telefone" permitem ao usuário entrar em contato com o produto, seja por e-mail ou chamada telefônica.
Ações de Edição e Exclusão:
Os botões "Editar" e "Deletar" permitem ao usuário modificar as informações do produto ou excluí-lo permanentemente.
Confirmação de Exclusão:
Ao pressionar o botão "Deletar", exibe uma confirmação para evitar exclusões acidentais.
Edição do Produto:
O botão "Editar" redireciona o usuário para a tela de edição de produtos (CreateProduct) com os detalhes do produto preenchidos.
Contribuições
Sinta-se à vontade para contribuir para o projeto. Se encontrar problemas ou tiver sugestões de melhorias, abra uma issue ou crie uma pull request.


