<template>
	<div
	class="images"
	v-if="model.id">
		<div>
			<img 
			v-if="model.image_url"
			class="b-r-1 shadow-1"
			:src="image(model)">
			<img 
			v-else
			src="@/assets/user.png">
			<div class="d-grid">
				<b-button
				class="m-t-10"
				size="sm"
				block 
				variant="primary"
				@click="uploadImage(model_name, model, modelPlural(model_name)+'/add', model_name)">
					Cambiar imagen
				</b-button>
			</div>
			<hr>
		</div>
	</div>
</template>
<script>
export default {
	props: ['model', 'model_name'],
	methods: {
		setDelete(image) {
			this.$store.commit(this.modelPlural(this.model_name)+'/setDeleteImage', image)
			this.$bvModal.show('delete-'+this.model_name+'-image')
		}
	}
}
</script>
<style scoped lang="sass">
.images
	img 
		width: 100%
	.VueCarousel-slide
		position: relative
		display: flex
		align-items: center
		&:hover > button 
			display: block
		button 
			position: absolute
			top: 50%
			transform: translateY(-50%)
			left: 50%
			transform: translateX(-50%)
			display: none 

	.slide-img
		max-width: 100%
		@media screen and (max-width: 992px)
			max-height: 70vh
		@media screen and (min-width: 992px)
			max-height: calc(100vh - 150px)
</style>