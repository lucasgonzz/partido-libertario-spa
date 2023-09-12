<template>
	<b-row>
		<b-col
		cols="12"
		lg="10"
		xl="8">
			<h1
			class="m-t-25 m-b-25">
				Blogs
			</h1>
			<h3>
				Mas recientes
			</h3>
			<div 
			v-if="!loading"
			class="blogs-wrapper">
				<blog
				v-for="blog in blogs"
				:blog="blog"></blog>
			</div>
			<div 
			v-else
			class="all-center-md">
				<b-spinner
				variant="primary"></b-spinner>				
			</div>
		</b-col>
	</b-row>
</template>
<script>
export default {
	components: {
		Blog: () => import('@/components/blogs/Blog'),
	},
	computed: {
		blogs() {
			return this.$store.state.blog.models 
		},
		loading() {
			return this.$store.state.blog.loading 
		},
	},
	created() {
		this.$store.dispatch('blog/getModels')
	}
}
</script>
<style lang="sass">
.blogs-wrapper
	// display: flex 
	// flex-direction: row 
</style>