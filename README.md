# Barbearia RomarioCK: landing page

Site de uma página da **Barbearia RomarioCK** (Maracanaú-CE), feito com a identidade visual dos stories do Instagram: creme, preto e dourado, pincelada preta, letra cursiva e o poste de barbeiro.

É HTML, CSS e JavaScript puros: não precisa de build, banco de dados nem servidor. Por isso dá para hospedar de graça.

## Custo para manter no ar: R$ 0

| Parte | Ferramenta | Custo |
|---|---|---|
| Hospedagem + HTTPS | GitHub Pages | Grátis |
| Código / histórico | GitHub (repositório público) | Grátis |
| Fontes | Google Fonts | Grátis |
| Mapa | Google Maps (embed sem chave de API) | Grátis |
| Agendamento | Link `wa.me` do WhatsApp | Grátis |

Endereço no ar: **https://lohan-lucas.github.io/barbearia-romariock/** Um domínio próprio (`.com.br`) é opcional e é a única coisa que teria custo.

## Estrutura

```
index.html           página inteira (textos, links e ícones)
css/style.css        visual (cores no topo do arquivo, em :root)
js/main.js           cabeçalho, "hoje é ...", dias da semana, animações
assets/              favicon, pincelada, textura e imagem de prévia
tools/og-image.html  modelo da imagem que aparece ao compartilhar o link
```

## Como editar

- **WhatsApp**: procure e substitua `5585985995850` no `index.html`. A mensagem que já vem escrita fica logo depois, em `?text=`.
- **Endereço**: procure `Rua 123` no `index.html` (texto, mapa e dados para o Google).
- **Dias de atendimento**: textos no `index.html`; a regra "aberto de terça a sábado" está em `js/main.js` (`today >= 2 && today <= 6`).
- **Horário ou preços**: ainda não estão no site porque não constam no Instagram. Dá para colocar os valores dentro de cada cartão de serviço (`<article class="service-card">`).
- **Cores**: variáveis no começo do `css/style.css` (`--gold`, `--ink`, `--cream`...).

## Ver no computador

```bash
python -m http.server 5173
```

Depois abra http://localhost:5173.

## Publicar no GitHub Pages

1. Crie uma conta grátis em https://github.com (se ainda não tiver).
2. Crie um repositório **público** vazio chamado `barbearia-romariock` (sem README).
3. Nesta pasta:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/barbearia-romariock.git
   git push -u origin main
   ```
4. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
5. Em 1 a 2 minutos o site aparece em `https://SEU-USUARIO.github.io/barbearia-romariock/`.
6. Se o endereço mudar (outra conta ou domínio próprio), atualize `https://lohan-lucas.github.io/barbearia-romariock/` no `index.html`, `robots.txt` e `sitemap.xml`: é o que faz a prévia aparecer ao compartilhar no WhatsApp.

Para atualizar depois: edite, `git commit` e `git push`. O GitHub Pages publica sozinho.
