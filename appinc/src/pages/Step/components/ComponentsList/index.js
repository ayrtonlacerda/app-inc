import React from 'react';
import { View, ScrollView } from 'react-native';
import { InputText, AudioRec, Camera, MyDatePicker, GeoLocation } from '../../../../components';
import styles from './styles';


const ComponentList = (props) => (
    <View style={styles.container}>
      <ScrollView>
        {
          props.data.type === 'camera' && (
            <View style={styles.component}>
              <Camera />
            </View>
          )
        }
        {
          props.data.type === 'text' && (
            <View style={styles.component}>
              <InputText />
            </View>
          )
        }
        {
          props.data.type === 'audiorec' && (
            <View style={styles.component}>
              <AudioRec />
            </View>
          )
        }
        {
          props.data.type === 'date' && (
            <View style={styles.component}>
              <MyDatePicker />
            </View>
          )
        }
        {
          props.data.type === 'geoloc' && (
            <View style={styles.component}>
              <GeoLocation />
            </View>
          )
        }
      </ScrollView>
    </View>
);

export default ComponentList;
