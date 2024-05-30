import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
export default class HomeScreen extends Component {
constructor(){
  super();
  this.state={
    
  }
}

  render() {
    return (
      <View>
        <AppHeader/>
        <View>
          <View style={styles.buttonsContainer}>

          <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AboutMeScreen') }>
              <Text>Sobre mim</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('StudiesScreen')}>
              <Text>Cursos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AcademicScreen')}>
              <Text>Desempenho escolar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('MedalsScreen')}>
              <Text>Medalhas</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ContactScreen')}>
              <Text>Contato</Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },

  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
    backgroundColor: '#E7CFCD',
   
  }

});
