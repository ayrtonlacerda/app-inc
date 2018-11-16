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
      console.tron.log('Response = ', response);

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

  sendImage = () => {
    console.tron.log(this.state.avatarSource)
    console.tron.log('sendimage')
    //console.tron.log(this.state.avatarSource)

    var form = new FormData();
    form.append("example1", { uri: '../../assents/imgs/camera.jpg' });

    axios.post('http://35.231.239.168/api/pericia/', {
      async: true,
     crossDomain: true,
     url: "http://35.231.239.168/api/pericia/",
     method: "POST",
     headers: {
       "Content-Type": "application/x-www-form-urlencoded",
       "Cache-Control": "no-cache",
     },
     processData: false,
     contentType: false,
     mimeType: "multipart/form-data",
     data: form
    }).then((resp) => {
            console.tron.log(resp);
    }).catch(err => {
            console.tron.log(err);
    });



  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.Name}>Item:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            multiline
            placeholder={this.props.descricao}
            maxLength={this.props.lenght_max}
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
