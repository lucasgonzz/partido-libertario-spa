<template>
	<div
	class="nav-history"
	v-if="selected_blog">
		<i class="icon-home"></i>
		<router-link :to="{name: 'Home'}">Inicio</router-link> / <router-link :to="{name: 'Blogs'}">Blogs</router-link> / <span>{{ selected_blog.title }}</span>
	</div>
</template>
<script>
import blog from '@/mixins/blog'
export default {
	mixins: [blog],
}
</script>
<style lang="sass">
.nav-history
	margin-top: 45px
	a, span
		color: #666
		text-decoration: none
	a:hover 
		cursor: pointer
		font-weight: bold
</style>