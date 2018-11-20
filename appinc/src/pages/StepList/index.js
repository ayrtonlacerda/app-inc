import React, {Component} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';
import styles from './styles';
import StepBox from './components/StepBox';
import { Load } from '../../components';


const steps = [
  {
    titulo: 'Preparo',
    descricao: 'Numero do caso, inicio, termino, equipe',
    form: [
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'date',
      },
      {
        type: 'text',
      },
    ]
  },
  {
    titulo: '1. Reconhecimento',
    descricao: 'Nome da vitima, nascimento, narturalidade',
    form: [
      {
        type: 'text',
      },
      {
        type: 'date',
      },
      {
        type: 'date',
      },
      {
        type: 'date',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
    ]
  },
  {
    titulo: '2. Localização',
    descricao: 'Posicao geografica e etc',
    form: [
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'geo',
      },
      {
        type: 'geo',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'date',
      },
      {
        type: 'text',
      },
    ]
  },
  {
    titulo: '3. Posição',
    descricao: 'Nome da vitima, nascimento, naturalidade',
    form: [
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'geoloc',
      },
      {
        type: 'geoloc',
      },
      {
        type: 'camera',
      },
      {
        type: 'camera',
      },
      {
        type: 'camera',
      },
      {
        type: 'date',
      },
      {
        type: 'text',
      },
    ]
  },
  {
    titulo: '4. Descrição',
    descricao: 'Individuo, compleição, estatura, particularidades',
    form: [
      {
        type: 'text',
      },
      {
        type: 'date',
      },
      {
        type: 'text',
      },
      {
        type: 'date',
      },
      {
        type: 'text',
      },
      {
        type: 'date',
      },
      {
        type: 'camera',
      },
      {
        type: 'camera',
      },
      {
        type: 'camera',
      },
      {
        type: 'camera',
      },
    ]
  },
];


class StepList extends Component {
  state ={
    modalVisible: false,
    load: false,
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  cancel() {
    this.props.navigation.goBack();
  }


  render() {
    console.tron.log(this.props);
    const { steps } = this.props;
    const { modalVisible, load } = this.state;
    const form = this.props.navigation.getParam('form');
    console.tron.log('seus steps');
    console.tron.log(form);

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.masterContainer}>
            <View style={styles.containerModal}>
              <Text style={styles.tituloModal}>ATENÇÂO</Text>
              <Text style={styles.textModal}>Tem certeza que deseja cancelar? Todas as alterações seram perdidas</Text>
              <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => this.cancel()}>
                  <View style={styles.buttonYes}>
                    <Text style={styles.buttonText}>Sim</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ modalVisible: false })}>
                  <View style={styles.buttonNo}>
                    <Text style={styles.buttonText}>Não</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <ScrollView>

            <FlatList
              data={steps}
              renderItem={item => <StepBox steps={item} />}
            />

          <View style={styles.container}>
            <TouchableOpacity style={styles.salvarbutton} onPress={() => this.setState({ load: true })}>
                <Text style={styles.buttonText}>
                  Salvar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.enviarbutton} onPress={this.navigateToLogged}>
                <Text style={styles.buttonText}>
                  Enviar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelarbutton} onPress={() => this.openModal()}>
                <Text style={styles.buttonText}>
                  Cancelar
                </Text>
              </TouchableOpacity>
          </View>

        </ScrollView>

        {
          load && (
            <Load
              loadVisible
              textLoad='Salvando...'
            />
          )
        }
      </View>
    );
  }
}

StepList.navigationOptions = {
  title: 'Morte Violenta',
};

export default StepList;
