export type User =
    {
        connected: boolean; 
        messages: Message[]; 
        hasNewMessages: boolean;
        self: boolean,
        userID: string
        username: string;
    }
export type Message ={
    content: string,
    time: string,
    fromSelf: boolean
}