<p align="center"> React-Native teams... em desenvolvimento</p>


<p align="center">
<a href="#imagens">Imagens </a> -
<a href="#sobre">Sobre </a> -
<a href="#Planejamento">Planejamento </a> -
<a href="#DesigndaInterface">Design da Interface </a> -
<a href="#Dependencias">Depêndencias</a> -
<a href="#autor">Autor </a>
</p>

# Imagens

<p>
- Etapas de uso do App.</br>
</p>

<table border>
    <tr>
        <td>Lista vazia</td>
        <td>Tarefas adicionadas</td>
        <td>Tarefas concluidas</td>
    </tr>
    <tr>
        <td><img src="./image/ReadmeVazia.jpg"/></td>
        <td><img src="./image/ReadmeTarefas.jpg" /></td>
        <td><img src="./image/ReadmeTarefasConcluidas.jpg" /></td>
    </tr>
</table>

# Sobre
<p>
<strong>Meu Idosinho</strong> é um aplicativo intuitivo e acessível, projetado para ajudar idosos a gerenciar suas tarefas diárias com a assistência de um smartphone. Com uma interface amigável e simplificada, o aplicativo garante que os usuários mais velhos possam navegar facilmente e realizar suas atividades sem complicações.
</p>


# Planejamento
<p><strong>1. Planejamento Inicial</strong></p>
<strong>Funcionalidades Principais</strong>
<p><strong>Lista de Compras</strong></p>
- [x] Criar Screen</br>
- [x] Adicionar itens</br>
- [x] Marcar itens como comprados</br>
- [x] Remover itens</br>
- [] Indicadores da Lista dinamicos</br>
- [] Componentizar - Idicadores da Lista dinamicos(...analisar se necessario)</br></br>
- [] Refatorar buttons</br>
- [] Refatorar button ADD do input</br></br>

<p><strong>Lista de Compras - Market Favoritos</strong></p>
- [x] Criar Screen</br>
- [x] Lista de Mercados favoritos</br>
- [x] Lista de Mercados favoritos - Adicionar ao storage </br>
- [x] Lista de Mercados favoritos - Remover ao storage </br>
- [] Salvar e vincular MarketFavorito com a lista criada em `Lista de Compras`</br></br>

<p><strong>Lembretes de Medicamentos</strong></p>
- [x] Criar Screen</br>
- [] Adicionar medicamentos com horários</br>
- [] Notificações para lembrar de tomar os remédios</br>
- [] Histórico de medicamentos tomados</br></br>

<p><strong>Módulo de Finanças</strong></p>
- [x] Criar Screen</br>
- [] Adicionar contas a pagar</br>
- [] Notificações para lembrar de pagar as contas</br>
- [] Histórico de pagamentos</br></br>

# DesigndaInterface
<p><strong>2. Design da Interface
Simplicidade e Acessibilidade
Ícones grandes e intuitivos
Fontes grandes e legíveis
Navegação fácil e direta</strong></p>

<p><strong>3. Desenvolvimento
Estrutura do Projeto
React Native
Utilizaremos React Native para desenvolvimento multi-plataforma (iOS e Android)</strong></p>

# Dependencias
<p><strong>Dependências</strong></p>
-- react-navigation: Para navegação entre telas</br>
-- styled-components: Para estilização</br>
-- @expo-google-fonts/roboto: Para fontes legíveis</br>
-- expo-notifications: Para gerenciar notificações</br>
-- react-navigation/native:Tipo <strong>STACK</strong> Para navegabilidade
-- Outras dependências conforme necessário</br></br>

<p>npx expo install react-native-svg</p>
<p>npx expo install @expo-google-fonts/roboto expo-font</p>
<p>npm install --save phosphor-react-native</p>
<p>npm install styled-components --legacy-peer-deps</p>
<p>npm install --save-dev babel-plugin-module-resolver --legacy-peer-deps</p>

<p><strong>Navegação</strong></p>
<p>Core de navegação</p>

<p>npm install @react-navigation/native --legacy-peer-deps</p>
<p>npx expo install react-native-screens react-native-safe-area-context -- --legacy-peer-deps</p>

<p>Estrategia de navegação:</p>
<p>npm install @react-navigation/native-stack --legacy-peer-deps</p>

<p>Async Storage</p>
<p>npx expo install @react-native-async-storage/async-storage -- --legacy-peer-deps</p>

<p><a href="https://github.com/duongdev/phosphor-react-native">phosphor-react-native</a></p>

# Autor

<p>
Desenvolvido por: :nerd_face: <a href="https://github.com/NeillonWork"><strong> NeillonWork</strong>
</p>