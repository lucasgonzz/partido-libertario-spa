export default {
	computed: {
		referents() {
			return this.$store.state.referent.models 
		},
		loading() {
			return this.$store.state.referent.loading 
		},
		positions() {
			return this.referents.filter(item => {
				return item.position 
			})
		},
		cities() {
			return this.referents.filter(item => {
				return item.city 
			})
		},
		cities_whats_app() {
			return this.referents.filter(item => {
				return item.city && item.whatsapp_link
			})
		},
		cities_referents() {
			return this.referents.filter(item => {
				return item.city && item.name 
			})
		},
	}
}