import React, {Component} from 'react';
import {

  Text,
  View,

} from 'react-native';
import {Input,Button} from 'react-native-elements';
import styles from './styles';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button title="Login" onPress={()=>navigation.navigate("Messanger")}/>
    </View>
  );
};
