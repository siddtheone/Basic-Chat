import socketIOClient from 'socket.io-client';

export const ENDPOINT = 'http://127.0.0.1:4001';
export const SOCKET = socketIOClient(ENDPOINT);
