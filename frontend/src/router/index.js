import Vue from 'vue'
import Router from 'vue-router'
import Lobby from '@/components/Lobby'
import ChatRoom from '@/components/ChatRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Lobby
    },
    {
      path: '/chat',
      component: ChatRoom
    }
  ]
})
