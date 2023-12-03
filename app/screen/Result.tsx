import React from 'react';
import {View} from 'react-native';
import PageResult from '../components/pages/result/pageResult';
import Bar from '../components/Bar';
function Result({route }:any): JSX.Element {

  return (
    <View >
        <Bar />
        <PageResult route={route} />
    </View>
  );
}
export default Result;