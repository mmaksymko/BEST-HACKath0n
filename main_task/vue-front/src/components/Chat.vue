  
<script lang="ts">
import { defineComponent, nextTick, onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue';
import socket from "@/socket";
import type { User } from '@/types';

let senderName = ref("Микола Стеценко");

export default defineComponent({
    setup() {
        const inputText = ref('');
        const users = ref<User[]>([]);
        const selectedUser = ref<User>({
            connected: false,
            messages: [],
            hasNewMessages: false,
            self: false,
            userID: "user123",
            username: "JohnDoe",
        }
        );

        const myScrollableDiv = ref<HTMLDivElement | null>(null);

        socket.auth = { username: "qweg" };
        socket.connect();

        function socketSendMessage(content: string) {
            console.log("send funciton use");
            socket.emit("private message", {
                content: content,
                to: selectedUser.value.userID,
            });
            selectedUser.value.messages.push(
                {
                    content: content,
                    fromSelf: true,
                    time: getTime()
                }
            );
            inputText.value = "";
        }

        const initReactiveProperties = (user: User) => {
            user.connected = true;
            user.messages = [];
            user.hasNewMessages = false;
        };

        socket.on("users", (tempusers) => {
            tempusers.forEach((user: User) => {
                user.self = user.userID === socket.id;
                initReactiveProperties(user);
            });
            // put the current user first, and sort by username
            tempusers = tempusers.sort((a: { self: any; username: number; }, b: { self: any; username: number; }) => {
                if (a.self) return -1;
                if (b.self) return 1;
                if (a.username < b.username) return -1;
                return a.username > b.username ? 1 : 0;
            });
            selectedUser.value = tempusers[1];
            users.value = tempusers;
        });

        onUpdated(() => {
            const scrollableDiv = myScrollableDiv.value;
            if (scrollableDiv) {
                scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
            }
        })

        onMounted(() => {
            socket.on("private message", ({ content, from }) => {
                console.log("щось тай прийшло");
                console.log(users.value);
                for (let i = 0; i < users.value.length; ++i) {
                    const user = users.value[i];
                    if (user.userID == from) {
                        selectedUser.value.messages.push({
                            content: content,
                            fromSelf: false,
                            time: getTime()
                        });
                        break;
                    }
                }
                console.log(selectedUser.value.messages);
            });
        });

        function checkUn() {
            socket.on("connect_error", (err) => {
                if (err.message === "invalid username") {
                    console.log("pizdec");
                }
            });
        }

        socket.on("user connected", (user) => {
            initReactiveProperties(user);
            users.value.push(user);
            selectedUser.value = user;

        });
        socket.on("user disconnected", (id) => {
            for (let i = 0; i < users.value.length; i++) {
                const user = users.value[i];
                if (user.userID === id) {
                    user.connected = false;
                    break;
                }
            }
        });

        function getTime() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
        }

        return {
            inputText,
            socketSendMessage,
            selectedUser,
            senderName,
            myScrollableDiv
        };
    },
});

</script>

<template>
    <div class="chat with-header">
        <div class="my-sender-name">{{ senderName }}</div>
        <div class="scrollable-div" ref="myScrollableDiv">
            <div class="message" v-for="message in selectedUser.messages" :class="{ 'current-user': message.fromSelf }">
                <div class="content">
                    <div class="text normal-font-weight">
                        {{ message.content }}
                        <div class="time normal-font-weight">{{ message.time }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="input">
            <input type="text" class="message-input normal-font-weight" v-model="inputText"
                placeholder="Type a message..." @keydown.enter="socketSendMessage(inputText)" />
            <button class="send-button" @click="socketSendMessage(inputText)">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </div>
</template>
  
<style scoped>
.chat {
    min-width: 15rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    margin-right: 3rem;
    margin-left: 3rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.65);
    overflow: auto;
}

.scrollable-div {
    max-height: 80vh;
    overflow-y: auto;
}

.normal-font-weight {
    font-weight: normal;
}

@media screen and (max-width: 600px){
    .normal-font-weight {
        font-size: 12px;
    }
}

.my-sender-name {
    margin-left: 1rem;
    margin-top: 1rem;
    color: black;
    font-weight: normal;
}

.message {
    display: flex;
    margin-top: 0.75rem;
    margin-left: 1rem;
    margin-right: 5rem;

}

.message.current-user {
    justify-content: flex-end;
    margin-left: 5rem;
    margin-right: 1rem;
}

.content {
    display: flex;
    min-width: 5rem;
    flex-direction: column;
}

.message.current-user .content {
    text-align: right;
}

.message.current-user .sender-name {
    display: none;
}

.input {
    display: flex;
    align-items: center;
    margin-top: auto;
    padding: 10px;
}

.message-input {
    flex-grow: 1;
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
}

.send-button {
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    background-color: #f700ff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.text {
    position: relative;
    padding: 0.75rem 1rem 0.5rem 1rem;
    border-radius: 1.25rem;
    background-color: #f1f0f0;
    color: #000;
    word-break: break-all;
    max-width: 100%;
    line-height: 1.4;
}

.message.current-user .text {
    background-color: #9305a0;
    color: #fff;
}

.time {
    bottom: 0.5rem;
    left: 0.75rem;
    right: auto;
    text-align: right;
}
</style>
  