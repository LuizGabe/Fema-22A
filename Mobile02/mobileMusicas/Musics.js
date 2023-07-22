const files = {
  Legendary: require('./musics/Legendary.mp3'),
  ThisIsWar: require('./musics/ThisIsWar.mp3'),
  DeadManWalking: require('./musics/DeadManWalking.mp3'),
  Bad: require('./musics/Bad.mp3'),
  CheckItOut: require('./musics/CheckItOut.mp3'),
  AnotherLevel: require('./musics/AnotherLevel.mp3'),
  RealGoodFeeling: require('./musics/RealGoodFeeling.mp3'),
  ChosenOne: require('./musics/ChosenOne.mp3'),
  Horns: require('./musics/Horns.mp3')
}

const musicas = [
  {
    nome: 'Legendary',
    artita: 'Welshly Arms',
    file: files.Legendary
  },
  {
    nome: 'This is War',
    artita: 'Matthew Raetzel, Richard Farrell',
    file: files.ThisIsWar
  }, 
  {
    nome: 'Dead Man Walking',
    artita: 'Chuxx Morris',
    file: files.DeadManWalking
  },
  {
    nome: 'Bad',
    artita: 'Royal Deluxe',
    file: files.Bad
  }, 
  {
    nome: 'Check It Out',
    artita: 'Oh The Larceny',
    file: files.CheckItOut
  }, 
  {
    nome: 'Another Level',
    artita: 'Oh The Larceny',
    file: files.AnotherLevel
  },
  {
    nome: 'Real Good Feeling',
    artita: 'Oh The Larceny',
    file: files.RealGoodFeeling
  },
  {
    nome: 'Chosen One',
    artita: 'Valley of Wolves',
    file: files.ChosenOne
  },
  {
    nome: 'Horns',
    artita: 'Bryce Fox',
    file: files.Horns
  }
]

musicas.map((value, index) => {
  musicas[index].playing = false
})

export default musicas