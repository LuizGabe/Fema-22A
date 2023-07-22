import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',    
  },
  header: {
    backgroundColor:"#1DB954",
    width:'100%',
    padding:20,
    text: {
      textAlign:'center', 
      color:'white', 
      fontSize:25
    }
  },
  table: {
    flexDirection:'row',
    padding:20,
    borderBottomColor:'white',
    borderBottomtWidth:1,
    head: {
      width:'50%', 
      color:'rgb(200, 200, 200)'
    }
  }
})

export default styles