import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.withCredentials = true
export default {
	namespaced: true,
	state: {
		selected_amount: '',
		payment_status: '',
		donations: [],
		loading: false,
	},
	mutations: {
		setSelectedAmount(state, value) {
			state.selected_amount = value
		},
		setPaymentStatus(state, value) {
			state.payment_status = value
		},
		setDonations(state, value) {
			state.donations = value
		},
		setLoading(state, value) {
			state.loading = value
		}
	},
	actions: {
		getDonations({commit}) {
			commit('setLoading', true)
			return axios.get('api/donations')
			.then(res => {
				commit('setLoading', false)
				commit('setDonations', res.data.donations)
			})
			.catch(err => {
				commit('setLoading', false)
				console.log(err)
			})
		}
	}
}