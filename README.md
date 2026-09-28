# ASCEND: Visual Masculino

Landing page da Elite Ascension, pronta para publicação como site estático. Usa somente HTML5, CSS3 e JavaScript puro. Não exige instalação, build, banco de dados, fontes externas ou servidor próprio.

## Abrir a página

Abra `index.html` no navegador. Mantenha os arquivos e a pasta `assets` juntos. Os caminhos são relativos, inclusive quando o site é publicado dentro de uma subpasta.

A prévia temporária desta sessão está em [http://127.0.0.1:4173/](http://127.0.0.1:4173/). Ela funciona neste computador enquanto o processo de prévia estiver ativo. Para abrir depois, basta usar `index.html`; esse servidor de teste não faz parte do produto nem da publicação.

## Arquivos para publicar

```text
index.html
styles.css
script.js
assets/
  favicon.svg
  ascend-mockup.webp
  ascend-mockup-claro.webp
  ascend-capa.webp
  formatos-de-rosto.webp
  vocabulario-do-corte.webp
  referencias-do-corte.webp
  cuidados-cacheados.webp
  modelos-de-barba.webp
  modelos-de-sobrancelhas.webp
README.md
```

`index.html`, `styles.css`, `script.js` e `assets/` são suficientes para o site. O README pode acompanhar a pasta como documentação. Não renomeie imagens sem atualizar as referências no HTML e no CSS.

## Publicar no Netlify

1. Entre na sua conta e abra [Netlify Drop](https://app.netlify.com/drop).
2. Arraste a pasta que contém diretamente `index.html`, `styles.css`, `script.js` e `assets/` para a área de publicação.
3. Aguarde a publicação e abra o endereço fornecido pelo Netlify.
4. Para atualizar, arraste a pasta completa e atualizada para a área de deploys do mesmo projeto.

Não há comando de build. Publique a pasta da página, sem colocar o PDF original nela. Consulte as [instruções oficiais de publicação manual do Netlify](https://docs.netlify.com/deploy/create-deploys/).

## Publicar na Vercel

1. Envie os arquivos desta pasta para um repositório Git.
2. Na Vercel, crie um projeto e importe esse repositório.
3. Em **Framework Preset**, selecione **Other**.
4. Em **Root Directory**, escolha a pasta que contém `index.html`. Se o HTML estiver na raiz do repositório, mantenha a raiz.
5. Ative a substituição de **Build Command** e deixe o campo vazio. Deixe **Install Command** vazio também: não há dependências.
6. Em **Output Directory**, use `.` para servir a própria pasta escolhida como raiz. Não use `dist`, `build` ou `public`, pois essas pastas não fazem parte desta entrega.
7. Clique em **Deploy** e abra o endereço gerado.

Consulte a [documentação oficial da Vercel para projetos estáticos sem build](https://vercel.com/docs/builds/configure-a-build).

Nenhuma configuração de outra hospedagem, função de servidor ou serviço proprietário foi adicionada.

## Checkout e valores

Os seis links de compra apontam para:

[Checkout ASCEND na Cakto](https://pay.cakto.com.br/37tpnca_1105302)

- Ebook: **R$ 14,90**.
- Taxa adicional: **R$ 0,99**.
- Total informado: **R$ 15,89**.

Os valores estão no HTML para continuar visíveis sem JavaScript. Se a oferta mudar, atualize os preços na primeira dobra, comparação, oferta, FAQ, encerramento, barra de compra e metadados. O checkout externo deve refletir os mesmos valores; esta página não altera a configuração da Cakto.

### Preço regular de R$ 49,90: desativado

A apresentação riscada está preparada no HTML com `data-regular-price` e `hidden`. No início de `script.js`, a opção `REGULAR_PRICE_CONFIRMED` permanece **false**.

Somente após o responsável confirmar que **R$ 49,90 é um preço regular verdadeiro**, registre essa confirmação internamente e altere a opção para `true`. Isso exibe “De R$ 49,90” acima do total atual. Sem JavaScript, o preço riscado continuará oculto por segurança; a oferta atual continua disponível.

Nenhum histórico de preço, percentual de desconto, prazo promocional, escassez, depoimento, número de compradores ou política de garantia foi inventado. Uma FAQ sobre garantia ou reembolso deve ser adicionada apenas após confirmação da política do produto.

## Imagens e demonstração

As artes fornecidas foram preservadas e otimizadas em WebP. Clark aparece nas capas, nos mockups e nas páginas originais. As amostras foram renderizadas diretamente destas páginas do PDF:

| Imagem | Página original | Conteúdo |
| --- | --- | --- |
| `formatos-de-rosto.webp` | 13 | Formatos de rosto sem regras rígidas |
| `vocabulario-do-corte.webp` | 17 | Regiões e vocabulário do corte |
| `referencias-do-corte.webp` | 25 | Frente, perfil e parte posterior |
| `cuidados-cacheados.webp` | 66 | Fitagem simples e acabamento |
| `modelos-de-barba.webp` | 109 | Rosto barbeado e barba por fazer |
| `modelos-de-sobrancelhas.webp` | 107 | Direção e altura das sobrancelhas |

**O PDF completo não está nesta pasta.** Não copie o ebook original, imagens de todas as páginas ou arquivos de trabalho para a pasta publicada. A entrega do produto é feita conforme as instruções da Cakto após a confirmação do pagamento.

## Interações e acessibilidade

- Compra por links HTML reais; não depende de JavaScript.
- Navegação interna por âncoras.
- FAQs com `details` e `summary`, operáveis por teclado e sem JavaScript.
- Amostras ampliadas em um diálogo nativo, com fechamento por botão ou Esc e retorno do foco à imagem selecionada.
- No celular, a imagem ampliada pode ser deslocada na horizontal e na vertical para ler os detalhes. Essa rolagem fica dentro do diálogo.
- Sem JavaScript ou suporte a diálogo, cada amostra abre diretamente como imagem; use Voltar no navegador para retornar à página.
- Barra de compra no celular após sair da seção inicial, com espaço reservado no rodapé. Sem JavaScript, os CTAs da página continuam disponíveis.
- Foco visível, link para pular ao conteúdo, textos alternativos e respeito à preferência de movimento reduzido.
- Imagem principal com prioridade; imagens das seções inferiores com carregamento tardio.

## Verificação realizada

Verificado em Chromium nas larguras **320, 375, 390, 700, 768, 1024 e 1440 px**, além de texto ampliado a **200%** no celular:

- Sem rolagem horizontal na página e sem imagens quebradas.
- Seis links com o checkout correto.
- Âncoras com destinos existentes e navegação funcional.
- Todas as 14 FAQs operáveis por teclado.
- Seis amostras abrindo e fechando, com restauração do foco.
- Barra móvel oculta na abertura e visível após a seção inicial, com reserva de espaço.
- Preço regular oculto, com e sem JavaScript.
- Abertura direta pelo protocolo `file://`, compra e FAQ sem JavaScript.
- Nenhum erro de JavaScript ou de carregamento no console durante o teste.
- Sintaxe do JavaScript validada.

Antes de divulgar o endereço publicado, abra-o no seu celular e confirme os valores apresentados no checkout. Não foi efetuada nenhuma compra nem publicação em conta de hospedagem.
