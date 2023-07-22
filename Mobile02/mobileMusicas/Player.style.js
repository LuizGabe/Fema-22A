import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  player: {
    backgroundColor: '#111',

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    width: '100%',
    height: 100,

    position: 'absolute',
    bottom: 0,
    left: 0,
    
    zIndex: 999  
  },
  playerButton: {
    marginRight: 20,
    marginLeft: 20
  }
})

export default styles