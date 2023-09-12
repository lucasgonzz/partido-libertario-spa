<template>
	<b-row
	v-if="view == 'blogs'">
		<b-col
		cols="12">
			<view-component
			model_name="blog">
				<template v-slot:content="data">
					<blog-content
					:model="data.model"></blog-content>
				</template>
			</view-component>
		</b-col>
	</b-row>
</template>
<script>
import admin from '@/mixins/admin'
export default {
	mixins: [admin],
	components: {
		ViewComponent: () => import('@/common-vue/components/view/Index'),
		BlogContent: () => import('@/components/admin/blogs/BlogContent'),
	},
}
</script>