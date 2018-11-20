import React from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

const Load = (props) => {
  const { loadVisible, textLoad } = props;
  return (
    <Modal
      animationType="slide"
      transparent
      visible={loadVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.masterContainer}>
        <View style={styles.containerModal}>
          <Text style={styles.textModal}>{textLoad}</Text>
          <ActivityIndicator size={32} color='#12751' />
        </View>
      </View>
    </Modal>
  );
};

export default Load;

