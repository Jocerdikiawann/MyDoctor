import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctors,
  IconDoctorsActive,
  IconHospitals,
  IconHospitalsActive,
  IconMaps,
  IconMapsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctors') {
      return active ? <IconDoctorsActive /> : <IconDoctors />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    if (title === 'CoMaps') {
      return active ? <IconMapsActive /> : <IconMaps />;
    }
    return <IconDoctors />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    color: active ? colors.text.menuActive : colors.text.menuInActive,
    fontFamily: fonts.primary.normal,
    fontSize: 10,
    marginTop: 4,
  }),
});
