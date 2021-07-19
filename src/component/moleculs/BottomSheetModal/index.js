import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  //State Show
  show = () => {
    this.setState({show: true});
  };

  //State CLose
  close = () => {
    this.setState({show: false});
  };

  renderOutSide(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;
    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderTitle = () => {
    const {title} = this.props;
    return (
      <Text
        style={{
          color: '#182e44',
          fontSize: 20,
          fontWeight: '500',
          margin: 15,
        }}>
        {title}
      </Text>
    );
  };

  render() {
    let {show} = this.state;

    const {onTouchOutSider, title} = this.props;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end',
          }}>
          {this.renderOutSide(onTouchOutSider)}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: 10,
              maxHeight: deviceHeight * 0.4,
            }}>
            {this.renderTitle()}
          </View>
        </View>
      </Modal>
    );
  }
}

export default BottomSheet;

const styles = StyleSheet.create({});
