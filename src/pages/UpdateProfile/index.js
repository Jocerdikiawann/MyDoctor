import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input, Profile} from '../../component';
import {Fire} from '../../config';
import {colors, getData, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const update = () => {
    console.log('profile: ', profile);
    const data = profile;
    data.photo = photoForDB;

    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('success: ', data);
        storeData('user', data);
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      //mengoptimalkan dengan fungsi option dari library image picker
      //kurangi quality sekitar 50%/0.5 lalu ukuran tinggi dan lebar 200px
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true},
      (response) => {
        //untuk melihat response dari get image
        console.log('response: ', response);
        //response didcancel didapat dari response bawaan react native
        if (response.didCancel || response.error) {
          //jika di cancel maka tampilkan pesan ini
          showMessage({
            message: 'Oops, anda tidak memilih foto manapun',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
          //ketika berhasil upload image tampilkan ini
        } else {
          //melihat response apa saja setelah upload
          console.log('response getImage: ', response);
          const source = {uri: response.uri};

          //base 64 itu salah satu image encode, jangan response.data karna ga ada, jadi ganti ke base 64 image encode
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          setPhoto(source);
          // setHasPhoto(true);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input label="Password" value={password} />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
