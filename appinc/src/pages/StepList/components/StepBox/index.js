import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StepBox = (props) => {
  console.tron.log(props);
  const { steps } = props;
  const { item } = steps;
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate('StepPage', { step: item })}>
        <View style={styles.viewicon}>
        <Icon name="keyboard-arrow-right" size={60} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(StepBox);
