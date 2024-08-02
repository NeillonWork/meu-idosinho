<p align="center"> React-Native Meu Idosinho em desenvolvimento</p>

<p align="center">
<a href="#imagens">Imagens </a> -
<a href="#sobre">Sobre </a> -
<a href="#Planejamento">Planejamento </a> -
<a href="#Design da Interface">Design da Interface </a> -
<a href="#Dependencias">Depêndencias</a> -
<a href="#autor">Autor </a>
</p>

# Imagens

<p>
- Etapas de uso do App.</br>
</p>

<table border>
    <tr>
        <td>Telas Versão - Beta</td>
    </tr>
    <tr>
        <td><img src="./src/assets/ReadmeTelas.jpg"/></td>
    </tr>
</table>

# Sobre

<p>
<strong>Meu Idosinho</strong> é um aplicativo intuitivo e acessível, projetado para ajudar idosos a gerenciar suas tarefas diárias com a assistência de um smartphone. Com uma interface amigável e simplificada, o aplicativo garante que os usuários mais velhos possam navegar facilmente e realizar suas atividades sem complicações.
</p>

# Planejamento

<p><strong>1. Planejamento Inicial</strong></p>
<p><strong>Funcionalidades Principais</strong></p>

<strong>#Lista de Compras</strong></br>
- [] Refatorar nome das constantes para facilitar na manutenção 
- [x] Criar Screen</br>
- [x] Adicionar itens</br>
- [x] Marcar itens como comprados</br>
- [x] Remover itens</br>
- [x] Remover itens - REFATORAR apos nova função de vincular mercado a lista de compras</br>
- [] Indicadores da Lista dinamicos</br>
- [] Componentizar - Idicadores da Lista dinamicos(...analisar se necessario)</br></br>
- [] Refatorar buttons</br>
- [] Refatorar button ADD do input</br></br>

<strong>#Lista de Compras - Market Favoritos</strong></br>
- [x] Criar Screen</br>
- [x] Lista de Mercados favoritos</br>
- [x] Lista de Mercados favoritos - Adicionar ao storage </br>
- [x] Lista de Mercados favoritos - Remover ao storage </br>
- [x] Salvar e vincular MarketFavorito com a lista criada em `Lista de Compras`</br></br>

<strong>#Lembretes de Medicamentos</strong></br>
- [x] Criar Screen</br>
- [] Adicionar medicamentos com horários</br>
- [] Notificações para lembrar de tomar os remédios</br>
- [] Histórico de medicamentos tomados</br></br>

<strong>#Módulo de Finanças</strong></br>
- [x] Criar Screen</br> 
- [] Adicionar contas a pagar</br>
- [] Notificações para lembrar de pagar as contas</br>
- [] Histórico de pagamentos</br></br>

# Design da Interface

<p><strong>1. Design da Interface
Simplicidade e Acessibilidade
Ícones grandes e intuitivos
Fontes grandes e legíveis
Navegação fácil e direta</strong></p>

<p><strong>2. Desenvolvimento</br>
Estrutura do Projeto:</br>
React Native para desenvolvimento multi-plataforma (iOS e Android)</strong></p>

# Dependencias

<p><strong>Dependências</strong></p>
-- react-navigation: Para navegação entre telas</br>
-- styled-components: Para estilização</br>
-- @expo-google-fonts/roboto: Para fontes legíveis</br>
-- expo-notifications: Para gerenciar notificações</br>
-- react-navigation/native:Tipo <strong>STACK</strong> Para navegabilidade
-- Outras dependências conforme necessário</br></br>
<ul>
    <li>npx expo install react-native-svg</li>
    <li>npx expo install @expo-google-fonts/roboto expo-font</li>
    <li>npm install --save phosphor-react-native</li>
    <li>npm install styled-components --legacy-peer-deps</li>
    <li>npm install --save-dev babel-plugin-module-resolver --legacy-peer-deps</li>
    <li>npm install @react-navigation/native --legacy-peer-deps</li>
    <li>npx expo install react-native-screens react-native-safe-area-context -- --legacy-peer-deps</li>
    <li>npm install @react-navigation/native-stack --legacy-peer-deps</li>
    <li>npx expo install @react-native-async-storage/async-storage -- --legacy-peer-deps</li>
    <li><a href="https://github.com/duongdev/phosphor-react-native">phosphor-react-native</a></li>
</ul>

# Autor

<p>
Desenvolvido por: :nerd_face: <a href="https://github.com/NeillonWork"><strong> NeillonWork</strong>
</p>
