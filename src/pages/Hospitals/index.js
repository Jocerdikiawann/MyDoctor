import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ILBgHospitals} from '../../assets';
import {ListHospitals} from '../../component';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  const [dataHostpial, SetDataHospital] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getHospital = async () => {
    try {
      const response = await fetch(
        'https://ina-covid-bed.vercel.app/api/bed?prov=banten&revalidate=false',
      );
      const result = await response.json();
      console.log(`Data siranap : ${result.data}`);
      SetDataHospital(result.data);
    } catch (error) {}
  };

  const getAllData = (async) => {
    return Promise.all[getHospital()];
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={ILBgHospitals} style={styles.background}>
        <Text style={styles.title}>Siranap Covid-19</Text>
        <Text style={styles.desc}>Rumah Sakit & Kamar Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataHostpial.map((item, index) => {
            return (
              <ListHospitals
                key={index}
                name={item.name}
                address={item.address}
                hotLine={
                  item.hotline == '' ? 'Hotline tidak tersedia' : item.hotline
                }
                bedDetailLink={item.bed_detail_link}
                bed={item.available_bed}
                update={item.updated_at_minutes}
                image={ILBgHospitals}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.cadangan,
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
