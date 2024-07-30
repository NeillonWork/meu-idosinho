<p><strong>1. Planejamento Inicial</strong></p>
<strong>Funcionalidades Principais</strong>
<p><strong>Lista de Compras</strong></p>
[x] Criar Screen
[x] Adicionar itens</br>
[x] Marcar itens como comprados</br>
[x] Remover itens</br></br>
[] Idicadores da Lista dinamicos
[] Componentizar - Idicadores da Lista dinamicos(...analisar se necessario)
[] Refatorar buttons</br></br>
[]  Refatorar button ADD do input</br></br></br></br>

<p><strong>Lista de Compras - Market Favoritos</strong></p>
[x] Criar Screen
[x] Lista de Mercados favoritos</br></br>
[x] Lista de Mercados favoritos - Adicionar ao storage </br></br>
[x] Lista de Mercados favoritos - Remover ao storage </br></br>
[] Salvar e vincular MarketFavorito com a lista criada em `Lista de Compras`

<p><strong>Lembretes de Medicamentos</strong></p>
[x] Criar Screen
[] Adicionar medicamentos com horários</br>
[] Notificações para lembrar de tomar os remédios</br>
[] Histórico de medicamentos tomados</br></br>

<p><strong>Módulo de Finanças</strong></p>
[x] Criar Screen
[] Adicionar contas a pagar
[] Notificações para lembrar de pagar as contas
[] Histórico de pagamentos

<p><strong>2. Design da Interface
Simplicidade e Acessibilidade
Ícones grandes e intuitivos
Fontes grandes e legíveis
Navegação fácil e direta</strong></p>

<p><strong>3. Desenvolvimento
Estrutura do Projeto
React Native
Utilizaremos React Native para desenvolvimento multi-plataforma (iOS e Android)</strong></p>

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
