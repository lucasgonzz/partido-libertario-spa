<template>
	<div
	class="left-banner">
		<h1>
			SUMATE A LAS IDEAS DE LA LIBERTAD
		</h1>
		<buttons-whats-app></buttons-whats-app>
	</div>
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
.left-banner
	h1 
		color: #FFF
		font-size: 80px !important
		font-weight: 800
		text-shadow: 9px -11px 22px rgb(0 0 0 / 30%)
		margin-top: 2em
		text-align: center
</style>