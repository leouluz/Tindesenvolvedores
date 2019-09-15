import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import logo from '../assets/logo.png'
import avatar_leo from '../fotos/avatar_leo.jpg'
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main(){
  return (
    <SafeAreaView style={styles.container}>
      <Image style={logo} source={logo}/>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, {zIndex: 3}]}>
          <Image style={styles.avatar} source={avatar_leo}/>
            <View style={styles.footer}>
              <Text style={styles.name}> Leonardo Luz 3</Text>
              <Text style={styles.bio} numberOfLines={3}> CTO na Risenv. Apaixonado pelas tecnologias react-native e node.js</Text>
            </View>
        </View>
        <View style={[styles.card, {zIndex: 2}]}>
          <Image style={styles.avatar} source={avatar_leo}/>
            <View style={styles.footer}>
              <Text style={styles.name}> Leonardo Luz 2</Text>
              <Text style={styles.bio} numberOfLines={3}> CTO na Risenv. Apaixonado pelas tecnologias react-native e node.js</Text>
            </View>
        </View>
        <View style={[styles.card, {zIndex: 1}]}>
          <Image style={styles.avatar} source={avatar_leo}/>
            <View style={styles.footer}>
              <Text style={styles.name}> Leonardo Luz 1</Text>
              <Text style={styles.bio} numberOfLines={3}> CTO na Risenv. Apaixonado pelas tecnologias react-native e node.js</Text>
            </View>
        </View>
      </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={dislike}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={like}/>
          </TouchableOpacity>
        </View>
      <View/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardsContainer:{
    flex:1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight:500,
  },
  card:{
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:8,
    margin:30,
    overflow:'hidden',
    position:'absolute',
    top:0,
    left:0,
    right:0,
  },
  avatar:{
    flex:1,
    height:500,
  },
  footer:{
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:15,
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    color: '#333',
  },
  bio:{
    fontSize:14,
    color:'#999',
    marginTop: 5,
    lineHeight: 18
  },
  logo:{
    marginTop:40
  },
  buttonsContainer:{
    flex:1,
    marginTop: 560,
    flexDirection: 'row',
  },
  button:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset:{
      width: 0,
      height: 2,
    }
  }
});