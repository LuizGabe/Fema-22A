import { StyleSheet } from 'react-native';

export const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    borderBottomColor:'black',
    border:'solid' ,
    borderBottomWidth: 'fit-content',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    paddingBottom: '7px',
    fontSize: '25px'
  },
  buttonGreen: {
    fontSize:'14px',
    backgroundColor:'#00ff9f',
    borderRadius:'10px',
    padding:'13px',
    width:'330px',
    fontWeight: 'bold'
  },
  buttonRed: {
    fontSize:'14px',
    backgroundColor:'#f64348',
    borderRadius:'10px',
    padding:'13px',
    width:'330px',
    fontWeight: 'bold',
    alignSelf:'left'

  }

}
)