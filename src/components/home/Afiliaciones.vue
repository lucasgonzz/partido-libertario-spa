<template>
	<b-row
	class="afiliaciones">
		<b-col
		cols="12"
		lg="8">
			<h1
			v-animate-onscroll="'animated rubberBand'">
				ES TIEMPO DE ACTUAR
			</h1>
			<h2>
				NECESITAMOS 3.500 AFILIACIONES
			</h2>
			<p>
				Con tu afiliación vamos a poder ser una opción genuina en las elecciones, para enfrentar a la casta política que vive sin ajustes. TENEMOS QUE SER LA OPCIÓN QUE AJUSTE A LA CLASE POLITICA
			</p>
			<div class="j-center">
				<b-button
				v-animate-onscroll="'animated rubberBand'"
				:to="{name: 'Collaborate'}">
					Afiliate
				</b-button>
			</div>
		</b-col>
	</b-row>
</template>
<style lang="sass">
.afiliaciones
	background: linear-gradient(140deg, #0c0707 0%, #2642D3 100%)
	color: #FFF
	h1 
		font-size: 70px
		margin-top: 1em
		font-weight: 700
		text-align: center
	h2
		font-size: 50px
		font-weight: 300
		text-align: center
	p
		font-size: 20px
		font-weight: 300
		text-align: center
	.btn 
		margin: 70px 0
		font-size: 1.4em
		background: #FFF
		color: #0c0707
</style>