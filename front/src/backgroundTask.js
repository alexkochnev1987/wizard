import * as TaskManager from 'expo-task-manager';

import { FIRST_USER_LOCATION_ID, SERVER_URL, TASK, socket } from './constant';


TaskManager.defineTask(TASK, ({ data: { locations }, error }) => {

    if (error) {
        console.error(error);
        return;
    }
    const location = locations[0];
    // console.log(location);
    socket.emit('geolocation', JSON.stringify({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        id: FIRST_USER_LOCATION_ID
    }));
});