<template>
	<div
	class="afiliation-form shadow-2 b-r-1">
		<h3>
			<strong>
				DEJANOS TUS DATOS
			</strong>
		</h3>
		<p>
			Un referente de tu zona se contactará para que firmes tu afiliación.
		</p>
		<b-form-group
		label="Nombre y Apellido">
			<b-form-input
			v-model="form.name"
			placeholder="Nombre y Apellido"></b-form-input>
		</b-form-group>
		<b-form-group
		label="Numero de documento">
			<b-form-input
			v-model="form.dni"
			placeholder="N° DNI"></b-form-input>
		</b-form-group>
		<b-form-group
		label="Estado civil">
			<b-form-select
			v-model="form.estado_civil"
			:options="estado_civil_options"></b-form-select>
		</b-form-group>
		<b-form-group
		label="Profesion u oficio">
			<b-form-input
			v-model="form.profesion"
			placeholder="Profesion u oficio"></b-form-input>
		</b-form-group>
		<b-form-group
		label="Departamento">
			<b-form-select
			v-model="form.departament_id"
			:options="departaments_options"></b-form-select>
		</b-form-group>
		<b-form-group
		label="Contacto (opcional)">
			<b-form-input
			v-model="form.contacto"
			placeholder="N° Celular o Correo electronico"></b-form-input>
		</b-form-group>
		<b-button
		variant="primary"
		@click="sendForm">
			<btn-loader
			text="Enviar"
			:loader="loading"></btn-loader>
		</b-button>
	</div>
</template>
<script>
import BtnLoader from '@/components/common/BtnLoader'
export default {
	components: {
		BtnLoader,
	},
	data() {
		return {
			form: {
				name: '',
				dni: '',
				estado_civil: '',
				profesion: '',
				departament_id: 0,
				contacto: '',
			},
			loading: false,
		}
	},
	computed: {
		departaments() {
			return this.$store.state.departament.models 
		},
		departaments_options() {
			let items = [{
				text: 'Seleccione departamento',
				value: 0,
			}]
			this.departaments.forEach(departament => {
				items.push({
					text: departament.name,
					value: departament.id,
				})
			})
			return items
		},
		estado_civil_options() {
			return [
				{
					text: 'Seleccione estado civil',
					value: '',
				},
				{
					text: 'casada o casado',
					value: 'casada o casado',
				},
				{
					text: 'soltero o soltera',
					value: 'soltero o soltera',
				},
				{
					text: 'viudo o viuda',
					value: 'viudo o viuda',
				},
				{
					text: 'separada o separado',
					value: 'separada o separado',
				},
				{
					text: 'divorciado o divorciada',
					value: 'divorciado o divorciada',
				},
			]
			
		},
	},
	methods: {
		sendForm() {
			if (this.check()) {
				this.loading = true
				this.$api.post('affiliate', this.form)
				.then(res => {
					console.log(res)
					this.loading = false
					this.$router.push({name: 'Thanks'})
				})
				.catch(err => {
					this.loading = false
					console.log(err)
				})
			}
		},
		check() {
			if (this.form.name == '') {
				this.$toast.error('El nombre es obligatorio')
				return false
			}
			if (this.form.dni == '') {
				this.$toast.error('El dni es obligatorio')
				return false
			}
			return true
		},
	}
}
</script>