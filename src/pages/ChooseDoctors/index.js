import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Doctor1} from '../../assets';
import {Header, List} from '../../component';
import {colors} from '../../utils';

const ChooseDoctors = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {/* props list doctor di ambil dari index.js ChooseDoctors  */}
      <List
        type="next"
        profile={Doctor1}
        name="Amanda Manopause"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={Doctor1}
        name="Amanda Manopause"
        desc="Wanita"
      />
      <List
        type="next"
        profile={Doctor1}
        name="Amanda Manopause"
        desc="Wanita"
      />
      <List
        type="next"
        profile={Doctor1}
        name="Amanda Manopause"
        desc="Wanita"
      />
      <List
        type="next"
        profile={Doctor1}
        name="Amanda Manopause"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctors;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
