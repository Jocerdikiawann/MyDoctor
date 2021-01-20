import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItems} from '../../component';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Amanda Manopause" desc="Pediatrician" />
      <Gap height={10} />
      <ProfileItems
        label="Alumnus"
        value="Universitas Cendekia Abditama, 2020"
      />
      <ProfileItems
        label="Tempat Praktik"
        value="Rumah Sakit Qadr, Tangerang"
      />
      <ProfileItems label="No. STR" value="000012345678910" />
      <View style={styles.action}>
        <Button title="Start Consultation" onPress={()=>navigation.navigate('Chatting')}/>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
