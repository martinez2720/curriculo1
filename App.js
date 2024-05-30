import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// importar de arquivos locais
import HomeScreen from './screens/HomeScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import StudiesScreen from './screens/studiesScreen';
import MedalsScreen from './screens/medalsScreen';
import AcademicScreen from './screens/academicScreen';
import ContactScreen from './screens/contactScreen';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  AboutMeScreen: AboutMeScreen,
  StudiesScreen: StudiesScreen,
  MedalsScreen : MedalsScreen,
  AcademicScreen : AcademicScreen,
  ContactScreen: ContactScreen
});

const AppContainer = createAppContainer(AppNavigator);
