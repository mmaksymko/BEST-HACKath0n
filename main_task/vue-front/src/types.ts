
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

export type UserPostResponse = {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    propositions:string;
    __v:number;
}

export type Item = {
    _id: string;
    category: string[];
    city: string;
    creationDate: string;
    description: string;
    expiringDate: string;
    status: string;
    title: string;
}

export type UserDb = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
  };
  