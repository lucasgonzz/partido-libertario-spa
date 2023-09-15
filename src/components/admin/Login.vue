<template>
	<b-row
	class="login"
	v-if="!authenticated">
		<b-col
		cols="12"
		md="6"
		lg="4">
			<b-card
			class="shadow"
			title="Iniciar Sesion">
				<b-form-group>
					<b-form-input
					@keyup.enter="login"
					placeholder="Nombre"
					v-model="form.name"></b-form-input>
				</b-form-group>
				<b-form-group>
					<b-form-input
					@keyup.enter="login"
					placeholder="Contraseña"
					type="password"
					v-model="form.password"></b-form-input>
				</b-form-group>
				<div class="d-grid">
					<b-button
					@click="login"
					variant="primary">
						<btn-loader
						text="Iniciar sesion"
						:loader="loading"></btn-loader>
					</b-button>
				</div>
			</b-card>
		</b-col>
	</b-row>
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
				password: '',
			}
		}
	},
	computed: {
		loading() {
			return this.$store.state.auth.loading
		},
		authenticated() {
			return this.$store.state.auth.authenticated
		},
	},
	methods: {
		login() {
			if (this.check()) {
				this.$store.dispatch('auth/login', this.form)
				.then(() => {
					// setTimeout(() => {
					// 	if (!this.authenticated) {
					// 		this.$toast.error('Revise sus datos')
					// 	}
					// }, 1000)
				})
			}
		},
		check() {
			if (this.form.name == '') {
				this.$toast.error('Ingrese el nombre')
				return false
			}
			if (this.form.password == '') {
				this.$toast.error('Ingrese la contraseña')
				return false
			}
			return true
		}
	}
}
</script>
<style lang="sass">
.login 
	margin-top: 50px !important
</style>