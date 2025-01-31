import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:3000";

class SocketService {
    constructor() {
        this.socket = null;
    }

    connect() {
        if (!this.socket) {
            this.socket = io(SERVER_URL);
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    emit(event, data) { //emit data
        if (this.socket) {
            this.socket.emit(event, data);
        }
    }

    on(event, callback) { //add event listener
        if (this.socket) {
            this.socket.on(event, callback);
        }
    }

    off(event) { //remove event listener
        if (this.socket) {
            this.socket.off(event);
        }
    }
}

const socketService = new SocketService();
export default socketService;
