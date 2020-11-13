import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {Doctor1, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctors = () => {
  return (
    <View style={styles.container}>
      <Image source={Doctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alika Fitri Azizah</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default RatedDoctors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
  profile: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  rate: {
    flexDirection: 'row',
  },
});
