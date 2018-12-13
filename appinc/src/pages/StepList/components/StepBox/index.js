import React from 'react';
import { View, Text, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StepBox = (props) => {
  console.tron.log(props);
  const { steps } = props;
  const { item } = steps;
  return (
    // Card Steplist
    <View style={styles.container}>
    <TouchableOpacity onPress={() => props.navigation.navigate('StepPage', { step: item })}>
      <View style={styles.card_titulo}>
        <Text style={styles.titulo}>{item.step_name}</Text>
      </View>
      <View style={styles.card_descricao}>
        <Text style={styles.descricao}>{item.step_description}</Text>
      </View>

      <View style={styles.bar}>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.1}
      />
      </View>

    </TouchableOpacity>
    </View>
    // Card Steplist
  );
};

export default withNavigation(StepBox);
