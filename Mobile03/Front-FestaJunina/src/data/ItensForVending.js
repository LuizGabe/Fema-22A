const data = [
  {
    key: '1',
    nome: 'Quentões',
    saleCost: 5.00,
    disabled: true
  },
  {
    key: '2',
    nome: 'Quentão Grande',
    saleCost: 15.00,
  },
  {
    key: '5f9eac10-a86b-4686-a40d-9b5c8c04bfac',
    nome: 'Quentão Médio',
    saleCost: 10.00
  },
  {
    key: '4',
    nome: 'Quentão Pequeno',
    saleCost: 5.00,
  },
  {
    key: '5',
    nome: 'Pipocas',
    saleCost: 5.00,
    disabled: true
  },
  {
    key: '6',
    nome: 'Pipoca Grande',
    saleCost: 9.00,
  },
  {
    key: '7',
    nome: 'Pipoca Média',
    saleCost: 6.00
  },
  {
    key: '8',
    nome: 'Pipoca Pequena',
    saleCost: 3.00,
  },
  {
    key: '9',
    nome: 'Bolo',
    saleCost: 4.00,
  },
  {
    key: '10',
    nome: 'Pé de moleque',
    saleCost: 3.50,
  },
  {
    key: '11',
    nome: 'Cachorro Quente',
    saleCost: 6.50,
  },
]
const render = data.map((item) => {
  return {...item, nome: `${item.nome} R$ ${item.saleCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
})

export { render, data}