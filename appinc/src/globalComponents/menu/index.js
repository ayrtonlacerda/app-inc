import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationActions, withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const pathImage = '../../assents/imgs/perfil.png';
class Menu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }

    render() {
        return(
            <View style={styles.container}>       
                <View style={styles.profile}>
                    <Image source={require(pathImage)} style={styles.profileImage} />
                    <Text style={styles.profileName}>Bruce Waynne</Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={this.navigateToScreen('NewMenu')}>
                        <View style={styles.buttonBox}>
                            <Icon name="pencil" size={19} color="#fff" style={styles.icon} />
                            <Text style={styles.textButton}>Nova Perícia</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonBox}>
                            <Icon name="history" size={19} color="#fff" style={styles.icon} />
                            <Text style={styles.textButton}>Minhas perícias</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonBox}>
                            <Icon name="key-variant" size={19} color="#fff" style={styles.icon} />
                            <Text style={styles.textButton}>Renovar token</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateToScreen('Exit')}>
                        <View style={styles.buttonBox}>
                            <Icon name="exit-to-app" size={19} color="#fff" style={styles.icon} />
                            <Text style={styles.textButton}>Sair</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}    

export default withNavigation(Menu);

