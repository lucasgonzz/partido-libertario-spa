<template>
	<div class="other-blogs">
		<hr>
		<h3>
			Otras publicaciones
		</h3>
		<blog
		v-for="blog in other_blogs"
		:blog="blog"></blog>
	</div>
</template>
<script>
import blog from '@/mixins/blog'
export default {
	mixins: [blog],
	components: {
		Blog: () => import('@/components/blogs/Blog'),
	},
	computed: {
		other_blogs() {
			return this.blogs.filter(blog => {
				return blog.id != this.selected_blog.id 
			})
		}
	}
}
</script>