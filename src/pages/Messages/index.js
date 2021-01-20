import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Doctor1, Doctor2, Doctor3} from '../../assets';
import {List} from '../../component';
import {colors, fonts} from '../../utils';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      profile: Doctor1,
      name: 'Amanda Manopause',
      desc: 'Baik bu, terima kasih atas wakt...',
    },
    {
      id: 2,
      profile: Doctor2,
      name: 'Stephen Halian',
      desc: 'Baik bu, terima kasih atas wakt...',
    },
    {
      id: 3,
      profile: Doctor3,
      name: 'Edward Jazuli',
      desc: 'Baik bu, terima kasih atas wakt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => {
          return (
            <List
              //ibarat kata key ini adalah primary key, diambil dari yang unique
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
