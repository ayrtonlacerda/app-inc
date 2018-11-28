import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Camera extends React.Component {

  state = {
    avatarSource: null,
    videoSource: null
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
     // console.tron.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { response };
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: 'Gravar vídeo',
      takePhotoButtonTitle: 'Gravar',
      mediaType: 'video',
      videoQuality: 'high'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          videoSource: response.uri
        });
      }
    });
  }

  render() {
    const { hint, label, data_name } = this.props.data;
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.Name}>{label}:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            multiline
            placeholder={hint}
            maxLength={60}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={inputSave => this.setState({ inputSave })}
          />
      </View>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Icon name="add-a-photo" size={45} style={styles.icon} /> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

export default Camera;
