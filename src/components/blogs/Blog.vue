<template>
	<div 
	v-if="blog"
	class="blog">
		<img 
		slot="image"
		:src="blog.image_url" alt="">

		<div class="content">
			<div class="info">
				<p>
					<i class="icon-clock"></i>
					{{ since(blog.created_at) }}
				</p>
				<p>
					<i class="icon-book"></i>
					{{ blog.read_time }}min
				</p>
			</div>
			<h5
			@click="readMore">
				{{ blog.title }}
			</h5>
			<p>
				{{ content }}
			</p>
			<b-button
			@click="readMore"
			variant="primary">
				Leer mas 
				<i class="icon-right"></i>
			</b-button>
		</div>
	</div>
</template>
<script>
import blog from '@/mixins/blog'
import VueScreenSize from 'vue-screen-size'
export default {
	mixins: [blog, VueScreenSize.VueScreenSizeMixin],
	props: {
		blog: Object,
	},
	computed: {
		content() {
			let regex = /(<([^>]+)>)/ig;
			let text = this.blog.content.replace(regex, '').replaceAll('&nbsp;', ' ')
			if (this.$vssWidth < '550') {
				return text.substring(0, 100)+'...'
			} else if (this.$vssWidth > '550' && this.$vssWidth < '768') {
				return text.substring(0, 160)+'...'
			} else if (this.$vssWidth > '768' && this.$vssWidth < '992') {
				return text.substring(0, 110)+'...'
			} else if (this.$vssWidth > '992' && this.$vssWidth < '1200') {
				return text.substring(0, 100)+'...' 
			} else {
				return text.substring(0, 200)+'...'
			}
		},
	},
	methods: {
		readMore() {
			this.$router.push({name: 'Blog', params: {view: this.blog.title.replaceAll(' ', '-')}})
			this.setBlog()
		}
	}
}
</script>
<style lang="sass">
@import '@/sass/_custom'
.blog 
	width: 100%
	@media screen and (max-width: 768px)
		margin: 30px 0

		display: flex 
		flex-direction: column
		justify-content: center
		align-items: flex-start
	@media screen and (min-width: 768px)
		margin: 30px auto

		display: flex 
		flex-direction: row 
		justify-content: center
		align-items: flex-start

	
	img
		@media screen and (max-width: 768px)
			width: 100%
			margin-bottom: 10px
		@media screen and (min-width: 768px)
			width: 40%
			margin-right: 15px

	.content
		height: 100%
		display: flex 
		flex-direction: column 
		justify-content: space-between
		align-items: flex-start

		.info 
			display: flex 
			flex-direction: row 
			p  
				color: #666
				font-size: 12px
				margin-right: 10px


		h5 
			font-weight: bold 
			font-size: 1.5em
			text-align: left
			&:hover
				color: $blue 
				cursor: pointer

		p
			text-align: left
			margin-bottom: 10px

		button 
			display: inline-block
			width: auto
</style>