export default {
	computed: {
		loading() {
			return this.$store.state.blog.loading 
		},
		blogs() {
			return this.$store.state.blog.models 
		},
		selected_blog() {
			return this.$store.state.blog.model
		},
	},
	methods: {
		setBlog() {
			if (!this.blogs.length) {
				console.log('llamando blog/getModels')
				this.$store.dispatch('blog/getModels')
				.then(() => {
					console.log('se llamo')
					this.setBlog()
				})
			} else {
				let blog = this.blogs.find(blog => {
					return blog.title == this.view.replaceAll('-', ' ')
				})
				this.setModel(blog, 'blog')
			}
		}
	}
}