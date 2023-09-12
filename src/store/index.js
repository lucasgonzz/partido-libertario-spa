import Vue from 'vue'
import Vuex from 'vuex'
import images from '@/store/images'
import affiliate from '@/store/affiliate'
import auth from '@/store/auth'
import donations from '@/store/donations'
import admin from '@/store/admin'
import referent from '@/store/referent'
import blog from '@/store/blog'
import departament from '@/store/departament'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    images,
    affiliate,
    auth,
    donations,
    admin,
    referent,
    blog,
    departament,
  }
})
