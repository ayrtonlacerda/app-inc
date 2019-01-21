import React, {Component} from 'react';
import {
  View, Text, StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions, TextInput, AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';

import Video from 'react-native-video';
import styles from './styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

var ImagePicker = NativeModules.ImageCropPicker;


class Camera extends React.Component {

  state = {
    avatarSource: null,
    videoSource: null,
    imageData: null,
    imagePath: null,
  };

  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  async pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      includeBase64: true,
    }).then(image => { 
   
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height,},
        images: null,
      });

      console.tron.log(['received image', image]);
      this.setState({ imageData: image.data, imagePath: image.path });
      AsyncStorage.setItem('@Foto', image.data );      
    }).catch(e => alert(e));
  }



  pickSingleBase64(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: false,
      includeExif: true,
    }).then(image => {
      console.log('received base64 image');
      this.setState({
        image: {uri: `data:${image.mime};base64,`+ image.data, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  cleanupImages() {
    ImagePicker.clean().then(() => {
      console.log('removed tmp images from tmp directory');
    }).catch(e => {
      alert(e);
    });
  }

  cleanupSingleImage() {
    let image = this.state.image || (this.state.images && this.state.images.length ? this.state.images[0] : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(image ? image.uri : null).then(() => {
      console.log(`removed tmp image ${image.uri} from tmp directory`);
    }).catch(e => {
      alert(e);
    })
  }

  cropLast() {
    if (!this.state.image) {
      return Alert.alert('No image', 'Before open cropping only, please select image');
    }

    ImagePicker.openCropper({
      path: this.state.image.uri,
      width: 200,
      height: 200
    }).then(image => {
      console.log('received cropped image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  pickSingle(cropit, circular=false) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      this.setState({
        image: null,
        images: images.map(i => {
          console.log('received image', i);
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        })
      });
    }).catch(e => alert(e));
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  renderVideo(video) {
    return (<View style={{height: 300, width: 300}}>
      <Video source={{uri: video.uri, type: video.mime}}
         style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         rate={1}
         paused={false}
         volume={1}
         muted={false}
         resizeMode={'cover'}
         onError={e => console.log(e)}
         onLoad={load => console.log(load)}
         repeat={true} />
     </View>);
  }

  renderImage(image) {
    return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  saveFormInput = data => {
    const { imageData, imagePath } = this.state;
    const { form, getSaveStateForm, startControlArray } = this.props;

    console.tron.log(form.step);
    if ( imagePath ) {
      for (var key in form.step) { 
        if ( key === data.data_name) {
          const form = {};
          form[data.data_name] = { key: data.data_name, value: { uri: imagePath, type:'image/jpeg', name: `${data.data_name}.jpg` } };
          console.tron.log(['formsavecampo', form]) 
          getSaveStateForm(form);
        }  
      }
    }
    startControlArray();
  }


  render() {
    const { data_name, label, hint, default_value, newState} = this.props.data;
    const { saveStep } = this.props.form;

    if (saveStep) {
      this.saveFormInput({data_name, default_value});
    }

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.pickSingleWithCamera(false)}>
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
            placeholder={hint}
            maxLength={100}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={inputSave => this.setState({ inputSave })}
          />
      </View>

      </View>
    );
  }

}

const mapStateToProps = state => ({
  form: state.formState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
