<template>
	<b-row>
		<b-col
		cols="12"
		lg="8">
			<loader
			v-if="loading"></loader>

			<div
			v-else-if="selected_blog">
				<nav-history></nav-history>

				<blog></blog>

				<other-blogs></other-blogs>	 
			</div>	
		</b-col>
	</b-row>
</template>
<script>
import blog from '@/mixins/blog'
export default {
	mixins: [blog],
	components: {
		Loader: () => import('@/components/blog/Loader'),
		NavHistory: () => import('@/components/blog/NavHistory'),
		Blog: () => import('@/components/blog/Blog'),
		OtherBlogs: () => import('@/components/blog/OtherBlogs'),
	},
	created() {
		if (!this.selected_blog.id) {
			console.log('entroooooo') 
			this.setBlog()
		} else {
			console.log('NOOOOO entroooooo') 
			console.log(this.selected_blog)
		}
	}
}
</script>