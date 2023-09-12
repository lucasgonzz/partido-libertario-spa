<template>
	<div
	class="referent">
		<div>
			<h3
			v-if="referent.position">
				{{ referent.position }}
			</h3>
			<p
			class="title"
			v-else>
				{{ referent.city }}
			</p>
		</div> 
		<img 
		v-if="referent.image_url"
		:src="image(referent)"
		:alt="'partido libertario entre rios '+referent.name">
		<p
		class="name">
			{{ referent.name }}
		</p>
	</div>
</template>
<script>
export default {
	props: ['referent'],
}
</script>
<style lang="sass">
.referent 
	display: flex
	background: #FFF
	flex-direction: column
	margin: 2em 0
	padding: 1em
	align-items: center
	// box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px
	// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px
	border-radius: 5px
	@media screen and (max-width: 768px) 
		width: 100%
	@media screen and (min-width: 768px) 
		width: 50%
	.title 
		font-size: 2.4em
		font-weight: 300
	img 
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px
		// box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px
		margin-bottom: 1em
		border-radius: 50%
		width: 300px
		// width: auto
	.name
		font-size: 1.3em
		margin-bottom: 0
		font-weight: bold
</style>