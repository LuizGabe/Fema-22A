import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal:15,
    paddingTop:40
  },
  container:{
    alignItems: 'center',
  },
  logo:{
    width:150,
    height:150
  },
  h1:{
    color:'#000000',
    fontSize:27,
    fontWeight:'bold',
    marginVertical:10
  },
  h2:{
    color:'#999999',
    fontSize:15
  },
  inputArea:{
    width:'100%',
    paddingTop:20,
    fontWeight:'bold'
  },
  inputLabel:{
    color:'#777777',
    fontSize:14,
    marginBottom:7
  },
  inputField:{
    borderWidth:2,
    borderRadius:5,
    borderColor:'#DDDDDD',
    fontSize:13,
    padding:10,
    color:'#a6a6a6'

  },
  forgotBtnText:{
    color:'#395bb3',
    fontWeight:'bold',
    marginLeft:'40vw',
    padding:'3.6vw',
    alignSelf:'right'
  },
  button:{
    padding:'3.5vw',
    borderRadius:'1.5vw',
    backgroundColor:'#4162b7',
    width:"300px",
    textAlign:'center'
  },
  buttonText:{
    fontSize:'4,5vw',
    color:'white'
    
  },
  signUpText:{
    color:'#a6a6a6',
    paddingTop:'4vw'
  },
  signUpBtnText:{
    color:'#395bb3',
    fontWeight:'bold',
  },
  footerArea:{
    paddingTop:'15vw'
  },
  footerText:{
    color:'#a6a6a6',
    marginTop: '50vw'
  }
});