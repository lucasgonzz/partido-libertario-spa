<template>
	<b-row
	class="propuestas">
		<b-col
		cols="12">
			<h1
			v-animate-onscroll="'animated bounceInLeft'">
				NUESTRAS PROPUESTAS
			</h1>
		</b-col>
		<b-col
		cols="12"
		lg="4"
		v-for="propuesta in propuestas"
		:key="propuesta.icon">
			<div
			v-animate-onscroll="'animated flipInX'" 
			class="propuesta b-r-1">
				<i :class="propuesta.icon"></i>
				<h5>
					{{ propuesta.title }}
				</h5>
				<p>
					{{ propuesta.text }}
				</p>
			</div>
		</b-col>
	</b-row>
</template>
<script>
export default {
	computed: {
		propuestas() {
			return [
				{title: 'MINIMO ESTADO', text: 'Vamos a impulsar  una profunda reestructuración del Estado y de los estamentos de la administración publica, suprimiendo órganos cuyas competencias son innecesarias, a los efectos de reducir al mínimo posible la actividad administrativa cumpliendo su labor de forma eficiente.', icon: 'icon-building text-primary'},
				{title: 'LIBRE MERCADO', text: 'Firmar tratados de libre comercio con todo el mundo y eliminar, o reducir al mínimo, los aranceles a la importación, adscribiendo además a las disposiciones de la Organización Mundial del Comercio. Terminar con la práctica de gravar con derechos de exportación nuestras commodities.', icon: 'icon-chart-area text-success'},
				{title: 'IMPUESTOS BAJOS', text: 'El estado te quita el 70% del fruto de tu trabajo, impidiéndote progresar, emprender o ahorrar. Proponemos una reforma tributaria integral poniendo énfasis en la eliminación de los impuestos distorsión que gravan la generación de riqueza genuina. Menos impuestos es mas plata para tu bolsillo.', icon: 'icon-down-circled text-danger'},
			]
		}
	}
}
</script>
<style lang="sass">
.propuestas
	margin-bottom: 100px !important
	h1 
		color: #000
		margin: 2em 0
		font-weight: 800
		text-align: center
		@media screen and (max-width: 992px)
			font-size: 3em
		@media screen and (min-width: 992px)
			font-size: 5em
	.propuesta
		padding: 2em
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px
		margin-bottom: 2em 
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		i 
			font-size: 4em
		h5 
			text-align: center
			font-size: 1.6em
		p
			text-align: justify
			color: rgba(0,0,0,.7)
</style>