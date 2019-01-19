import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

 // import ImagePicker from 'react-native-image-picker';
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

        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style = {styles.avatarContainer}>
          { this.state.avatarSource === null ? <View style = {styles.avatarContainer2}><Icon name="add-a-photo" size={30} style={styles.icon} />
          <View style = {styles.text_foto}><Text>Tirar uma foto</Text></View></View>:
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>

        <View style={styles.containerText}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            multiline
            placeholder={'Notas...'}
            maxLength={100}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={inputSave => this.setState({ inputSave })}
          />
      </View>

      </View>
    );
  }

}

export default Camera;
