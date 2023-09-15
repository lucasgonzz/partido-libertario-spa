<template>
	<div>
		<div
		v-if="!loading">
			<login></login>

			<b-row
			v-if="authenticated"
			class="admin">
				<b-col
				cols="12">
					<update-password></update-password>
					<affiliates></affiliates>		
					<referents></referents>		
					<donations></donations>		
					<blogs></blogs>		
					<departaments></departaments>		
				</b-col>
			</b-row>
			<div>
			</div>
		</div>
	</div>
</template>
<script>
import Login from '@/components/admin/Login'
import UpdatePassword from '@/components/admin/UpdatePassword'
import Affiliates from '@/components/admin/Affiliates'
import Referents from '@/components/admin/Referents'
import Donations from '@/components/admin/Donations'
export default {
	components: {
		Login,
		UpdatePassword,
		Affiliates,
		Referents,
		Donations,
		Blogs: () => import('@/components/admin/blogs/Index'),
		Departaments: () => import('@/components/admin/Departaments'),
	},
	computed: {
		authenticated() {
			return this.$store.state.auth.authenticated
		},
		loading() {
			return this.$store.state.auth.loading
		},
	},
	created() {
		this.$store.dispatch('auth/me')
	}
}
</script>
<style lang="sass">
.admin 
	h1 
		margin: 1em 0
</style>