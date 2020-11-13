import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Hospitals1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospitals = () => {
  return (
    <View style={styles.container}>
      <Image source={Hospitals1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah sakit</Text>
        <Text style={styles.title}>Permata Ibu</Text>
        <Text style={styles.address}>Jl. KH. Mas Mansyur No.2</Text>
      </View>
    </View>
  );
};

export default ListHospitals;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
