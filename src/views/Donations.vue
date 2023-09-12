<template>
	<div
	class="donations">
		<select-amount></select-amount>
		<payment-form></payment-form>
		<payment-info></payment-info>
	</div>
</template>
<script>
import SelectAmount from '@/components/donations/SelectAmount'
import PaymentForm from '@/components/donations/PaymentForm'
import PaymentInfo from '@/components/donations/PaymentInfo'
export default {
	components: {
		SelectAmount,
		PaymentForm,
		PaymentInfo,
	},
}
</script>
<style lang="sass">
.admin 
	h1 
		margin: 1em 0
</style>