<template>
	<div class="blog-page">
		<h1>
			{{ selected_blog.title }}
		</h1>
		<div class="info">
			<p>
				<i class="icon-clock"></i>
				{{ since(selected_blog.created_at) }}
			</p>
			<p
			v-if="selected_blog.read_time">
				<i class="icon-book"></i>
				{{ selected_blog.read_time }} minutos de lectura
			</p>
		</div>

		<redes></redes>	

		<img 
		class="image-title"
		:src="selected_blog.image_url" alt="">
		
		<span
		class="content"
		v-html="selected_blog.content"></span>
	</div>
</template>
<script>
import blog from '@/mixins/blog'
export default {
	mixins: [blog],
	components: {
		Redes: () => import('@/components/blog/Redes'),
	},
}
</script>
<style lang="sass">
.blog-page 
	h1 
		font-size: 42px
		font-weight: bold
		margin: 30px 0

	.info 
		display: flex 
		flex-direction: row 
		justify-content: space-between
		p  
			color: #666
			font-size: 14px
			margin-right: 10px

	.image-title 
		width: 100%
		margin-bottom: 25px

	.content
		img 
			max-width: 600px
</style>