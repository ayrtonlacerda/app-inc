# Solução Para Coleta de Dados

  O appINC é uma solução conjunta entre a Universidade de Brasília(UnB) e o Instituto Nacional de Criminalística(INC), que busca melhorar a ação do perito em campo através de uma aplicação mobile que substitui a prancheta para coleta de dados, oferecendo os recursos de hardwere de um celular como Câmera, GPS, Gravador de áudio entre outros. O appINC é desenvolvido com [React Native](https://facebook.github.io/react-native/) devido a ser uma framework hibrida pode ser usada tanto em Android quanto em IOS.

- [Código Aplicação](https://github.com/ayrtonlacerda/appINC/tree/master/App)
- [Documentação](https://github.com/ayrtonlacerda/appINC/tree/master/Documenta%C3%A7%C3%A3o)

## Fluxogramas

**fluxo do projeto**

![Fluxo do projeto](https://github.com/ayrtonlacerda/appINC/blob/master/Documentação/Fluxogramas/FluxoSolucao.jpg)

**fluxo de autenticação**

Fluxo descritivo do processo de autenticação do perito. O perito possui três estados de autenticação:

1. Todos as funcionalidades do aplicativo estão liberadas.
2. A opção de envio de laudos está bloqueada sendo necessário uma nova autenticação para liberação.
3. Todas as funcionalidades do App serão bloqueadas e só será possível realizar qualquer operação após nova autenticação.


![Fluxo de Autenticação](https://github.com/ayrtonlacerda/appINC/blob/master/Documentação/Fluxogramas/Geral-autenticacao.png)


**Fluxo atualização de POPs**

A cada abertura do aplicativo será verificado se existem novos POPs ou atualizações de POPs já existentes, caso exista haverá atualização automática no aplicativo(caso não ocorra conexão o processo é ignorado até a próxima conexão).

![Fluxo de Autualiza](https://github.com/ayrtonlacerda/appINC/blob/master/Documentação/Fluxogramas/update.jpg)

**Fluxo Nova Perícia**

O processo é definido na seguintes etapas :

1. Autenticação no sistema.
2. Seleção de opção nova Perícia.
3. Seleção de área e subárea da Perícia -  Ao selecionar a área e a subárea identifica o POPs correspondente e gera o formulário.
4. Preenchimento do formulário -  enquanto o perito estiver no formulário, as informações são automaticamente salvas para que seja possível continuar o processo após interrupções eventuais.
5. Envio do formulário - Envia os dados para o servidor na qual será gerado o modelo de laudo pericial.


![Fluxo de Nova Pericia](https://github.com/ayrtonlacerda/appINC/blob/master/Documentação/Fluxogramas/novapericia.png)

**Fluxo Histórico e edição**

Processo que lista os formulários em edição do perito e permite que o mesmo acesse e continue o processo de Pericia.

![Fluxo de Historico](https://github.com/ayrtonlacerda/appINC/blob/master/Documentação/Fluxogramas/historico.jpg)
