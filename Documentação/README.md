##Documentação

O appINC utiliza componentes de terceiros, são eles:

* [react-native-audio](https://github.com/jsierles/react-native-audio)
* [react-native-datepicker](https://github.com/xgfe/react-native-datepicker)
* [react-native-image-picker](https://github.com/react-community/react-native-image-picker)
* [react-native-sound](https://github.com/zmxv/react-native-sound)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
* [react-navigation](https://reactnavigation.org/)
* [Reactotron](https://github.com/infinitered/reactotron)
* [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
* [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)
* [Redux](https://redux.js.org/)
* [axios](https://github.com/axios/axios)

### Redux

Para controlar a o estado da nossa aplicação e manipular melhor o fluxo de dados, escolhemos o redux que otimiza o tratamento de dados bem como as requisições facilitando a construção e renderização de telas e formulários.

* [Redux](https://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)

### Reactotron

Utilizamos o reactotron e suas extenções como ferramenta de debug devido a sua facilidade de analisar o redux(state, actions e requisições) de forma mais detalhada além de outras informações uteis.

* [Reactotron](https://github.com/infinitered/reactotron)
* [Reactotron redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
* [Reactotron redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)

### Componentes
##### 1. Camera

Componente que permite tirar fotos e selecionar fotos já existentes na galeria do celular.

* [react-native-image-picker](https://github.com/react-community/react-native-image-picker)

##### 2. Gravador de Audio

Componente que permite gravar audio e executar atraves de uma mescla de dois componentes, um para gravar(react-native-audio) e outro para reproduzir(react-native-sound).

* [react-native-audio](https://github.com/jsierles/react-native-audio)
* [react-native-sound](https://github.com/zmxv/react-native-sound)

##### 3. Selecionar Data

Componente que utiliza o seletor de data e hora nativo do android.

* [react-native-datepicker](https://github.com/xgfe/react-native-datepicker)

##### 4. Icones

Utilizamos um componente que junto varias bibliotecas em um mesmo componente, fornecendo uma vasta quantidade de icones.

* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
* [Bibliote de pesquisa](https://oblador.github.io/react-native-vector-icons/)

##### 5. Geolocalização

A geolocalização usamos a forma nativa do android atraves do gps do celualar para obtermos coordenadas e acuracia.

##### 6. Entrada de Texto

Usamos na entrada de texto um componente padrão da biblioteca do react native.

* [TextInput](https://facebook.github.io/react-native/docs/textinput)

##### 7. Leito de Codigo de Barras

* [react-native-barcode-scanner-google](https://www.npmjs.com/package/@nois/react-native-barcode-scanner-google)
