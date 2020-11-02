import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets';

const Register = () => {
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text>Register page</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
    color: 'white',
  },
});
