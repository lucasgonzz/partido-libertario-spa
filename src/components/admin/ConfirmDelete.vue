<template>
	<b-modal id="confirm-delete" hide-footer hide-header size="sm">
		<p
		class="text-center">¿Seguro que quiere eliminar el afiliado {{ affiliate.name }}?</p>
		<div class="d-grid">
			<b-button
			variant="danger"
			@click="deleteAffiliate">
				<btn-loader
				text="Eliminar"
				:loader="loading"></btn-loader>
			</b-button>
		</div>
	</b-modal>
</template>
<script>
import BtnLoader from '@/components/common/BtnLoader'
export default {
	components: {
		BtnLoader,
	},
	data() {
		return {
			loading: false,
		}
	},
	computed: {
		affiliate() {
			return this.$store.state.affiliates.delete
		},
	},
	methods: {
		deleteAffiliate() {
			this.loading = true 
			this.$api.delete('affiliates/'+this.affiliate.id)
			.then(() => {
				this.loading = false
				this.$store.commit('affiliates/delete')
				this.$toast.success('Afiliado eliminado')
				this.$bvModal.hide('confirm-delete')
			})
			.catch(err => {
				this.loading = false
				console.log(err)
			})
		}
	}
}
</script>