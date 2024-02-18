import { io } from 'socket.io-client'
export const TASK = 'background-location-task'
export const SERVER_URL = 'http://localhost:1337';
export const INITIAL_REGION = { latitudeDelta: 2, longitudeDelta: 2 }
export const FIRST_USER_LOCATION_ID = 10;
export const SECOND_USER_LOCATION_ID = 11

export const socket = io(SERVER_URL);