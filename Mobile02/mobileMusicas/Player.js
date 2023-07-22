import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import Styles from './Player.style.js';

export default function Player(props) {

  const handleBack = async () => {

    let newIndex = props.audioIndex - 1
    if (newIndex < 0) {
      newIndex = props.musics.lenght - 1
    }
    props.setAudioIndex(newIndex)

    let curFile = props.musics[newIndex].file

    const newMusics = props.musics.filter((val, k) => {
      if (newIndex == k) {
        props.musics[k].playing = true
        curFile = props.musics[k].file

      } else {
        props.musics[k].playing = false
      }

      return props.musics[k]

    })
    if (props.audio != null) {
      props.audio.unloadAsync()
    }
    const curAudio = new Audio.Sound()
    try {
      await curAudio.loadAsync(curFile)
      await curAudio.playAsync()
    } catch (error) { }

    props.setAudio(curAudio)
    props.setMusics(newMusics)
    props.setPlaying(true)
  }

  const handleNext = async () => {

    let newIndex = props.audioIndex + 1
    if (newIndex >= props.musics.lenght) {
      newIndex = 0
    }
    props.setAudioIndex(newIndex)

    let curFile = props.musics[newIndex].file

    //Atualizar interface do App
    const newMusics = props.musics.filter((val, k) => {
      if (newIndex == k) {
        props.musics[k].playing = true
        curFile = props.musics[k].file

      } else {
        props.musics[k].playing = false
      }

      return props.musics[k]
    })

    //Reproduz o audio atual
    if (props.audio != null) {
      props.audio.unloadAsync()
    }
    const curAudio = new Audio.Sound()
    try {
      await curAudio.loadAsync(curFile)
      await curAudio.playAsync()
    } catch (error) { }

    props.setAudio(curAudio)
    props.setMusics(newMusics)
    props.setPlaying(true)
  }

  const handlePlay = async () => {
    let curFile = props.musics[props.audioIndex].file
    const newMusics = props.musics.filter((val, k) => {

      if (props.audioIndex == k) {
        props.musics[k].playing = true
        curFile = props.musics[k].file

      } else {
        props.musics[k].playing = false
      }

      return props.musics[k]

    })

    // Reproduzir o som
    try {
      // Caso ja tenha sido tocado
      if (props.audio != null) {
        props.setPlaying(true)
        props.setMusics(newMusics)
        await props.audio.playAsync()
      }

    } catch (error) {

      const curAudio = new Audio.Sound()
      try {
        await curAudio.loadAsync(curFile)
        await curAudio.playAsync()
      } catch (error) { }

      props.setAudio(curAudio)
      props.setMusics(newMusics)
      props.setPlaying(true)
    }
  }

  const handlePause = async () => {
    if (props.audio != null) {
      props.audio.pauseAsync()
    }
    props.setPlaying(false)
  }

  return (
    <View style={Styles.player}>
      <TouchableOpacity onPress={() => handleBack()} style={Styles.playerButton}>
        <AntDesign name='banckward' size={35} color="white"></AntDesign>
      </TouchableOpacity>

      {
        (!props.playing) ?
          <TouchableOpacity onPress={() => handlePlay()} style={Styles.playerButton}>
            <AntDesign name='playcircleo' size={35} color="white"></AntDesign>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => handlePause()} style={Styles.playerButton}>
            <AntDesign name='pausecircleo' size={35} color="white"></AntDesign>
          </TouchableOpacity>
      }

      <TouchableOpacity onPress={() => handleNext()} style={Styles.playerButton}>
        <AntDesign name='forward' size={35} color="white"></AntDesign>
      </TouchableOpacity>

    </View>
  )
}
