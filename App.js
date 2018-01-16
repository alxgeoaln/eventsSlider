import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Events from './screens/Events';
import DetailsScreen from './screens/DetailsScreen';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    const Navigation = StackNavigator({
      home: { screen: Events },
      details: {
        screen: DetailsScreen,
      }
    });
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
});
