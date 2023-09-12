<template>
	<view-component
	v-if="view == 'referents'"
	model_name="referent"></view-component>
</template>
<script>
import admin from '@/mixins/admin'
export default {
	mixins: [admin],
	components: {
		ViewComponent: () => import('@/common-vue/components/view/Index')
	},
}
</script>
<style lang="sass">
.admin.referents
		img 
			width: 100px
			border-radius: 5px
</style>