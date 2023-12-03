import React from 'react';
import {View, StyleSheet} from 'react-native';
import PageHome from '../components/pages/home/pageHome';
import Bar from '../components/Bar';
function Home({navigation}:any): JSX.Element {
  return (
    <View style={styles.fundo} >
      <Bar />
      <PageHome navigation ={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
fundo:{
  backgroundColor: 'lightgrey'
}
})

export default Home;