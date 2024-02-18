import * as Location from 'expo-location';
import { TASK } from './constant';
export async function startBackgroundLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.error('Location permission not granted');
        return;
    }

    const res = await Location.requestBackgroundPermissionsAsync();

    if (res.status !== 'granted') {
        console.error('Location permission not granted');
        return;
    }

    await Location.startLocationUpdatesAsync(TASK, {
        accuracy: Location.Accuracy.High,
        timeInterval: 10000,
        distanceInterval: 10,
        showsBackgroundLocationIndicator: true,
        pausesUpdatesAutomatically: true,
        foregroundService: {
            notificationTitle: 'Location Tracking',
            notificationBody: 'Your location is being tracked',
            notificationColor: '#FFFFFF',
        },
    });
}
