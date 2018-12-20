import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Scanner from '../index';
import { withNavigation } from 'react-navigation';


const ButtonScanner = (props) => {
    return(
        <TouchableOpacity onPress={() => props.navigation.navigate('BarCode')}>
            <View>
                <Text>Ler Codigo</Text>
            </View>
        </TouchableOpacity>    
    )    
}

export default withNavigation(ButtonScanner);
