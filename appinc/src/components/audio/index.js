import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TouchableHighlight,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Sound from 'react-native-sound';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import styles from './styles';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { Creators as AudioActions } from '../../store/ducks/audiorec';

class AudioRec extends Component {

    state = {
      currentTime: 0.0,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: true,
      gravarcor: 'black',
      stopcor: 'black',
      playcor: 'black',
    };

    gravar = () => {

      this.setState({ gravarcor: 'red'});

    }

    stop = () =>{

      this.setState({ gravarcor: 'black'});
      this.setState({ stopcor: 'grey'});

    }

    play = () =>{

      this.setState({ stopcor: 'black'});
      this.setState({ playcor: 'grey'});

    }


    pausar = () =>{

      this.setState({ gravarcor: 'black'});

    }


    prepareRecordingPath(audioPath) {
      AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        AudioEncodingBitRate: 32000
      });
    }

    componentDidMount() {
      console.tron.log(this.state.audioPath)
      this._checkPermission().then((hasPermission) => {
        this.setState({ hasPermission });

        //if (!hasPermission) return;

        this.prepareRecordingPath(this.state.audioPath);

        AudioRecorder.onProgress = (data) => {
          this.setState({currentTime: Math.floor(data.currentTime)});
        };

        AudioRecorder.onFinished = (data) => {
          // Android callback comes in the form of a promise instead.
          if (Platform.OS === 'ios') {
            this._finishRecording(data.status === "OK", data.audioFileURL, data.audioFileSize);
          }
        };
      });
    }

    _checkPermission() {
      if (Platform.OS !== 'android') {
        return Promise.resolve(true);
      }

      const rationale = {
        'title': 'Microphone Permission',
        'message': 'AudioExample needs access to your microphone so you can record audio.'
      };

      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
        .then((result) => {
          console.log('Permission result:', result);
          return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
        });
    }

    _renderButton(title, onPress, active) {
      var style = (active) ? styles.activeButtonText : styles.buttonText;

      if (title === 'GRAVAR') {
        return (
          <TouchableHighlight style={styles.button} onPress={onPress}>
              <Icon name="md-microphone" size={28} style={{color: this.state.gravarcor}} />
          </TouchableHighlight>
        );
      }

      if (title === 'PARAR') {
        return (
          <TouchableHighlight style={styles.button} onPress={onPress}>
              <Icon name="md-square" size={28} style={{color: this.state.stopcor}} />
          </TouchableHighlight>
        );
      }

      if (title === 'PLAY') {
        return (
          <TouchableHighlight style={styles.button} onPress={onPress}>
              <Icon name="md-play" size={28} style={{color: this.state.playcor}} />
          </TouchableHighlight>
        );
      }

    }

    _renderPauseButton(onPress, active) {
      var style = (active) ? styles.activeButtonText : styles.buttonText;
      var title = this.state.paused ? "RESUME" : "PAUSE";

      if (title === 'RESUME') {
        return (
          <TouchableHighlight style={styles.button} onPress={onPress}>
              <Text>Cont.</Text>
          </TouchableHighlight>
        );
      }

      if (title === 'PAUSE') {
        return (
          <TouchableHighlight style={styles.button} onPress={onPress}>
              <Icon name="md-pause" size={28} style={styles.icon} />
          </TouchableHighlight>
        );
      }

    }

    async _pause() {
      if (!this.state.recording) {
        console.warn('Can\'t pause, not recording!');
        return;
      }

      try {
        const filePath = await AudioRecorder.pauseRecording();
        this.setState({paused: true});
      } catch (error) {
        console.error(error);
      }
    }

    async _resume() {
      if (!this.state.paused) {
        console.warn('Can\'t resume, not paused!');
        return;
      }

      try {
        await AudioRecorder.resumeRecording();
        this.setState({paused: false});
      } catch (error) {
        console.error(error);
      }
    }

    async _stop() {
      if (!this.state.recording) {
        console.warn('Can\'t stop, not recording!');
        return;
      }

      this.setState({stoppedRecording: true, recording: false, paused: false});

      try {
        const filePath = await AudioRecorder.stopRecording();

        if (Platform.OS === 'android') {
          this._finishRecording(true, filePath);
          //this.props.submitAudio(filePath)
        }

        return filePath;
      } catch (error) {
        console.error(error);
      }
    }

    async _play() {
      if (this.state.recording) {
        await this._stop();
      }

      // These timeouts are a hacky workaround for some issues with react-native-sound.
      // See https://github.com/zmxv/react-native-sound/issues/89.
      setTimeout(() => {
        var sound = new Sound(this.state.audioPath, '', (error) => {
          if (error) {
            console.log('failed to load the sound', error);
          }
        });

        setTimeout(() => {
          sound.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });
        }, 100);
      }, 100);
    }

    async _record() {
      if (this.state.recording) {
        console.warn('Already recording!');
        return;
      }

      if (!this.state.hasPermission) {
        console.warn('Can\'t record, no permission granted!');
        return;
      }

      if(this.state.stoppedRecording){
        this.prepareRecordingPath(this.state.audioPath);
      }

      this.setState({recording: true, paused: false});

      try {
        const filePath = await AudioRecorder.startRecording();
      } catch (error) {
        console.error(error);
      }
    }

    _finishRecording(didSucceed, filePath, fileSize) {
      this.setState({ finished: didSucceed });
      console.tron.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath} and size of ${fileSize || 0} bytes`);
    }


    render(filePath) {
      //console.tron.log(this.state.audioPath)
    //  console.tron.log(this.props)
    const { label, hint } = this.props.data;

      return (

          <View style={styles.container}>
          <Text style={styles.label}>{label}:</Text>
            <View style={styles.controls}>
              { this._renderButton('GRAVAR', () => { this._record();this.gravar()}, this.state.recording ) }
              { this._renderButton('PARAR', () => { this._stop(); this.stop()}) }
              { this._renderButton('PLAY', () => { this._play();this.play()}) }
              { this._renderPauseButton(() => {this.state.paused ? this._resume() : this._pause(); this.pausar() })}
              <View style={styles.seconds}>
              <Text style={styles.progressText}>{this.state.currentTime}s</Text>
              </View>
            </View>
          </View>



      );
    }
  }

const mapStateToProps = state => ({
  audio: state.audiorec,
});

const mapDispatchToProps = dispatch => bindActionCreators(AudioActions, dispatch);

export default AudioRec;
