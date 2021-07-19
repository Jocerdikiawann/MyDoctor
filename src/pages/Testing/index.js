import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
} from 'react-native';
import {BottomSheet} from '../../component';

export default function Testing() {
  let popUp = React.useRef();

  const onShowPopUp = () => {
    popUp.show();
  };

  const onclosePopUP = () => {
    popUp.close();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={onShowPopUp}>
          <Text style={styles.txtsize}>Show Pop</Text>
        </TouchableWithoutFeedback>

        <BottomSheet
          ref={(target) => (popUp = target)}
          onTouchOutSider={onclosePopUP}
          title="Demo PopUP"
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtsize: {
    fontSize: 20,
  },
});
