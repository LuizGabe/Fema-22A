
const files = {
  whiteWine: require('../../assets/vinho-branco.jpg'),
  roseWine: require('../../assets/vinho-rose.jpg')
}

const Wines = [
  {
    name: 'Chatigny Chardonnay',
    description: 'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.',
    image: files.roseWine
  },
  {
    name: 'Vinho Branco',
    description: 'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.',
    image: files.whiteWine
  }
]

export default Wines
