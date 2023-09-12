<template>
<b-modal id="image-modal" hide-footer hide-header size="xl">
	<span 
	@click="close"
	class="close">
		<i class="icon-cancel-2"></i>
	</span>
	<img 
	 v-if="image != ''"
	:src="require('../../assets/fotos/'+image+'.jpg')" alt="">
</b-modal>
</template>
<script>
export default {
	computed: {
		image() {
			return this.$store.state.images.image_to_show
		}
	},
	methods: {
		close() {
			this.$bvModal.hide('image-modal')
		}
	}
}
</script>
<style lang="sass">
#image-modal
	.modal-body
		padding: 0
		img 
			width: 100%
			border-radius: .2em
		.close 
			position: absolute
			right: 10px
			top: 10px
			color: #FFF
			cursor: pointer
			font-size: 2em
</style>