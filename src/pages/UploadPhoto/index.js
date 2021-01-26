import React from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../component';
import {colors, fonts} from '../../utils';
import * as ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);

  const getImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      console.log('response: ', response);
      //response didcancel didapat dari response bawaan react native
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Oops, anda tidak memilih foto manapun',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.photoWrapper} onPress={getImage}>
            <Image source={photo} style={styles.photo} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.texto}>Jo is Cerdikiawan</Text>
          <Text style={styles.textox}>Web & Mobile Programmer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  texto: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  textox: {
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 0,
    right: 6,
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  photoWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
