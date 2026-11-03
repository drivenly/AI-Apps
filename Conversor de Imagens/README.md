# Conversor de Imagens

Converte imagens em lote direto no navegador. Nenhuma imagem é enviada para a internet: todo o processamento acontece no seu computador, por isso não há limite de tamanho nem de quantidade.

## Como usar

1. Baixe o arquivo [conversor-imagens.html](conversor-imagens.html). Na página que abrir, use o botão de download.
2. Abra o arquivo no Chrome, no Edge ou no Firefox. Não é preciso instalar nada.
3. Escolha o formato e a qualidade, e arraste as imagens ou pastas para a página.
4. Baixe as imagens uma a uma ou todas juntas em um arquivo .zip.

## O que ele faz

- **Formatos de saída:** WebP, JPEG e PNG, além de AVIF quando o navegador consegue gerar esse formato.
- **Qualidade:** ajuste de 1 a 100 nos formatos com perda, com dicas sobre o equilíbrio entre peso e nitidez.
- **Dimensões:** limita a largura e a altura máximas, mantendo a proporção e sem aumentar imagens pequenas.
- **Transparência:** no JPEG, que não guarda transparência, você escolhe a cor de fundo.
- **Entrada:** arraste arquivos ou pastas, escolha pelo botão, ou cole uma imagem com **Ctrl+V**.
- **Comparação:** abra uma imagem convertida e segure o botão para ver o original.
- **Download em lote:** o .zip mantém a estrutura de pastas que você enviou.
- **Privacidade:** remove metadados como EXIF e localização GPS.
- **Memória:** lembra as suas últimas configurações neste navegador.

## Limitações

- **HEIC e TIFF:** fotos de iPhone (HEIC) e arquivos TIFF só funcionam se o navegador conseguir lê-los, o que normalmente não acontece.
- **Animações:** GIFs e WebPs animados viram uma imagem estática, com o primeiro quadro.
- **Idioma:** a interface está em português.

## Licença

[GPL-2.0-or-later](../LICENSE). Oferecido como está, sem garantia.

---

## English

A batch image converter that runs entirely in your browser: nothing is uploaded. Download [conversor-imagens.html](conversor-imagens.html) and open it in Chrome, Edge or Firefox. It converts to WebP, JPEG, PNG or AVIF (when supported), with quality and maximum size controls, folder and paste support, a before/after comparison, and .zip downloads. It strips metadata such as EXIF and GPS. HEIC and TIFF depend on browser support, animations become a still image, and the interface is in Portuguese. Licensed under [GPL-2.0-or-later](../LICENSE), provided as is.
