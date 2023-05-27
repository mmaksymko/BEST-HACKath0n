import { io, Socket } from "socket.io-client";

const URL: string = "http://localhost:3000";
const socket: Socket = io(URL, { autoConnect: false });

socket.onAny((event: string, ...args: any[]) => {
  console.log(event, args);
});

export default socket;
