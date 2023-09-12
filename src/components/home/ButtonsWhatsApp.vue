<template>
	<div
	v-animate-onscroll="'animated bounceInLeft'"
	class="buttons">
		<div
		v-if="loading">
			<b-skeleton
			v-for="i in 12"
			type="button"></b-skeleton>
		</div>
		<div
		class="cont-buttons"
		v-else>
			<b-button
			v-for="referent in cities_whats_app"
			:key="referent.whatsapp_link"
			:href="referent.whatsapp_link"
			target="_blank"
			variant="success">
				<i class="icon-whatsapp"></i>
				{{ referent.city }}
			</b-button>
		</div>
	</div>
</template>
<script>
import referents from '@/mixins/referents'
export default {
	mixins: [referents],
}
</script>
<style lang="sass">
.buttons 
	margin-top: 2em
	.cont-buttons
		display: flex 
		flex-direction: row 
		justify-content: space-around
		flex-wrap: wrap
	.btn, .b-skeleton
		@media screen and (max-width: 992px)
			display: block
			width: 100%
			margin-bottom: 1em
			background: #25D366
			border-color: #25D366
			font-size: 1.2em
		@media screen and (min-width: 992px)
			background: #25D366
			border-color: #25D366
			font-size: 1.2em
			width: 40%
			margin: .5em
			display: inline-block
</style>