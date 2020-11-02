import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILlogo, ILGetStarted} from '../../assets/ilustration';
import {Button, Gap} from '../../component';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILlogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;
const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
    color: 'white',
  },
  title: {
    fontSize: 28,
    // fontWeight: '600',
    marginTop: 91,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
});
