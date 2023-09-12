<template>
	<b-row>
		<b-col
		class="m-t-30"
		cols="12"
		lg="10">
			<div class="cont-images">
				<img 
				@click="showImage(j)"
				v-for="j in 29"
				class="shadow-2 c-p apretable"
				:src="require('../../assets/fotos/'+j+'.jpg')" alt="">
			</div>
		</b-col>
	</b-row>
</template>	
<script>
export default {
	methods: {
		showImage(image) {
			this.$store.commit('images/setImageToShow', image)
			this.$bvModal.show('image-modal')
		}
	}
}
</script>
<style lang="sass">
.cont-images
	display: flex 
	flex-wrap: wrap
	justify-content: center
	img 
		border-radius: .3em
		margin: 1em
		height: auto
		@media screen and (max-width: 992px)
			width: 98%
		@media screen and (min-width: 992px)
			width: 29%
</style>