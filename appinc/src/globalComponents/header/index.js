import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const Header = (props) => {
  const { showArrow, showMenu, showExit, goBack, openMenu, title } = props;

  return (
    <View style={styles.header}>
      <StatusBar backgroundColor='#344955' barStyle="light-content" />
        <View style={styles.viewIcon}>
          {
            showMenu && (
              <TouchableOpacity onPress={() => openMenu()}>
                <Icon name="md-menu" size={28} style={styles.iconMenu} />
              </TouchableOpacity>
            )
          }
          {
            showArrow && (
              <TouchableOpacity onPress={() => goBack()} >
                <Icon name="md-arrow-back" size={28} style={styles.iconMenu} />
              </TouchableOpacity>
            )
          }
        </View>
          <View style={styles.viewTitle}>
            <Text style={styles.headerTitle}>
              {title}
            </Text>
          </View>
        <View style={styles.concerto}>
          {
            showExit && (
              <TouchableOpacity>
                <Icon name="md-exit" size={28} style={styles.iconExit} />
              </TouchableOpacity>
            )
          }
        </View>
    </View>
  );
};

export default withNavigation(Header);
