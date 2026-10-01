# Ateliê da Camisa

Ateliê interativo de alta camisaria: uma camisa social em 3D que muda na hora conforme as medidas, o tecido, a cor, a gola, o punho e os botões escolhidos, com um guia de como tirar cada medida.

**Ver online:** https://mattttheus.github.io/camisa-interativa/

## O que dá para fazer

- **Tocar:** o tecido afunda onde o mouse passa; arraste para girar a camisa 360° e use a roda do mouse para aproximar.
- **Medir:** cada medida aparece como uma fita métrica 3D sobre a camisa (colarinho, ombro, tórax, cintura, manga, comprimento e punho), com a medida do corpo, a folga e a medida da peça pronta.
- **Lupa:** mostra a trama do tecido ampliada, fio a fio.
- **Editor:**
  - 6 tecidos: tricoline, oxford, linho, sarja, espinha de peixe e cetim de seda.
  - 4 padronagens e cores livres.
  - Tamanhos P a XG ou sob medida, com caimento slim, clássico ou amplo.
  - 6 golas e 5 punhos.
  - Botões em 5 materiais, com 2 ou 4 furos, nos tamanhos 16L, 18L e 20L.
- **Ficha técnica:** resume a camisa escolhida e pode ser copiada.

## Como rodar localmente

É uma página estática; basta servir a pasta:

```bash
npm install        # baixa o three.js e copia para vendor/
npm start          # abre em http://localhost:8080
```

No WAMP/XAMPP, coloque a pasta em `www/` e abra pelo navegador. Abrir o `index.html` direto do disco (`file://`) não funciona, porque o navegador bloqueia parte dos recursos 3D.

## Usar um modelo 3D próprio

Salve um arquivo `.glb` em `modelos/camisa.glb` (ou arraste o arquivo para o palco). A página aplica tecido, cor e padronagem sobre ele. Veja [modelos/LEIAME.md](modelos/LEIAME.md) para os nomes de peças reconhecidos.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página, estilos e toda a lógica (camisa 3D, física do tecido, medidas, editor) |
| `vendor/` | three.js r128, carregador GLTF e descompressor Draco (copiados de `node_modules` por `npm run vendor`) |
| `modelos/` | Modelos `.glb` opcionais |
| `scripts/vendor.js` | Copia as dependências para `vendor/` |

## Tecnologias

[three.js](https://threejs.org/) r128 (WebGL), Canvas 2D para as texturas de tecido, fontes Cormorant Garamond, Jost e JetBrains Mono (Google Fonts).
