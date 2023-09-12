<template>
	<view-component
	v-if="view == 'affiliates'"
	model_name="affiliate"></view-component>
</template>
<script>
import admin from '@/mixins/admin'
export default {
	mixins: [admin],
	components: {
		ViewComponent: () => import('@/common-vue/components/view/Index'),
	}
}
</script>