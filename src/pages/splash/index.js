import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets';
import {Fire} from '../../config';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //cek user sedang login atau tidak
      //session firebase kurang lebih sekitar 1 jam secara default
      Fire.auth().onAuthStateChanged((user) => {
        //jika user ada
        if (user) {
          //user login
          console.log('user: ', user);
          navigation.replace('MainApp');
        } else {
          //user logout
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.title}>MyDoctor</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
  },
});
