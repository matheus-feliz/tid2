import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
function Bar(): JSX.Element{
  return (
    <View style={styles.fundo}>

            <Text style={styles.textCenter}>
                tutor3°idade
                     </Text>
    </View>
  );
}
const styles = StyleSheet.create({
 fundo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 90,
    width: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor:'seagreen',
  },
  textCenter:{
    fontSize:35,
    color:'#ffffff',
    fontWeight:'bold',
  },
});

export default Bar;
