import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.withCredentials = true
export default {
	namespaced: true,
	state: {
		authenticated: false,
		user: null,
		loading: false,	
		message: '',
		auth_loading: false,
	},
	getters: {

	},
	mutations: {
		setAuthenticated(state, value) {
			state.authenticated = value
		},
		setUser(state, user) {
			state.user = user
		},
		setLoading(state, value) {
			state.loading = value
		},
		setMessage(state, value) {
			state.message = value
		},
	},
	actions: {
		logout({ commit }) {
			commit('setLoading', true)
			return axios.post('/logout')
			.then(() => {
				commit('setLoading', false)
				commit('setAuthenticated', false)
				commit('setUser', null)
			})
			.catch(err => {
				console.log(err)
			})
		},
		login({ commit, state }, user) {
			commit('setLoading', true)
			return axios.post('/login', user)
			.then(res => {
				commit('setLoading', false)
				if (res.status == 200) {
					commit('setAuthenticated', true)
					commit('setUser', res.data.user)
					console.log('state.authenticated')
					console.log(state.authenticated)
				} 
			})
			.catch(err => {
				commit('setLoading', false)
				console.log(err)
			})
		},
		csrf({ commit }) {
			commit('setAuthenticated', false)
			// commit('setLoading', true)
			return axios.get('/sanctum/csrf-cookie')
			.catch(err => {
				// commit('setLoading', false)
				commit('setAuthenticated', false)
				console.log(err)
			})
		},
		me({ commit }) {
			commit('setLoading', true)
			return axios.get('/api/user')
			.then(res => {
				commit('setLoading', false)
				console.log(res)
				commit('setAuthenticated', true)
				commit('setUser', res.data.user)
			})
			.catch(() => {
				commit('setLoading', false)
				commit('setAuthenticated', false)
				commit('setUser', null)
			})
		},
	}
}