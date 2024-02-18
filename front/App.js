import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { startBackgroundLocation } from './src/startBackgroundLocation';
import { FIRST_USER_LOCATION_ID, INITIAL_REGION, socket } from './src/constant';
import './src/backgroundTask'




export default function App() {
  const [region, setRegion] = useState()

  useEffect(() => {
    socket.on(`geolocation${FIRST_USER_LOCATION_ID}`, (data) => {
      const { latitude, longitude } = JSON.parse(data)
      setRegion({ latitude, longitude })
    });

    startBackgroundLocation()
    return () => socket.disconnect()
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{ "latitude": 37.33007701, "longitude": -122.02131427, ...INITIAL_REGION, ...region }} >
        <Marker coordinate={region} title='user' pinColor='red' />
      </MapView>
    </View >
  );
}

