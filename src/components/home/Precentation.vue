<template>
	<b-row
	class="precentation">
		<b-col
		class="d-none d-lg-block"
		cols="12"
		lg="6">
			<left-banner></left-banner>
		</b-col>
		<b-col
		cols="12"
		lg="6">
			<affiliation-form></affiliation-form>
		</b-col>
	</b-row>
</template>
<script>
import LeftBanner from '@/components/home/LeftBanner'
import AffiliationForm from '@/components/common/AffiliationForm'
export default {
	components: {
		LeftBanner,
		AffiliationForm,
	},
}
</script>
<style lang="sass">
.precentation
	background: url('~@/assets/parana.jpg') no-repeat center center 
	-webkit-background-size: cover
	-moz-background-size: cover
	-o-background-size: cover
	background-size: cover
</style>