import React, { Component } from 'react';
import axios from 'axios';

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TouchableHighlight,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Sound from 'react-native-sound';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AudioActions } from '../../store/ducks/audiorec';

class AudioRec extends Component {

    state = {
      currentTime: 0.0,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: true,
    };

    prepareRecordingPath(audioPath){
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

      return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={style}>
            {title}
          </Text>
        </TouchableHighlight>
      );
    }

    _renderPauseButton(onPress, active) {
      var style = (active) ? styles.activeButtonText : styles.buttonText;
      var title = this.state.paused ? "RESUME" : "PAUSE";
      return (
        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={style}>
            {title}
          </Text>
        </TouchableHighlight>
      );
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

        console.tron.log('filePath')
        console.tron.log(filePath)
        this.sendAudio(filePath);
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

    sendAudio = (filePath) => {
      console.tron.log(this.state.avatarSource)
      console.tron.log('Send Audio')
            //console.tron.log(this.state.avatarSource)

            const imageData = new FormData();

            imageData.append('example1', {
              uri: 'file://' + filePath,
              type: 'audio/aac',
              name: 'example1.aac'
            });

            axios.post('http://35.231.239.168/api/pericia/', imageData, {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              },
            }).then((resp) => {
                    console.tron.log('send audio 2');
                    console.tron.log(resp);
            }).catch(err => {
                    console.tron.log(err);
            });
    }

    render(filePath) {
      console.tron.log(this.state.audioPath)
    //  console.tron.log(this.props)

      return (
        <View style={styles.container}>
          <View style={styles}/>
          <Text style={styles.progressText}>{this.state.currentTime}s</Text>
          <View style={styles.controls}>
            { this._renderButton('RECORD', () => { this._record(); }, this.state.recording ) }
            { this._renderButton('PLAY', () => { this._play(); }) }
            {/* {this._renderButton("PAUSE", () => {this._pause()} )} */}
            { this._renderPauseButton(() => {this.state.paused ? this._resume() : this._pause() })}
            { this._renderButton('STOP', () => { this._stop(); }) }
          </View>

        </View>
      );
    }
  }

const mapStateToProps = state => ({
  audio: state.audiorec,
});

const mapDispatchToProps = dispatch => bindActionCreators(AudioActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AudioRec);
