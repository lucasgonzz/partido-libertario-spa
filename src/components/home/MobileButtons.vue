<template>
	<b-row
	class="mobile-buttons d-lg-none">
		<b-col
		cols="12">
			<p>
				Ahora encontrá tu ciudad e ingresá por Whatsapp
			</p>
			<buttons-whats-app></buttons-whats-app>
		</b-col>
	</b-row>
</template>
<script>
import ButtonsWhatsApp from '@/components/home/ButtonsWhatsApp'
export default {
	components: {
		ButtonsWhatsApp,
	},
}
</script>
<style lang="sass">
.mobile-buttons
	p
		font-weight: 800
		font-size: 2em
		margin-top: 2em
</style>