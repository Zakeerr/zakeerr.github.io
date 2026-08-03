# Otimização mobile completa — RiseWeb

## Início do site
- Novo fundo vertical exclusivo para celular, com a marca integrada ao visual.
- Remoção do vídeo quadrado gigante no celular e tablet.
- Vídeo mantido apenas no desktop, usando o arquivo leve de 1080p.
- Título, descrição e botões reorganizados para ocupar menos espaço.
- Botões agora ficam lado a lado no celular, com tamanhos adequados para toque.
- Navbar menor, com suporte à área segura de celulares com notch.

## Site inteiro
- Cards principais e avaliações viraram áreas horizontais com rolagem suave no celular.
- Menos espaços vazios e títulos menores em telas pequenas.
- Seção de contato e rodapé ficaram mais compactos.
- Animações pesadas foram desativadas no celular para melhorar fluidez.
- Elementos fora da tela usam renderização otimizada quando o navegador oferece suporte.
- Logo da navbar e do rodapé foi reduzida de aproximadamente 1,3 MB para menos de 5 KB.

## Teste local
```powershell
npm install
npm run dev
```

Depois abra o endereço exibido no terminal e use o modo de dispositivo do navegador para testar larguras de 320 px, 375 px, 390 px e 430 px.
