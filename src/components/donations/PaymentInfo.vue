<template>
	<b-row
	class="m-t-30"
	v-if="payment_status != ''">
		<b-col
		cols="12"
		lg="6">
			<h1>
				¡MUCHAS GRACIAS!
			</h1>
			<h2>
				{{ payment_status }}
			</h2>
		</b-col>
	</b-row>
</template>
<script>
export default {
	computed: {
		payment_status() {
			return this.$store.state.donations.payment_status
		},
	},
}
</script>
<style lang="sass">
.donations 
	h1 
		font-weight: 700
		margin: 1em 0
</style>