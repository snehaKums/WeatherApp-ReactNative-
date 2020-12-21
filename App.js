import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import MapContainer from './src/containers/MapContainer';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
