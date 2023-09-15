export default {
	properties: [
		{
			text: 'Titulo',
			key: 'title',
			type: 'textarea',
		},
		{
			text: 'Imagen',
			key: 'image_url',
			type: 'image',
			not_cropp: true,
		},
		{
			text: 'Minutos de lectura',
			key: 'read_time',
			type: 'text',
		},
		{
			text: 'Contenido',
			key: 'content',
			type: 'textarea',
			input_full_width: true,
			not_show: true,
		},
		{
			text: 'Link de Facebook',
			key: 'facebook',
			type: 'text',
			not_show: true,
		},
		{
			text: 'Link de Twitter',
			key: 'twitter',
			type: 'text',
			not_show: true,
		},
		{
			text: 'Link de Instagram',
			key: 'instagram',
			type: 'text',
			not_show: true,
		},
	],
	singular_model_name_spanish: 'Blog',
	plural_model_name_spanish: 'Blogs',
	create_model_name_spanish: 'Nuevo',
	text_delete: 'el',
}