import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';

import { useEffect } from 'react';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { startBackgroundLocation } from './src/startBackgroundLocation';
// import './src/backgroundTask'


import * as Location from 'expo-location';
import { io } from 'socket.io-client'

export const LOCATION_TASK_NAME = 'background-location-task';
const SERVER_URL = 'http://localhost:1337';
const GEOLOCATION_ID = 10
const socket = io(SERVER_URL, {
  transports: ['websocket'],
  autoConnect: false
});



const getBackgroundLocation = async () => {
  // let { status } = await Location.requestForegroundPermissionsAsync();
  // if (status !== 'granted') {
  //   setErrorMsg('Permission to access location was denied');
  //   return;
  // }
  socket.connect()
  socket.on('connect', () => {
    console.log('Connected', socket.id);
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  socket.on('connect_error', (error) => {
    console.error('Connect error:', error);
    console.trace(error)
  });
  console.log(socket.id);
  // if (status === 'granted') {
  //   let res = await Location.requestBackgroundPermissionsAsync();
  //   console.log(res)
  // }

  // Location.watchPositionAsync({
  //   accuracy: Location.Accuracy.High,
  //   timeInterval: 5000,
  //   distanceInterval: 0,
  // }, (location) => {
  //   socket.emit('geolocation', JSON.stringify({ latitude: location.coords.latitude, longitude: location.coords.longitude, id: GEOLOCATION_ID }));
  //   console.log('Location was send');
  // })

}

const useGeolocation = () => {
  useEffect(() => {
    // startBackgroundLocation()
    getBackgroundLocation()
  }, []);
};

export default function App() {
  useGeolocation()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE} />s */}
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
