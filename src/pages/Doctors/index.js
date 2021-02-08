import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  HomeProfile,
  RatedDoctors,
  NewsItem,
  DoctorsCategory,
  Gap,
} from '../../component';
import {Doctor1, Doctor2, Doctor3, JSONcategoryDoctor} from '../../assets';
import {colors, fonts, getData} from '../../utils';

const Doctors = ({navigation}) => {
  useEffect(() => {
    getData('user').then((res) => {
      console.log('data user: ', res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {
                  //mapping data dari json
                  //setiap perulangan tambah key, yang unique
                  JSONcategoryDoctor.data.map((item) => {
                    return (
                      <DoctorsCategory
                        key={item.id}
                        category={item.category}
                        onPress={() => navigation.navigate('ChooseDoctors')}
                      />
                    );
                  })
                }
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctors
              name="Amanda Manopause"
              desc="Pediatrician"
              avatar={Doctor1}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctors
              name="Alex Nakal"
              desc="Pediatrician"
              avatar={Doctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctors
              name="Cantik Baik"
              desc="Pediatrician"
              avatar={Doctor3}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctors;

const width_proportion = '65%';

const styles = StyleSheet.create({
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: width_proportion,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
});
