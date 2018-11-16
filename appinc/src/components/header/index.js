import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const Header = ({ title }) => (

  <View style={styles.header}>
    <StatusBar backgroundColor="#666" />
      <View style={styles.viewIcon}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerToggle'); }}>
          <Icon name="md-menu" size={28} style={styles.icon} />
        </TouchableOpacity>
      </View>
        <View style={styles.viewTitle}>
          <Text style={styles.headerTitle}>
            {title}
          </Text>
        </View>
      <View style={styles.concerto} />
  </View>

);

export default Header;
