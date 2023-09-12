<template>
	<view-component
	v-if="view == 'blogs'"
	model_name="blog">
		<template #content>
			<blog-content></blog-content>
		</template>
	</view-component>
</template>
<script>
import admin from '@/mixins/admin'
export default {
	mixins: [admin],
	components: {
		ViewComponent: () => import('@/common-vue/components/view/Index'),
		BlogContent: () => import('@/components/admin/BlogContent'),
	},
}
</script>