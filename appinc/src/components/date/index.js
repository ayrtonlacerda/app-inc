import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DateAction } from '../../store/ducks/date';

class MyDatePicker extends Component {

  state = {
    date: 'hh:mm',
    dataAtual: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Descrição:</Text>
        <View style={styles.direcao}>
          <DatePicker
            style={styles.dataPicker}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            minDate="01-01-2018"
            maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => { this.props.submitDATE({ date }); this.setState({ date }); }}
            customStyles={{
              dateIcon: {
              position: 'absolute',
                width: 40,
                height: 40,
                marginLeft: -30,
              },
              dateInput: {
                borderWidth: 0,
                borderStyle: null,
                height: 0,
                width: 0,
              },
            }}
            onDateChange={(date) => { this.setState({ date }); }}
          />

          <View style={styles.datecontainer}>
            <Text style={styles.date}>{this.state.date}</Text>
          </View>
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  date1: state.date,
});

const mapDispatchToProps = dispatch => bindActionCreators(DateAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyDatePicker);
