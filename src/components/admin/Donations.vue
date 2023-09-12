<template>
	<div
	v-if="view == 'donations'">
		<h1>DONACIONES</h1>
		<b-table
		v-if="!loading"
		head-variant="light"  
		hover 
		responsive
		striped 
		:fields="fields"
		:items="items">
		</b-table>
		<b-skeleton-table
		v-else
		:hide-header="false"
		:rows="12"
		:columns="10"
		:table-props="{ bordered: true, striped: true }"
		></b-skeleton-table>
	</div>
</template>
<script>
import admin from '@/mixins/admin'
export default {
	mixins: [admin],
	computed: {
		donations() {
			return this.$store.state.donations.donations
		},
		loading() {
			return this.$store.state.donations.loading
		},
		fields() {
			return [
				{ key: 'email', label: 'Email' },
				{ key: 'doc_number', label: 'DNI' },
				{ key: 'installments', label: 'Cuotas' },
				{ key: 'payment_method_id', label: 'Tarjeta' },
				{ key: 'transaction_amount', label: 'Monto' },
				{ key: 'status', label: 'Estado' },
				{ key: 'status_detail', label: 'Detalle' },
				{ key: 'created_at', label: 'Fecha' },
			]
		},   
		items() {
			let items = []
			this.donations.forEach(donation => {
				items.push({
					email: donation.email,
					doc_number: donation.doc_number,
					installments: donation.installments,
					payment_method_id: donation.payment_method_id,
					transaction_amount: this.price(donation.transaction_amount),
					status: donation.status,
					status_detail: donation.status_detail,
					created_at: this.date(donation.created_at)
				})
			})
			return items
		}
	},
}
</script>