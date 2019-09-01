import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


function App(){
  return(
    <View style={style.container}>
      <Text>Testando aplicação</Text> 
    </View>
  );
}

const style = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center';
  },
  text = {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
    
  }
})

export default App;
