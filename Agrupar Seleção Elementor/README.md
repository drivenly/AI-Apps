# Agrupar Seleção para Elementor

Plugin do WordPress que traz para o editor do Elementor V4 um atalho que faz falta para quem vem do Figma: selecionar várias camadas, pressionar uma tecla e ter tudo agrupado em uma nova div.

| Atalho | Resultado |
|---|---|
| **Ctrl+Alt+G** | Agrupa em um **Div block**, como o agrupamento em frame do Figma |
| **Shift+A** | Agrupa em um **Flexbox**, em linha, como o auto layout do Figma |

No Mac, o Elementor troca Ctrl por Cmd, então o primeiro atalho deve ser **Cmd+Option+G**. Isso ainda não foi testado em um Mac.

## Requisitos

- WordPress 6.5 ou mais recente.
- Elementor 4 com os elementos atômicos (V4) ativos. Sem eles, o plugin só mostra um aviso e não faz nada.
- Testado com o Elementor 4.3.5 (versão gratuita) no Chrome, no Windows. Ainda não foi testado com o Elementor Pro.

## Instalação

1. Baixe o arquivo [agrupar-selecao.zip](agrupar-selecao.zip). Na página que abrir, use o botão de download.
2. No painel do WordPress, vá em **Plugins > Adicionar novo > Enviar plugin**, escolha o arquivo e clique em **Instalar agora**.
3. Ative o plugin.

Comece por um site de teste ou de homologação, e não pelo site que já está no ar.

## Como usar

1. No editor do Elementor, abra o painel **Structure** (estrutura) com **Ctrl+I**.
2. Clique em uma camada e use **Ctrl+clique** para adicionar outras à seleção.
3. Pressione **Ctrl+Alt+G** ou **Shift+A**.

Para desfazer, pressione **Ctrl+Z** uma vez.

## O que o plugin faz

- **Ordem:** os elementos ficam na ordem em que estão nas camadas, não na ordem em que foram clicados.
- **Posição:** a nova div aparece no lugar do primeiro elemento selecionado.
- **Seleção:** a nova div já fica selecionada, pronta para ajustar.
- **Estilos:** cada elemento mantém os próprios estilos e classes.
- **Desfazer:** um único Ctrl+Z desfaz todo o agrupamento.

## Quando o plugin se recusa a agrupar

Nesses casos ele mostra um aviso e não altera nada:

- **Níveis diferentes:** só agrupa elementos que estejam dentro do mesmo elemento pai.
- **Estrutura de outros elementos:** não agrupa as partes internas de tabs, acordeões e similares, para não quebrar esses elementos. O conteúdo livre dentro de uma aba ou de um item de acordeão pode ser agrupado normalmente.
- **Layout antigo:** não agrupa seções e colunas do Elementor clássico.
- **Digitação:** o atalho é ignorado enquanto você escreve em um campo ou edita um texto.

## Limitações conhecidas

- **Selecione pelo painel Structure:** clicar em um texto na área de visualização abre a edição desse texto, e o atalho passa a ser tratado como digitação.
- **Busca de widgets:** ao selecionar vários elementos, o Elementor coloca o cursor na busca de widgets. Se você digitar **Shift+A** ali com a busca vazia, o plugin agrupa em vez de escrever "A".
- **Refazer:** depois de um Ctrl+Z, o cursor pode voltar para essa busca. Nesse caso, clique em outro ponto da tela antes de usar Ctrl+Shift+Z. Esse comportamento vem do próprio Elementor.
- **Atualizações do Elementor:** o V4 ainda está mudando bastante. Uma atualização pode fazer o atalho parar de funcionar até que o plugin seja ajustado. O conteúdo das suas páginas não depende do plugin: uma div criada com ele é uma div comum.
- **Ainda não testado:** Elementor Pro, Mac, outros navegadores, elementos com classes globais e imagens.

## Segurança

O plugin é pequeno e fácil de revisar: são cerca de 30 linhas de PHP e 170 de JavaScript, na pasta [agrupar-selecao](agrupar-selecao/).

- **PHP:** só pede ao WordPress para carregar o script quando o editor do Elementor abre.
- **JavaScript:** só reage aos dois atalhos e usa os comandos do próprio Elementor. Assim, só consegue agrupar elementos quem já está logado e tem permissão para editar a página.
- **O que ele não faz:** não cria formulários nem endereços de acesso, não grava diretamente no banco de dados, não recebe arquivos e não se comunica com outros servidores.
- **Para visitantes:** não carrega nada nas páginas públicas do site.

## Arquivos

- [agrupar-selecao/](agrupar-selecao/): código-fonte do plugin.
- [agrupar-selecao.zip](agrupar-selecao.zip): o mesmo código, pronto para instalar. Ao alterar o código, gere o zip de novo compactando a pasta `agrupar-selecao` inteira.

## Licença

[GPL-2.0-or-later](../LICENSE). Projeto independente, sem relação com o Elementor. Oferecido como está, sem garantia.

---

## English

A WordPress plugin that adds Figma-style grouping to the Elementor V4 editor: select layers, press a key, and they are wrapped in a new container.

| Shortcut | Result |
|---|---|
| **Ctrl+Alt+G** (Mac: Cmd+Option+G, untested) | Wraps the selection in a **Div block** |
| **Shift+A** | Wraps the selection in a **Flexbox** (row) |

**Requirements:** WordPress 6.5+ and Elementor 4 with atomic elements (V4) turned on. Tested with Elementor 4.3.5 (free) in Chrome on Windows; not yet tested with Elementor Pro.

**Install:** download [agrupar-selecao.zip](agrupar-selecao.zip), then go to **Plugins > Add New > Upload Plugin** in WordPress and activate it. Try it on a staging site first.

**Use:** open the **Structure** panel (Ctrl+I), Ctrl+click the layers you want, then press a shortcut. Ctrl+Z undoes the whole grouping in one step. Elements keep their layer order and styles, and the new container takes the place of the first selected element.

**It refuses to group** (with a notice) elements from different levels, the internal parts of tabs, accordions and similar elements, and classic sections and columns. Shortcuts are ignored while you type in a field or edit text.

**Security:** the plugin only loads a script in the Elementor editor. It has no forms or endpoints, makes no direct database writes, accepts no uploads, and sends no data anywhere.

Licensed under [GPL-2.0-or-later](../LICENSE). Not affiliated with Elementor. Provided as is, without warranty.
