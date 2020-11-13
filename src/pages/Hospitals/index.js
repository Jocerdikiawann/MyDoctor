import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Hospitals2, Hospitals1, Hospitals3, ILBgHospitals} from '../../assets';
import {ListHospitals} from '../../component';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBgHospitals} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          type="Rumah sakit umum"
          name="Permata ibu"
          address="Jln Bhakti Anjay 20"
          pic={Hospitals1}
        />
        <ListHospitals
          type="Rumah sakit anak"
          name="Permata anak"
          address="Jln Bhakti Anjay 20"
          pic={Hospitals2}
        />
        <ListHospitals
          type="Rumah sakit jiwa"
          name="Permata jiwa"
          address="Jln Bhakti Anjay 20"
          pic={Hospitals3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: '-7%',
    flex: 1,
    paddingTop: 14,
  },
});
