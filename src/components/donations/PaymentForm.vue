<template>
	<b-row
	v-if="selected_amount != '' && payment_status == ''">
		<b-col
		cols="12"
		lg="8">
			<form 
			class="afiliation-form shadow-2 b-r-1"
			id="form-checkout">
				<h3>
					Datos personales
				</h3>
				<b-form-group
				label="Tipo de documento">
					<b-form-input
					v-model="form.email"
					id="form-checkout__cardholderEmail"
					name="cardholderEmail"></b-form-input>
				</b-form-group>
				<b-form-group
				label="Tipo de documento">
					<b-form-select
					class="form-control"
					:options="doc_type_options"
					v-model="form.doc_type"
					ref="docType"
					name="identificationType"
					id="form-checkout__identificationType"></b-form-select>
				</b-form-group>
				<b-form-group
				label="Numero de documento">
					<b-form-input
					v-model="form.doc_number"
					name="identificationNumber"
					type="number"
					id="form-checkout__identificationNumber"></b-form-input>
				</b-form-group>
				<h3>
					Datos de la tarjeta
				</h3>
				<b-form-group
				label="Titular de la tarjeta">
					<b-form-input
					v-model="form.titular"
					name="cardholderName"
					id="form-checkout__cardholderName"></b-form-input>
				</b-form-group>
				<b-form-group
				label="Numero de la tarjeta">
					<b-form-input
					v-model="form.card_number"
					type="number"
					name="cardNumber"
					id="form-checkout__cardNumber"></b-form-input>
				</b-form-group>
				<b-form-group
				label="Fecha de vencimineto">
					<div class="j-between">
						<b-form-input
						@change="setMonth"
						@keyup="checkMonth"
						class="w-49"
						type="number"
						v-model="form.month"
						id="form-checkout__cardExpirationMonth"
						name="cardExpirationMonth"></b-form-input>
						/
						<b-form-input
						@keyup="checkYear"
						v-model="form.year"
						class="w-49"
						type="number"
						id="form-checkout__cardExpirationYear"
						name="cardExpirationYear"></b-form-input>
					</div>
				</b-form-group>
				<b-form-group
				label="Código de seguridad">
					<b-form-input
					name="securityCode"
					id="form-checkout__securityCode"></b-form-input>
				</b-form-group>
				<b-form-group
				label="Banco emisor">
					<b-form-select
					class="form-control"
					v-model="form.issuer"
					name="issuer"
					id="form-checkout__issuer"></b-form-select>
				</b-form-group>
				<b-form-group
				label="Cuotas">
					<b-form-select
					class="form-control"
					v-model="form.installments"
					name="installments"
					id="form-checkout__installments"></b-form-select>
				</b-form-group>
				<b-form-group>
					<!-- <div class="b-grid"></div> -->
					<b-button
					block
					id="form-checkout__submit"
					class="m-b-15"
					variant="primary"
					type="submit">
						<btn-loader
						text="Hacer donacion"
						:loader="loading"></btn-loader>
					</b-button>
					<b-button
					@click="changeAmount"
					variant="danger">
						Cambiar metodo de pago
					</b-button>
				</b-form-group>
			</form>
		</b-col>
	</b-row>
</template>
<script>
import BtnLoader from '@/components/common/BtnLoader' 
export default {
	name: 'DonationForm',
	components: {
		BtnLoader,
	},
	created() {
	},
	computed: {
		selected_amount() {
			return this.$store.state.donations.selected_amount
		},
		payment_status() {
			return this.$store.state.donations.payment_status
		},
		url() {
			return process.env.VUE_APP_API_URL+'/api/donations'
		},
		doc_type_options() {
			return [
				{ value: 'DNI', text: 'DNI' },
				{ value: 'CI', text: 'Cédula' },
				{ value: 'LC', text: 'L.C' },
				{ value: 'LE', text: 'L.E' },
			]
		},
	},
	data() {
		return {
			form: {
				titular: '',
				month: '',
				year: '',
				token: '',
				description: '',
				installments: 0,
				transaction_amount: 0,
				payment_method_id: 0,
				email: '',
				card_number: '',
				card_id: 0,
				customer_id: null,
				doc_type: 'DNI',
				doc_number: '',
				issuer: 0,
			},
			loading: false,
		}
	},
	watch: {
		selected_amount() {
			this.setTransactionAmount()
			this.setDescription()
			setTimeout(() => {
				this.initMercadoPago()
			}, 500)
		},
	},
	methods: {
		setMonth() {
			if (this.form.month.length == 1) {
				this.form.month = '0'+this.form.month
			}
		},
		checkMonth() {
			if (this.form.month.length == 2) {
				document.getElementById('form-checkout__cardExpirationYear').focus()
			}
		},
		checkYear() {
			if (this.form.year.length == 2) {
				document.getElementById('form-checkout__securityCode').focus()
			}
		},
		changeAmount() {
			this.$store.commit('donations/setSelectedAmount', '')
		},
		setTransactionAmount() {
			this.form.transaction_amount = this.selected_amount.toString()
		},
		setDescription() {
			this.form.description = 'Donacion a Partido Libertario Entre Rios'
		},
		initMercadoPago() {
			console.log('initMercadoPago')
			this.mp = new MercadoPago(process.env.VUE_APP_MERCADO_PAGO_PUBLIC_KEY)
			const cardForm = this.mp.cardForm({
				amount: this.form.transaction_amount,
				autoMount: true,
				form: {
					id: "form-checkout",
					cardholderName: {
						id: "form-checkout__cardholderName",
						placeholder: "Titular de la tarjeta",
					},
					cardholderEmail: {
						id: "form-checkout__cardholderEmail",
						placeholder: "Correo electronico",
					},
					cardNumber: {
						id: "form-checkout__cardNumber",
						placeholder: "Número de la tarjeta",
					},
					cardExpirationMonth: {
						id: "form-checkout__cardExpirationMonth",
						placeholder: "Mes de vencimiento",
					},
					cardExpirationYear: {
						id: "form-checkout__cardExpirationYear",
						placeholder: "Año de vencimiento",
					},
					securityCode: {
						id: "form-checkout__securityCode",
						placeholder: "Código de seguridad",
					},
					installments: {
						id: "form-checkout__installments",
						placeholder: "Cuotas",
					},
					identificationType: {
						id: "form-checkout__identificationType",
						placeholder: "Tipo de documento",
					},
					identificationNumber: {
						id: "form-checkout__identificationNumber",
						placeholder: "Número de documento",
					},
					issuer: {
						id: "form-checkout__issuer",
						placeholder: "Banco emisor",
					},
				},
				callbacks: {
					onFormMounted: error => {
						if (error) {
							console.warn("Form Mounted handling error: ")	
							console.warn(error)
							return	
						} 
						console.log("Form mounted")
					},
					onSubmit: event => {
						event.preventDefault()

						let card_data = cardForm.getCardFormData()
						console.log('card_data:')
						console.log(card_data)
						
						this.form.transaction_amount = card_data.amount
						this.form.installments = card_data.installments
						this.form.issuer = card_data.issuerId
						this.form.payment_method_id = card_data.paymentMethodId
						this.form.token = card_data.token
						
						this.loading = true
						this.$api.post('/donations', this.form)
						.then(res => {
							this.loading = false
							let donation = res.data.donation
							console.log(res)
							let status
							if (donation.status == 'approved') {
								status = 'Ya recibimos tu donacion'
							} else {
								status = 'Recibiras un correo notificandote el estado de la transaccion'
							}
							this.$store.commit('donations/setPaymentStatus', status)
						})
						.catch(err => {
							this.loading = false
							console.log(err)
						})
					},
					onFetching: (resource) => {
						console.log("Fetching resource: ")
						console.log(resource)
					},
				},
			})
		},
	}
}
</script>
<style lang="sass">
#paymentForm
	.col-form-label
		text-align: left
		// padding-left: 1em
</style>