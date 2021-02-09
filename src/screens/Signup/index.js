import React, {Component} from 'react';
import {useDispatch} from "react-redux";
import {

  Text,
  View,

} from 'react-native';
import {Input,Button} from 'react-native-elements';
import { actionFetchUser} from '../../modules/auth/action';
import styles from './styles';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const doLogin=()=>{
    dispatch(actionFetchUser());
   // console.log("doLogin");
    //navigation.navigate("messanger")
  }
  return (
    <View style={styles.container}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button title="Signup" onPress={()=> doLogin()}/>
    </View>
  );
};
