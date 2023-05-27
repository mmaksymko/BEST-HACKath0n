<template>
    <div class="chat with-header">
        <div class="sender-name">{{ "vBRJSDF" }}</div>
        <div class="message" v-for="message in messages" :key="message.id"
            :class="{ 'current-user': message.sender.isCurrentUser }">
            <div class="content">
                <div class="text">
                    {{ message.text }}
                    <div class="time">{{ message.time }}</div>
                </div>
            </div>
        </div>
        <div class="input">
            <input type="text" v-model="inputText" @keydown.enter="sendMessage" placeholder="Type a message...">
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

let senderName = ref("Микола Стеценко");

interface Message {
    id: number;
    text: string;
    time: string;
    sender: {
        isCurrentUser: boolean;
    };
}

export default defineComponent({
    setup() {
        const messages = reactive<Message[]>([
            {
                id: 1,
                text: 'Hi there!',
                time: '12:30 PM',
                sender: {

                    isCurrentUser: false,
                },
            },
            {
                id: 2,
                text: 'Hey, what\'s up?',
                time: '12:31 PM',
                sender: {
                    isCurrentUser: false,
                },
            },
        ]);

        const inputText = ref('');

        function sendMessage() {
            if (!inputText.value) {
                return;
            }
            const message: Message = {
                id: messages.length + 1,
                text: inputText.value,
                time: getTime(),
                sender: {
                    isCurrentUser: true
                },
            };
            messages.push(message);
            inputText.value = '';
        }

        function getTime() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
        }

        return {
            messages,
            inputText,
            sendMessage,
        };
    },
});
</script>
  
<style>
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

.sender-name {
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.time {
    font-size: 0.75rem;
    color: #999;
    white-space: nowrap;
    margin-top: 0.25rem;
}

.message.current-user .content {
    text-align: right;
}

.message.current-user .sender-name {
    display: none;
}

.input {
    margin-top: auto;
}

.text {
    position: relative;
    padding: 0.75rem 1rem 1.5rem 1rem;
    /* add padding to bottom */
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
    font-size: 0.75rem;
    color: #999;
    position: absolute;
    bottom: 0.5rem;
    /* adjust bottom property */
    right: 0.75rem;
}

.message.current-user .time {
    bottom: 0.5rem;
    /* adjust bottom property */
    color: #e3e3e3;
    left: 0.75rem;
    right: auto;
}</style>
  