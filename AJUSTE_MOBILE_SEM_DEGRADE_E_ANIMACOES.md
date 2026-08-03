# Ajuste mobile: logo livre, sem degradê e animações leves

- Removido todo o degradê e overlays da imagem de fundo no celular/tablet.
- Imagem mobile clareada diretamente no arquivo WebP, sem filtros pesados no navegador.
- Título, descrição e botões deslocados para baixo para não cobrir a logo.
- Mantida a logo centralizada.
- Adicionadas animações leves de entrada usando apenas opacity e transform.
- Adicionado reveal por rolagem com IntersectionObserver, executado uma única vez por elemento.
- Respeita prefers-reduced-motion.
- O degradê desktop foi preservado.
