<template>
  <div>
    <div class="card mx-3">
      <div class="card-body">
        <ul>
          <li v-for="(msg, index) in messages" :key="index">{{ msg.name }}: {{ msg.msg }}</li>
        </ul>
      </div>
      <div class="form-row card-footer">
        <div class="col-6">
          <input type="text" class="form-control" placeholder="Your name" :value="name" readonly>
        </div>
        <div class="col-6">
          <input type="text" class="form-control" placeholder="Some message" v-model="messageInput">
        </div>
        <div class="col-6">
          <button type="button" class="btn btn-info btn-block mt-2" @click="leaveRoom">Leave</button>
        </div>
        <div class="col-6">
          <button type="button" class="btn btn-primary btn-block mt-2" @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isConnected: false,
      messageInput: ''
    }
  },
  sockets: {
    connect () {
      this.isConnected = true
      console.log('Connected here', this.name, this.messages)
    },
    message (msg) {
      console.log('Receive message', msg)
      this.$store.dispatch('saveMessage', msg)
    }
  },
  methods: {
    sendMessage (evt) {
      this.$socket.emit('message', {name: this.name, msg: this.messageInput})
    },
    leaveRoom () {
      this.$store.dispatch('cleanMessages')
      this.$router.push({ path: '/' })
      this.$socket.emit('message', {name: this.name, msg: 'Bye ... (' + this.name + ' left)'})
      this.$socket.emit('disconnect')
    }
  },
  computed: {
    ...mapGetters({
      name: 'getName',
      messages: 'getMessages'
    })
  }
}
</script>

<style lang="scss">
  .card-body {
    height: 80vh;
    overflow-y: auto;
    text-align: left;

    li {
      list-style-type: none;
      padding: 14px 0px;
      margin: 0 20px;
      border-bottom: 1px solid #e9e9e9;
      color: #555;
    }
  }
</style>
