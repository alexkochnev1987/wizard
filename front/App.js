import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';

import { useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { startBackgroundLocation } from './src/startBackgroundLocation';
import './src/backgroundTask'


export default function App() {

  useEffect(() => {
    startBackgroundLocation()
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
