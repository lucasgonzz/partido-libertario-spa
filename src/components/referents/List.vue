<template>
	<div
	class="referents">
		<referent
		v-for="referent in positions"
		:referent="referent"></referent>
		<h3
		class="m-30">
			Ciudades 
		</h3>
		<referent
		v-for="referent in cities_referents"
		:referent="referent"></referent>
	</div>
</template>
<script>
import Referent from '@/components/referents/ReferentCard'

import referents from '@/mixins/referents'
export default {
	mixins: [referents],
	components: {
		Referent,
	},
}
</script>
<style lang="sass">
.referents 
	display: flex
	flex-direction: column
	align-items: center
	h3
		font-size: 3em
</style>