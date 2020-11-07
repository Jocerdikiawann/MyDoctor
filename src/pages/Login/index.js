import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../component';
import {colors, fonts} from '../../utils';

const width_proportion = '80%';
const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Addres" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot my password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.navigate('MainApp')} />
      <Gap height={30} />
      <Link title="Create new account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: width_proportion,
  },
});
