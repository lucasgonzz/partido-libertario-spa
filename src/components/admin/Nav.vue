<template>
	<b-navbar-nav>
		<b-nav-item-dropdown 
		text="Admin" 
		right>
			<b-dropdown-item
			@click="updatePassword">Cambiar contraseña</b-dropdown-item>
			<b-dropdown-item
			@click="logout">
				<btn-loader
				text="Cerrar sesion"
				:loader="loading"></btn-loader>
			</b-dropdown-item>
		</b-nav-item-dropdown>
		<b-nav-item
		class="apretable"
		@click="setView('affiliates', 'affiliate/getModels')"
		:class="isActive('affiliates')">Afiliados</b-nav-item>
		<b-nav-item
		class="apretable"
		@click="setView('blogs', 'blog/getModels')"
		:class="isActive('blogs')">Blogs</b-nav-item>
		<b-nav-item
		class="apretable"
		@click="setView('referents', 'referent/getModels')"
		:class="isActive('referents')">Referentes</b-nav-item>
		<b-nav-item
		class="apretable"
		@click="setView('departaments', 'departament/getModels')"
		:class="isActive('departaments')">Departamentos</b-nav-item>
		<b-nav-item
		class="apretable"
		@click="setView('donations')"
		:class="isActive('donations')">Donaciones</b-nav-item>
	</b-navbar-nav>
</template>
<script>
import BtnLoader from '@/components/common/BtnLoader'
import admin from '@/mixins/admin'
export default {
	mixins: [admin],
	components: {
		BtnLoader,
	},
	computed: {
		loading() {
			return this.$store.state.auth.loading
		},
	},
	methods: {
		logout() {
			this.$store.dispatch('auth/logout')
		},
		updatePassword() {
			this.$bvModal.show('update-password')
		}
	}
}
</script>
<style lang="sass">
.admin
	.buttons 
		margin-top: 30px
		display: flex
		justify-content: flex-end
		.btn  
			margin-left: .5em
</style>