export default {
	namespaced: true,
	state: {
		image_to_show: '',
	},
	mutations: {
		setImageToShow(state, value) {
			state.image_to_show = value
		}
	},
	actions: {
	}
}