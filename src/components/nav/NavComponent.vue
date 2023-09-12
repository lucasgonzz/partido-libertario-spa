<template>
	<b-navbar 
	v-if="show_nav"
	toggleable="lg" type="dark" class="s-1">
		<b-navbar-brand 
		class="apretable"
		:to="{name: 'Home'}">
			<img src="@/assets/logo.png" alt="">
		</b-navbar-brand>

		<i 
		v-b-toggle.mobile-nav
		class="btn-nav-mobile icon-bars d-lg-none"></i>

		<b-collapse id="nav-collapse" is-nav>
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
				@click="to('Blogs', 'blog/getModels')"
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
		</b-collapse>
	</b-navbar>
</template>
<script>
import nav from '@/mixins/nav'
import AdminNav from '@/components/admin/Nav'
export default {
	mixins: [nav],
	components: {
		AdminNav,
	},
	computed: {
		show_nav() {
			if (this.$route.name == 'Admin' && !this.authenticated) {
				return false
			}
			return true
		}
	}
}
</script>
