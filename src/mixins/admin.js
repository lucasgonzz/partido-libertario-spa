export default {
	computed: {
		view() {
			return this.$store.state.admin.view
		},
	},
	methods: {
		isActive(view) {
			return this.view == view ? 'active-link' : 'asd'
		},
		setView(view, action = null) {
			this.$store.commit('admin/setView', view)
			if (!action) {
				this.$store.dispatch(`${view}/get${this.capitalizeFirstLetter(view)}`)
			} else {
				this.$store.dispatch(action)
			}
		},
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
}