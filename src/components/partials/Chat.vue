<script>
import Menu from './Menu.vue';

export default {
  name: 'Chat',
  components: { Menu },
  data() {
    return {
      isChatVisible: false,
      isMessageVisible: false,
      newMessage: '',
      messages: [
        {
          text: 'Ciao! Come posso aiutarti?',
          status: 'received',
        }
      ]
    }
  },
  methods: {
    openChat() {
      this.isChatVisible=!this.isChatVisible;
      this.printFirstMessage()
    },

    closeChat() {
      this.isChatVisible = !this.isChatVisible;
      this.reset();
    },
    sendMessage() {
      this.messages.push(
        { 
          text: this.newMessage,
          status: 'sent' 
        }
      );
      this.newMessage = '';
      this.sendAnswer();
    },
    
    sendAnswer() {
      setTimeout( () => {
        this.messages.push(
          {
            text: 'Va bene',
            status: 'received'
          }
        )
      }, 1000);
    },

    reset() {
      this.messages = [
        {
          text: 'Ciao! Come posso aiutarti?',
          status: 'received',
        }
      ]
      this.newMessage = '';
      this.isMessageVisible = false  
    },

    printFirstMessage() {
      setTimeout( () => {
        this.isMessageVisible = true
      }, 1000);
    }
  }
}
</script>


<template>
  <div class="messages-content">
    <div>
      <i
        @click="openChat" 
        v-if="!isChatVisible"
        class="message-btn fa-solid fa-comments flex center"></i>
    </div>

    <div v-if="isChatVisible" class="chat flex col justify-between">

      <div v-if="isMessageVisible" class="chat-messages flex col gap-10">
        <div v-for="message in messages" :class="message.status" class="message">
          <p> {{ message.text }} </p>

        </div>
      </div>

      <input
        type="text"
        placeholder="Fai la tua domanda"
        v-model="newMessage"
        @keyup.enter="sendMessage">

      <i  
        @click="closeChat"
        class="close-btn fa-solid fa-xmark flex center"></i>
    </div>

  </div>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
    
.messages-content {
  .message-btn {
    width: 60px;
    height: 60px;
    font-size: 26px;
    color: $text-bgdark-title;
    background-color: $bg-icon-footer;
  }
  .chat {
    width: 400px;
    height: 500px;
    padding: 30px 20px 20px;
    border-radius: 10px;
    position: relative;
    background-color: $bg-white;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
    
    .close-btn {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: 4px;
      background-color: $bg-icon-footer;
      box-shadow: none;
    }
    .chat-messages {
      height: calc(100% - 47px);
      overflow: auto;
      .message {
        padding: 5px 10px;
        border-radius: 10px;
        width: fit-content;
        p {
          font-size: 1rem;
          color: $text-bglight-title;
        }
        &.received {
          align-self: flex-start;
          background-color: $bg-green;
          margin-right: 30px;
        }
        &.sent {
          align-self: flex-end;
          margin-left: 30px;
          background-color: $text-bglight-subtitle2;
        }
        color: $text-bglight-title;
      }
    }

    input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 10px;

    }
  }
}
</style>