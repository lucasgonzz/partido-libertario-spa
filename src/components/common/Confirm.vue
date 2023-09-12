<template>
<b-modal :id="id" hide-footer hide-header size="sm">
	<p
	class="text-center">
		{{ text }}
	</p>
	<div class="d-grid">
		<b-button
		block
		class="m-b-0"
		@click="confirm"
		:variant="variant">
			<btn-loader
			:text="btn_text"
			:loader="loading"></btn-loader>
		</b-button>
	</div>
</b-modal>
</template>
<script>
import BtnLoader from '@/components/common/BtnLoader'
export default {
	name: 'Confirm',
	components: {
		BtnLoader,
	},
	data() {
		return {
			loading: false,
		}
	},
	props: {
		text: String,
		actions: Array,
		id: String,
		toast_delete: String,
		btn_text: {
			type: String,
			default: 'Eliminar'
		},
		variant: {
			type: String,
			default: 'danger'
		},
	},
	methods: {
		async confirm() {
			let action_index = 0
			this.loading = true
			while (this.actions[action_index] !== undefined) {
				let res = await this.$store.dispatch(this.actions[action_index])
				action_index++
				if (this.actions[action_index] === undefined) {
					this.loading = false
					this.$toast.success(this.toast_delete)
					this.$bvModal.hide(this.id)
				}
				
			}
		},
	}
}
</script>