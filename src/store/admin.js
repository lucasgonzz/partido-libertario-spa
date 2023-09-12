import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.withCredentials = true
export default {
	namespaced: true,
	state: {
		view: 'affiliates',
	},
	getters: {

	},
	mutations: {
		setView(state, value) {
			state.view = value
		}
	},
	actions: {
	}
}