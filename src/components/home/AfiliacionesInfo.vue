<template>
	<b-row
	class="afiliaciones-info">
		<b-col
		cols="12"
		lg="8">
			<h2>
				Partido Provincial Entre Rios
			</h2>
			<p class="counter">
				{{ affiliates.length }}
			</p>
			<p class="info">
				Se requieren un total de 3.500 Afiliaciones
			</p>
		</b-col>
	</b-row>
</template>
<script>
export default {
	computed: {
		affiliates() {
			return this.$store.state.affiliate.models
		}
	}
}
</script>
<style lang="sass">
.afiliaciones-info
	background: #f4f4f4
	color: rgba(0,0,0,.7)
	padding: 80px 0
	h2
		font-size: 30px
		font-weight: 400
		text-align: center
	.counter
		font-size: 70px
		font-weight: 200
		text-align: center
	.info
		font-size: 20px
		text-align: center
</style>