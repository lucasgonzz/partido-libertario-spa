<template>
<b-sidebar id="mobile-nav" shadow>
	<div class="px-3 py-2">
		<admin-nav
		v-if="show_admin_nav"></admin-nav>
		<b-navbar-nav
		v-else>
			<b-nav-item
			class="apretable"
			:to="{name: 'Home'}"
			:class="isActive('Home')">Inicio</b-nav-item>
			<b-nav-item
			class="apretable"
			:to="{name: 'Blogs'}"
			:class="isActive('Blogs')">Blogs</b-nav-item>
			<b-nav-item
			class="apretable"
			:to="{name: 'Referents'}"
			:class="isActive('Referents')">Referentes</b-nav-item>
			<b-nav-item
			class="apretable"
			:to="{name: 'Collaborate'}"
			:class="isActive('Collaborate')">Colabora</b-nav-item>
			<b-nav-item
			class="apretable"
			:to="{name: 'Images'}"
			:class="isActive('Images')">Fotos</b-nav-item>
			<b-nav-item
			class="apretable"
			:to="{name: 'Donations'}"
			:class="isActive('Donations')">DONACIONES</b-nav-item>
		</b-navbar-nav>
	</div>
</b-sidebar>
</template>
<script>
import nav from '@/mixins/nav'
import AdminNav from '@/components/admin/Nav'
export default {
	mixins: [nav],
	components: {
		AdminNav,
	},
}
</script>