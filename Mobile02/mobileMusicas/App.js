import { StatusBar } from 'expo-status-bar';
import { ScrollView, LogBox, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import Player from './Player';
import styles from './App.style';
import Musics from './Musics'

export default function App() {

  LogBox.ignoreAllLogs(true)
  const [audioIndex, setAudioIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const [musics, setMusics] = useState(Musics)

  const changeMusic = async (id) =>{
     let currentFileMusic = null

     let newMusics= musics.filter((val, index)=>{
      if(id == index){
        musics[index].playing = true
        currentFileMusic = musics[index].file
        setPlaying(true)
        setAudioIndex(id)
        
      }else{
         musics[index].playing = false
      }
       return musics[index]
     })

     if(audio != null){
        audio.unloadAsync()
     }

     const currentAudio = new Audio.Sound()
     try{

      await currentAudio.loadAsync(currentFileMusic)
      await currentAudio.playAsync()

     } catch(error) {}
  
     setAudio(currentAudio)
     setMusics(newMusics)
  }
  const playerProps = { setPlaying, setMusics, setAudioIndex, setAudio, playing, audioIndex, musics, audio}

  return (
    <View style={{flex:1}}>
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
      <Text style={styles.header.text}>App Música | Luiz Gabriel</Text>
      </View> 

      <View style={styles.table}>
        <Text style={styles.table.head}>Música</Text>
        <Text style={styles.table.head}>Artista</Text>
      </View>

      {
        musics.map((val, index) => {
          let color = val.playing ? '#1DB954' : 'white'

          return (
            <View style={styles.table}>
              <TouchableOpacity onPress={()=>changeMusic(index)} style={{width:'100%', flexDirection:'row'}}>
                  <Text style={{ width:'50%', color: color }}>
                    <AntDesign name="play" size={15} color={color}/>{val.nome}
                  </Text>
                  <Text style={{ width:'50%', color: color }}>{val.artita}
                  </Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
      
      <View style={{ paddingBottom: 200 }}/>
      
      </ScrollView>
      <Player {...playerProps}/>
      </View>
    
  )
}
