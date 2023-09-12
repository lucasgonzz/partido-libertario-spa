<template>
	<div
	v-if="loading"
	class="container-logo">
        <!-- <img class="logo" src="@/assets/logo.png" alt=""> -->
        <!-- <img class="loader" src="@/assets/spinner-redondel.gif" alt=""> -->
        <b-spinner variant="primary"></b-spinner>
	</div> 
</template>
<script>
export default {
	computed: {
		loading() {
			return this.$store.state.auth.loading
		}
	}
}
</script>
<style scoped lang="sass">
.container-logo
	position: absolute
	width: 100vw
	height: 100vh
	// background: rgba(0,0,0,.3)
	background: #FFF
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	img 
		width: 90px
	.loader
		width: 60px
		margin-top: -1em
</style>