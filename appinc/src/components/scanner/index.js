import React, { Component } from 'react';
import {View, Alert } from 'react-native';
import BarcodeScanner from 'react-native-barcode-scanner-google';
 
 
class Scanner extends Component {

  state = {
    vetor: [], 
  }

  onPress = () => {
    const { vetor } = this.state;
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <BarcodeScanner
              style={{flex: 1}}
              onBarcodeRead={({data}) => {
                const { vetor } = this.state;
                Alert.alert(`Código'${data}' lido com sucesso.`);
                this.setState({ vetor: [...vetor, data] }); //Guarda o valor de todos os códigos lidos.
                console.log(vetor);
              }}
          />

      </View>
    );
  }
}

export default Scanner  ;



