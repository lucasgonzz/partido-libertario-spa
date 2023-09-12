<template>
	<div class="redes">
		<div 
		v-if="selected_blog.facebook"
		@click="open(selected_blog.facebook)"
		class="red facebook">
			<i class="icon-facebook"></i>
		</div>
		<div 
		v-if="selected_blog.twitter"
		@click="open(selected_blog.twitter)"
		class="red twitter">
			<i class="icon-twitter"></i>
		</div>
		<div 
		v-if="selected_blog.instagram"
		@click="open(selected_blog.instagram)"
		class="red instagram">
			<i class="icon-instagram"></i>
		</div> 
	</div>
</template>
<script>
import blog from '@/mixins/blog'
export default {
	mixins: [blog],
	methods: {
		open(link) {
			window.open(link)
		}
	}
}
</script>
<style lang="sass">
.redes 
	display: flex 
	flex-direction: row 
	justify-content: flex-start
	align-items: center 
	.red 
		display: flex 
		flex-direction: row 
		justify-content: center 
		align-items: center 
		width: 40px
		height: 40px
		color: #333
		margin-right: 15px
		border-radius: 3px
		cursor: pointer
		i 
			padding: 0

	.facebook
		background: #0088ff
	.twitter
		background: #40bff5
	.instagram
		background: #238cc8
</style>