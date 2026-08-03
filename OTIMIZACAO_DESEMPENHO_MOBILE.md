# Otimização de desempenho mobile

Alterações realizadas:

- Removidos filtros `backdrop-blur` pesados da navegação no celular.
- Removido o listener de rolagem que atualizava o React durante o scroll.
- Desativadas animações contínuas e filtros de texto em telas pequenas.
- Removidos grandes elementos decorativos com blur de 140–170 px no celular.
- Simplificados sombras, gradientes e efeitos dos cards em telas pequenas.
- Botão flutuante do WhatsApp convertido para componente estático, sem animação infinita.
- Vídeo da logo continua exclusivo para desktop e agora usa `preload=none`.
- Fundo desktop convertido de PNG pesado para WebP otimizado.
- Arquivos públicos não utilizados e muito pesados foram removidos.
- Analytics de produção removido para reduzir JavaScript no navegador.
- ZIP organizado com `package.json` na raiz, sem `node_modules`, `.next` ou `.git`.
