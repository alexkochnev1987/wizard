import * as TaskManager from 'expo-task-manager';
import { io } from 'socket.io-client'
import { GEOLOCATION_ID, SERVER_URL, TASK } from './constant';

const socket = io(SERVER_URL);



TaskManager.defineTask(TASK, ({ data: { locations }, error }) => {

    if (error) {
        console.error(error);
        return;
    }
    const location = locations[0];
    console.log(location);
    socket.on('connect', () => {
        console.log(socket.id);
        socket.emit('geolocation', JSON.stringify({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            id: GEOLOCATION_ID
        }));
    });
});