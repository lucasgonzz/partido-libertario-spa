<template>
	<b-row
	class="m-t-30"
	v-if="selected_amount == '' && payment_status == ''">
		<b-col
		cols="12"
		lg="6">
			<h1>
				Tus aportes nos seran de mucha ayuda
			</h1>
			<b-card
			class="shadow-2"
			title="¿Con cuanto queres colaborar?">
				<b-form-group>
					<b-form-input
					v-model="amount"
					type="number"
					min="1"
					placeholder="Ingresa el monto que quieras donar"
					@keyup.enter="next"></b-form-input>
				</b-form-group>
				<div class="d-grid">
					<b-button
					variant="primary"
					@click="next">
						Siguiente
					</b-button>
				</div>
			</b-card>
		</b-col>
	</b-row>
</template>
<script>
export default {
	data() {
		return {
			amount: '',
		}
	},
	computed: {
		selected_amount() {
			return this.$store.state.donations.selected_amount
		},
		payment_status() {
			return this.$store.state.donations.payment_status
		},
		// amount: {
		// 	get() {
		// 		return this.$store.state.donations.amount
		// 	},
		// 	set(value) {
		// 		this.$store.commit('donations/setAmount', value)
		// 	}
		// }
	},
	methods: {
		next() {
			this.$store.commit('donations/setSelectedAmount', this.amount)
		}
	}
}
</script>
<style lang="sass">
.donations 
	h1 
		font-weight: 700
		margin: 1em 0
</style>