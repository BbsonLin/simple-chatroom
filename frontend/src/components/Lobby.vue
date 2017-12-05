<template>
  <div>
    <h2>Hi there!</h2>
    <h2>What's your name?</h2>
    <div class="form-group form-inline justify-content-center">
      <input type="text" class="form-control mr-2" placeholder="Your name" v-model="name">
      <button class="btn btn-primary" @click="enterRoom">Enter</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    enterRoom () {
      this.$router.push({ path: '/chat' })
      this.$socket.send({name: this.name, msg: 'Hello! I\'m ' + this.name})
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.state.chatroom.name
      },
      set (name) {
        this.$store.commit('UPDATE_NAME', name)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
