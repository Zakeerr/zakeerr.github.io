# Correção de compatibilidade Android

Ajustes aplicados após comparação dos vídeos de iPhone e Android:

- removido `content-visibility: auto` no mobile para evitar seções vazias, saltos e atraso de renderização em navegadores Android;
- removido `contain: paint/layout` no mobile para evitar recortes e falhas de composição;
- título principal recebeu fallback sólido, sem `background-clip: text`, corrigindo o texto escuro/transparente no Android;
- desativado o scroll snap horizontal no mobile, evitando que carrosséis prendam o gesto de rolagem vertical;
- mantidas as imagens compactadas e os efeitos pesados desativados no celular.
