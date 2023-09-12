
export default {
	computed: {
		show_admin_nav() {
			return this.$route.name == 'Admin'
		},
	},
	methods: {
		isActive(name) {
			return this.$route.name == name ? 'active-link' : 'asd'
		},
		to(route, action = null) {
			this.$router.push({name: route})
			if (action) {
				this.$store.dispatch(action)
			}
		}
	}
}