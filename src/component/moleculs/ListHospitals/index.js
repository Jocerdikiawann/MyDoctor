import React from 'react';
import {Image, StyleSheet, Text, View, Linking} from 'react-native';
import {Link} from '../../../component';
import {colors, fonts} from '../../../utils';

const ListHospitals = ({
  update,
  bed,
  name,
  image,
  address,
  hotLine,
  bedDetailLink,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.picture} />
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Ketersediaan : {bed}</Text>
        <Text style={styles.hotline}>HotLine : {hotLine}</Text>
        <Text style={styles.address}>{address}</Text>

        <Link
          title="Detail Kamar"
          size={16}
          onPress={() => {
            Linking.openURL(bedDetailLink);
          }}
        />
        <Text style={styles.update}>Diperbarui : {update} menit yang lalu</Text>
      </View>
    </View>
  );
};

export default ListHospitals;

const width_proportion = '60%';
const width_title = '60%';
const styles = StyleSheet.create({
  hotline: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 2,
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {
    width: 100,
    height: 80,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    width: width_title,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    width: width_proportion,
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 2,
  },
  update: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 2,
  },
});
