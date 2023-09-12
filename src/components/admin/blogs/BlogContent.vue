<template>
	<div>
  		<vue-editor 
  		id="editor"
		useCustomImageHandler
		@image-added="handleImageAdded"
  		v-model="model.content"/>
	</div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
	props: {
		model: Object,
	},
	components: { 
		VueEditor 
	},
	methods: {
	    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
			// An example of using FormData
			// NOTE: Your key could be different such as:
			// formData.append('file', file)

			var formData = new FormData();
			formData.append('image', file);
			formData.append('model_id', this.model.id);
			formData.append('model_name', 'blog');
			formData.append('prop_name', 'has_many');

			this.$api.post('upload-image', formData)
			.then(res => {
				const url = res.data.image_url; // Get url from response
				Editor.insertEmbed(cursorLocation, "image", url);
				resetUploader();
			})
			.catch(err => {
				console.log(err);
			})
		}
	}
};
</script>