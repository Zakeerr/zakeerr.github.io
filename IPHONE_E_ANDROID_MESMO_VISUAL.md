# iPhone e Android com o mesmo visual mobile

Ajustes realizados:

- Removidos os saltos de tamanho que eram ativados somente em celulares com largura acima de 390 px.
- Definido o mesmo tamanho de título, descrição, botões e espaço da logo em todos os celulares.
- O título mobile usa cores sólidas claras, sem `background-clip: text`, para renderizar igual no Safari, Chrome e Samsung Internet.
- Limitada a largura do conteúdo para manter as mesmas quebras de linha entre iPhone e Android.
- Definido `width=device-width` e `initial-scale=1` explicitamente no viewport.
- Mantidas as correções de desempenho e estabilidade da versão Android.

Observação: barras do navegador e proporções físicas da tela variam entre aparelhos, mas o layout interno do site usa a mesma regra visual nos dois sistemas.
